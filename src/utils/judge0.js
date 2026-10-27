// Judge0 API integration for executing Python, Java, C++, and JavaScript
export const JUDGE0_LANGUAGES = {
  javascript: { id: 63, name: 'JavaScript (Node.js 12.14.0)', ext: 'js' },
  python: { id: 71, name: 'Python (3.8.1)', ext: 'py' },
  java: { id: 62, name: 'Java (OpenJDK 13.0.1)', ext: 'java' },
  cpp: { id: 54, name: 'C++ (GCC 9.2.0)', ext: 'cpp' },
}

export function toBase64(str) {
  if (!str) return ''
  try {
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(str, 'utf-8').toString('base64')
    }
  } catch {}
  try {
    const bytes = new TextEncoder().encode(str)
    let binary = ''
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
  } catch {
    return btoa(unescape(encodeURIComponent(str)))
  }
}

export function fromBase64(str) {
  if (!str) return ''
  try {
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(str, 'base64').toString('utf-8')
    }
  } catch {}
  try {
    const binary = atob(str)
    const bytes = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i)
    }
    return new TextDecoder().decode(bytes)
  } catch {
    try {
      return decodeURIComponent(escape(atob(str)))
    } catch {
      return atob(str)
    }
  }
}

export function parseInputParams(rawInput) {
  if (typeof rawInput !== 'string') return {}
  const text = rawInput.trim().replace(/\r\n/g, '\n').replace(/\n=\n/g, ' = ')
  const lines = text.split('\n')
  const params = {}
  let currentKey = null
  let currentVal = []

  for (let line of lines) {
    line = line.trim()
    if (!line) continue
    if (/^return\s*=/i.test(line)) continue

    const eqIdx = line.indexOf('=')
    if (eqIdx !== -1 && /^[a-zA-Z_][a-zA-Z0-9_]*\s*$/.test(line.slice(0, eqIdx))) {
      if (currentKey) {
        params[currentKey] = parseValue(currentVal.join('\n').trim())
      }
      currentKey = line.slice(0, eqIdx).trim()
      currentVal = [line.slice(eqIdx + 1).trim()]
    } else if (currentKey) {
      currentVal.push(line)
    }
  }
  if (currentKey) {
    params[currentKey] = parseValue(currentVal.join('\n').trim())
  }
  return params
}

function parseValue(valStr) {
  try { return JSON.parse(valStr) } catch {
    if (!isNaN(valStr) && valStr !== '') return Number(valStr)
    return valStr
  }
}

function inferTypeCpp(val) {
  if (typeof val === 'number') return Number.isInteger(val) ? 'int' : 'double'
  if (typeof val === 'boolean') return 'bool'
  if (typeof val === 'string') return 'string'
  if (Array.isArray(val)) {
    if (val.length === 0) return 'vector<int>'
    if (Array.isArray(val[0])) {
      if (typeof val[0][0] === 'string') return 'vector<vector<string>>'
      return 'vector<vector<int>>'
    }
    if (typeof val[0] === 'string') return 'vector<string>'
    return 'vector<int>'
  }
  return 'string'
}

function formatCppLiteral(val) {
  if (typeof val === 'number') return String(val)
  if (typeof val === 'boolean') return val ? 'true' : 'false'
  if (typeof val === 'string') return JSON.stringify(val)
  if (Array.isArray(val)) {
    return '{' + val.map(formatCppLiteral).join(', ') + '}'
  }
  return JSON.stringify(val)
}

function inferTypeJava(val) {
  if (typeof val === 'number') return Number.isInteger(val) ? 'int' : 'double'
  if (typeof val === 'boolean') return 'boolean'
  if (typeof val === 'string') return 'String'
  if (Array.isArray(val)) {
    if (val.length === 0) return 'int[]'
    if (Array.isArray(val[0])) {
      if (typeof val[0][0] === 'string') return 'String[][]'
      return 'int[][]'
    }
    if (typeof val[0] === 'string') return 'String[]'
    return 'int[]'
  }
  return 'String'
}

function formatJavaLiteral(val) {
  if (typeof val === 'number') return String(val)
  if (typeof val === 'boolean') return val ? 'true' : 'false'
  if (typeof val === 'string') return JSON.stringify(val)
  if (Array.isArray(val)) {
    if (Array.isArray(val[0])) {
      return 'new int[][]{' + val.map(v => '{' + v.join(', ') + '}').join(', ') + '}'
    }
    if (typeof val[0] === 'string') {
      return 'new String[]{' + val.map(s => JSON.stringify(s)).join(', ') + '}'
    }
    return 'new int[]{' + val.join(', ') + '}'
  }
  return JSON.stringify(val)
}

