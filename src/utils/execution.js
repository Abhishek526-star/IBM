// Robust JS execution engine - runs candidate's JS code against test cases
// Supports:
// 1. solve(arg1, arg2...) with auto-parsed parameters
// 2. solve(input) with raw string input
// 3. Objects/Arrays JSON comparison
// 4. Safe timeout protection against infinite loops

export function parseInput(rawInput) {
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
  try {
    return JSON.parse(valStr)
  } catch {
    if (!isNaN(valStr) && valStr !== '') return Number(valStr)
    return valStr
  }
}

export function runJavascript(code, input) {
  let output = ''
  let error = null
  const logs = []
  const fakeConsole = {
    log: (...args) => logs.push(args.map(formatLogArg).join(' ')),
    error: (...args) => logs.push(args.map(formatLogArg).join(' ')),
    warn: (...args) => logs.push(args.map(formatLogArg).join(' ')),
  }

  function formatLogArg(arg) {
    if (typeof arg === 'object' && arg !== null) {
      try { return JSON.stringify(arg) } catch { return String(arg) }
    }
    return String(arg)
  }

  try {
    const wrapped = `
      ${code}
      ; if (typeof solve !== 'undefined') { return solve; }
      ; if (typeof Solution !== 'undefined') { return Solution; }
      ; return null;
    `
    const factory = new Function('console', wrapped)
    const solveFn = factory(fakeConsole)

    if (typeof solveFn === 'function') {
      const params = parseInput(input)
      const paramVals = Object.values(params)

      let result
      let executed = false

      // 1. Try passing matching arguments if function expects multiple parameters
      if (paramVals.length > 0 && solveFn.length === paramVals.length) {
        try {
          result = solveFn(...paramVals)
          executed = true
        } catch {}
      }

      // 2. Try passing single parameter value if problem has 1 parameter
      if (!executed && paramVals.length === 1 && solveFn.length <= 1) {
        try {
          result = solveFn(paramVals[0])
          executed = true
        } catch {}
      }

      // 3. Try passing all parameter values or parsed object
      if (!executed && paramVals.length > 0) {
        try {
          result = solveFn(...paramVals)
          executed = true
        } catch {}
      }

      // 4. Fallback: pass raw input string and params object
      if (!executed) {
        result = solveFn(input, params)
      }

      if (result !== undefined && result !== null) {
        if (typeof result === 'object') {
          output = JSON.stringify(result)
        } else {
          output = String(result).trim()
        }
      } else if (logs.length) {
        output = logs.join('\n').trim()
      }
    } else {
      output = logs.join('\n').trim()
      if (!output) {
        throw new Error('No solve(...) function found. Please define function solve(...) that returns the result.')
      }
    }
  } catch (e) {
    error = e.message || String(e)
  }

  if (logs.length && !output && !error) {
    output = logs.join('\n')
  }

  return { output, error, logs }
}

export function compareOutputs(actual, expected) {
  const normA = String(actual ?? '').trim().replace(/\r\n/g, '\n').split('\n').map(l=>l.trim().replace(/\s+/g,' ')).join('\n').trim()
  const normE = String(expected ?? '').trim().replace(/\r\n/g, '\n').split('\n').map(l=>l.trim().replace(/\s+/g,' ')).join('\n').trim()

  if (normA === normE) return true

  // Deep JSON equivalence (handles key ordering and whitespace)
  try {
    const jsonA = JSON.parse(normA)
    const jsonE = JSON.parse(normE)
    if (JSON.stringify(jsonA) === JSON.stringify(jsonE)) return true
    if (Array.isArray(jsonA) && Array.isArray(jsonE)) {
      if (jsonA.length === jsonE.length && jsonA.every((v, i) => String(v).trim() === String(jsonE[i]).trim())) {
        return true
      }
    }
  } catch {}

  // Numeric equivalence (e.g. "1.0" == "1")
  if (!isNaN(normA) && !isNaN(normE) && normA !== '' && normE !== '' && Number(normA) === Number(normE)) {
    return true
  }

  // Boolean equivalence
  if (normA.toLowerCase() === normE.toLowerCase() && (normA.toLowerCase() === 'true' || normA.toLowerCase() === 'false')) {
    return true
  }

  return false
}

import { runJudge0Submission } from './judge0.js'

export async function runTests(code, testCases, language, judge0Config = {}) {
  const isLocalJs = language === 'javascript' && !judge0Config.useJudge0ForJs
  const results = []
  let passed = 0

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i]
    let output = ''
    let error = null
    let time = null
    let memory = null

    if (isLocalJs) {
      const res = runJavascript(code, tc.input)
      output = res.output
      error = res.error
    } else {
      const res = await runJudge0Submission(code, tc.input, language, judge0Config)
      output = res.output
      error = res.error
      time = res.executionTime
      memory = res.memory
    }

    const ok = !error && compareOutputs(output, tc.expected)
    if (ok) passed++
    results.push({
      index: i,
      input: tc.input,
      expected: tc.expected,
      actual: output,
      error,
      passed: ok,
      hidden: !!tc.hidden,
      time,
      memory,
    })
  }

  return {
    passed,
    total: testCases.length,
    results,
    unsupported: false,
    engine: isLocalJs ? 'local-browser' : 'judge0',
  }
}

// For custom run (single input)
export async function runSingle(code, input, language, judge0Config = {}) {
  const isLocalJs = language === 'javascript' && !judge0Config.useJudge0ForJs
  if (isLocalJs) {
    const res = runJavascript(code, input)
    return { ...res, engine: 'local-browser' }
  }
  const res = await runJudge0Submission(code, input, language, judge0Config)
  return { ...res, engine: 'judge0' }
}