export function buildHarness(code, language, input) {
  // 1. PYTHON
  if (language === 'python') {
    if (code.includes('__main__') || code.includes('sys.stdin.read')) {
      return code
    }
    return `${code}

import sys, json

def _parse_input(raw):
    raw = raw.strip().replace('\\r\\n', '\\n').replace('\\n=\\n', ' = ')
    lines = raw.split('\\n')
    params = []
    current_key = None
    current_val = []
    for line in lines:
        line = line.strip()
        if not line or line.lower().startswith('return'):
            continue
        eq_idx = line.find('=')
        if eq_idx != -1 and line[:eq_idx].strip().isidentifier():
            if current_key is not None:
                val_str = '\\n'.join(current_val).strip()
                try:
                    params.append(json.loads(val_str))
                except:
                    params.append(val_str)
            current_key = line[:eq_idx].strip()
            current_val = [line[eq_idx+1:].strip()]
        elif current_key is not None:
            current_val.append(line)
    if current_key is not None:
        val_str = '\\n'.join(current_val).strip()
        try:
            params.append(json.loads(val_str))
        except:
            params.append(val_str)
    return params

def _run_harness():
    if 'solve' not in globals():
        return
    raw = sys.stdin.read().strip()
    if not raw:
        return
    params = _parse_input(raw)
    import inspect
    sig = inspect.signature(solve)
    res = None
    try:
        if len(sig.parameters) == len(params):
            res = solve(*params)
        elif len(params) == 1 and len(sig.parameters) == 1:
            res = solve(params[0])
        elif len(sig.parameters) == 1:
            res = solve(raw)
        else:
            res = solve(*params)
    except Exception as e:
        sys.stderr.write(str(e))
        return
    if res is not None:
        if isinstance(res, (list, dict)):
            print(json.dumps(res))
        elif isinstance(res, bool):
            print(str(res).lower())
        else:
            print(res)

if __name__ == '__main__':
    _run_harness()
`
  }

  // 2. C++
  if (language === 'cpp') {
    if (code.includes('int main(')) {
      return code
    }

    const params = parseInputParams(input)
    let declarations = ''
    let callArgs = []
    for (const [key, val] of Object.entries(params)) {
      const cppType = inferTypeCpp(val)
      const literal = formatCppLiteral(val)
      declarations += `        ${cppType} ${key} = ${literal};\n`
      callArgs.push(key)
    }

    const callExpr = callArgs.length > 0 ? `solve(${callArgs.join(', ')})` : `solve()`

    return `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <map>
#include <unordered_map>
#include <set>
#include <unordered_set>
#include <queue>
#include <stack>
#include <cmath>
using namespace std;

${code}

template<typename T>
void _print_res(const T& val) {
    cout << boolalpha << val << endl;
}
template<typename T>
void _print_res(const vector<T>& vec) {
    cout << "[";
    for(size_t i=0; i<vec.size(); ++i) {
        if(i > 0) cout << ",";
        cout << vec[i];
    }
    cout << "]" << endl;
}
template<>
void _print_res(const vector<string>& vec) {
    cout << "[";
    for(size_t i=0; i<vec.size(); ++i) {
        if(i > 0) cout << ",";
        cout << "\\"" << vec[i] << "\\"";
    }
    cout << "]" << endl;
}
template<typename T>
void _print_res(const vector<vector<T>>& mat) {
    cout << "[";
    for(size_t i=0; i<mat.size(); ++i) {
        if(i > 0) cout << ",";
        cout << "[";
        for(size_t j=0; j<mat[i].size(); ++j) {
            if(j > 0) cout << ",";
            cout << mat[i][j];
        }
        cout << "]";
    }
    cout << "]" << endl;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    try {
${declarations}
        auto _res = ${callExpr};
        _print_res(_res);
    } catch (...) {
        return 1;
    }
    return 0;
}
`
  }

  // 3. JAVA
  if (language === 'java') {
    if (code.includes('public static void main(')) {
      return code.replace(/public\s+class\s+\w+/g, 'public class Main')
    }

    // Separate imports from candidate code and make Solution non-public peer class
    const lines = code.split('\n')
    const imports = []
    const classLines = []
    for (const line of lines) {
      if (/^\s*import\s+/.test(line)) {
        imports.push(line.trim())
      } else {
        // Remove public modifier from class Solution so it can be a peer class in Main.java
        classLines.push(line.replace(/public\s+class\s+Solution/g, 'class Solution'))
      }
    }
    const cleanCode = classLines.join('\n')

    const params = parseInputParams(input)
    let declarations = ''
    let callArgs = []
    for (const [key, val] of Object.entries(params)) {
      const javaType = inferTypeJava(val)
      const literal = formatJavaLiteral(val)
      declarations += `            ${javaType} ${key} = ${literal};\n`
      callArgs.push(key)
    }

    const callExpr = callArgs.length > 0 ? `Solution.solve(${callArgs.join(', ')})` : `Solution.solve()`

    return `import java.util.*;
import java.io.*;
${imports.join('\n')}

public class Main {
    public static void main(String[] args) {
        try {
${declarations}
            Object _res = ${callExpr};
            _printRes(_res);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static void _printRes(Object val) {
        if (val == null) {
            System.out.println("null");
        } else if (val instanceof int[]) {
            System.out.println(Arrays.toString((int[]) val).replace(" ", ""));
        } else if (val instanceof String[]) {
            String[] arr = (String[]) val;
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < arr.length; i++) {
                if (i > 0) sb.append(",");
                sb.append("\\"").append(arr[i]).append("\\"");
            }
            sb.append("]");
            System.out.println(sb.toString());
        } else if (val instanceof Object[]) {
            System.out.println(Arrays.deepToString((Object[]) val).replace(" ", ""));
        } else {
            System.out.println(val);
        }
    }
}

${cleanCode}
`
  }

  return code
}

export async function runJudge0Submission(code, input, language, config = {}) {
  const endpoint = (config.endpoint || config.judge0Endpoint || 'https://ce.judge0.com').replace(/\/+$/, '')
  const apiKey = config.apiKey || config.judge0ApiKey || ''
  const langMeta = JUDGE0_LANGUAGES[language]

  if (!langMeta) {
    return { error: `Unsupported language: ${language}`, output: '' }
  }

  const sourceCode = buildHarness(code, language, input)

  const headers = {
    'Content-Type': 'application/json',
  }
  if (apiKey) {
    headers['X-RapidAPI-Key'] = apiKey
    headers['X-RapidAPI-Host'] = 'judge0-ce.p.rapidapi.com'
  }

  try {
    const url = `${endpoint}/submissions?base64_encoded=true&wait=true`
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        language_id: langMeta.id,
        source_code: toBase64(sourceCode),
        stdin: toBase64(input || ''),
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      return {
        output: '',
        error: `Judge0 HTTP Error ${res.status}: ${errText.slice(0, 300)}`,
        status: 'Error',
      }
    }

    const data = await res.json()

    // Decode base64 outputs returned by Judge0
    const stdout = fromBase64(data.stdout).trim()
    const stderr = fromBase64(data.stderr).trim()
    const compileOutput = fromBase64(data.compile_output).trim()
    const message = fromBase64(data.message).trim()

    let error = null
    if (compileOutput) {
      error = `Compilation Error:\n${compileOutput}`
    } else if (stderr) {
      error = `Runtime Error:\n${stderr}`
    } else if (data.status?.id > 3) {
      error = `${data.status.description}${message ? ': ' + message : ''}`
    }

    return {
      output: stdout,
      error,
      executionTime: data.time ? `${data.time}s` : null,
      memory: data.memory ? `${Math.round(data.memory)} KB` : null,
      status: data.status?.description || 'Done',
    }
  } catch (err) {
    return {
      output: '',
      error: `Failed to connect to Judge0 (${endpoint}): ${err.message}. Check your internet connection or verify the endpoint in Settings.`,
    }
  }
}

export async function testJudge0Connection(endpoint, apiKey) {
  const base = (endpoint || 'https://ce.judge0.com').replace(/\/+$/, '')
  const headers = {}
  if (apiKey) {
    headers['X-RapidAPI-Key'] = apiKey
    headers['X-RapidAPI-Host'] = 'judge0-ce.p.rapidapi.com'
  }

  try {
    const res = await fetch(`${base}/about`, { headers })
    if (res.ok) {
      const info = await res.json()
      return { ok: true, version: info.version || 'Online' }
    }
    return { ok: false, error: `HTTP ${res.status}` }
  } catch (e) {
    return { ok: false, error: e.message }
  }
}
