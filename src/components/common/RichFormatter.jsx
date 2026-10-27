import { Info } from 'lucide-react'

/**
 * Clean up OCR/scraper spacing artifacts e.g. "x , y , and z ." -> "x, y, and z."
 */
function cleanSpacing(text) {
  if (!text) return ''
  return text
    .replace(/\s+([,.:;?!])/g, '$1')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/\[\s+/g, '[')
    .replace(/\s+\]/g, ']')
}

/**
 * Formats math expressions, variables, and code tokens inside a text fragment
 */
function formatInlineTokens(str) {
  if (!str) return null

  // Clean raw LaTeX dollar signs e.g. $a^2 + b^2 = c^2$ -> a² + b² = c²
  let cleaned = str
    .replace(/\$([^$]+)\$/g, '$1')
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\in/g, '∈')
    .replace(/\\sum/g, '∑')
    .replace(/\\times/g, '×')
    .replace(/\^2\b/g, '²')
    .replace(/\^3\b/g, '³')
    .replace(/\^p\b/g, 'ᵖ')

  // Split by backticks or markdown bold or math expressions
  const tokens = cleaned.split(/(`[^`]+`|\*\*[^*]+\*\*|a² \+ b² = c²|a \* a \+ b \* b == c \* c|a <= b <= c|a ≤ b ≤ c)/g)

  return tokens.map((part, idx) => {
    if (!part) return null

    // Backtick code
    if (part.startsWith('`') && part.endsWith('`')) {
      const code = part.slice(1, -1)
      return (
        <code key={idx} className="px-1.5 py-0.5 mx-0.5 rounded-md font-mono text-xs bg-zinc-100 dark:bg-white/[0.08] text-[#0f62fe] dark:text-[#38bdf8] border border-zinc-200/60 dark:border-white/[0.08] font-semibold">
          {code}
        </code>
      )
    }

    // Markdown bold
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2)
      return (
        <strong key={idx} className="font-extrabold text-zinc-900 dark:text-white">
          {boldText}
        </strong>
      )
    }

    // Pythagorean formula highlight
    if (part.includes('a² + b² = c²') || part.includes('a * a + b * b == c * c')) {
      return (
        <span key={idx} className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md font-mono text-xs font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 shadow-2xs">
          a² + b² = c²
        </span>
      )
    }

    // Sort order highlight
    if (part.includes('a <= b <= c') || part.includes('a ≤ b ≤ c')) {
      return (
        <span key={idx} className="inline-flex items-center px-1.5 py-0.5 mx-1 rounded-md font-mono text-xs font-semibold bg-blue-500/10 text-[#0f62fe] dark:text-[#38bdf8] border border-blue-500/20">
          a ≤ b ≤ c
        </span>
      )
    }

    // Secondary parsing for common variables (standalone words like n, x, y, z, v, arr, edges)
    const subWords = part.split(/(\b(?:[a-zA-Z]\[[a-zA-Z0-9_]+\]|[nxyzv]|arr|edges|dist[XYZ]?|startTime|endTime)\b)/g)

    return (
      <span key={idx}>
        {subWords.map((word, wIdx) => {
          if (/^([nxyzv]|arr|edges|dist[XYZ]?|startTime|endTime|[a-zA-Z]\[[a-zA-Z0-9_]+\])$/.test(word)) {
            return (
              <code key={wIdx} className="px-1.5 py-0.5 mx-0.5 rounded font-mono text-[12px] bg-zinc-100 dark:bg-white/[0.06] text-blue-600 dark:text-[#38bdf8] font-semibold border border-zinc-200/50 dark:border-white/[0.06]">
                {word}
              </code>
            )
          }
          return word
        })}
      </span>
    )
  })
}

/**
 * Formatted Statement Component
 * Transforms raw problem statements into rich typographic cards with callouts
 */
export function FormattedStatement({ statement }) {
  if (!statement) return null

  const cleaned = cleanSpacing(statement)
  const paragraphs = cleaned.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)

  return (
    <div className="space-y-3.5 text-zinc-800 dark:text-zinc-200 text-sm leading-relaxed font-sans">
      {paragraphs.map((para, i) => {
        // If paragraph mentions notes or zero contributions, make it a callout
        const isNote = /note|coincide|zero|contribute|restriction|assume|caution/i.test(para) && para.length < 250

        if (isNote) {
          return (
            <div key={i} className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5 my-2">
              <Info size={15} className="text-amber-500 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold text-amber-700 dark:text-amber-400 block mb-0.5 uppercase tracking-wider text-[10px]">
                  Special Condition & Boundary
                </span>
                {formatInlineTokens(para)}
              </div>
            </div>
          )
        }

        return (
          <p key={i} className="leading-relaxed">
            {formatInlineTokens(para)}
          </p>
        )
      })}
    </div>
  )
}

/**
 * Formatted Editorial Text Component
 * Renders intuition, step-by-step guidance, and mathematical principles
 */
export function FormattedEditorial({ text }) {
  if (!text) return null

  const cleaned = cleanSpacing(text)
  const paragraphs = cleaned.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)

  return (
    <div className="space-y-3 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed font-sans">
      {paragraphs.map((para, i) => (
        <p key={i} className="leading-relaxed">
          {formatInlineTokens(para)}
        </p>
      ))}
    </div>
  )
}

/**
 * Formatted Step Item
 */
export function FormattedStep({ text }) {
  if (!text) return null
  return <div className="text-xs leading-relaxed">{formatInlineTokens(cleanSpacing(text))}</div>
}

/**
 * Formatted Example Input Component
 * Parses raw HackerRank scraped inputs (key \n = \n value) into clean, structured parameter cards
 */
export function FormattedExampleInput({ input, isCompact = false }) {
  if (!input) return null

  // Strip trailing return / output declarations
  const cleanInput = input
    .replace(/\r?\n\s*return\s*=\s*[^\n]+$/i, '')
    .replace(/\r?\n\s*return\s*\r?\n\s*=\s*\r?\n\s*[^\n]+$/i, '')
    .replace(/\r?\n\s*output\s*=\s*[^\n]+$/i, '')
    .replace(/\r?\n\s*output\s*\r?\n\s*=\s*\r?\n\s*[^\n]+$/i, '')

  const lines = cleanInput.split(/\r?\n/).map(l => l.trim()).filter(Boolean)
  const pairs = []
  let i = 0

  while (i < lines.length) {
    // Matches 3-line format: [key, "=", value]
    if (i + 2 < lines.length && lines[i + 1] === '=') {
      const key = lines[i]
      const val = lines[i + 2]
      if (key.toLowerCase() !== 'return' && key.toLowerCase() !== 'output') {
        pairs.push({ key, value: val })
      }
      i += 3
      continue
    }

    // Matches single-line format: "key = value"
    const match = lines[i].match(/^([a-zA-Z0-9_]+)\s*=\s*(.+)$/)
    if (match) {
      const [, key, val] = match
      if (key.toLowerCase() !== 'return' && key.toLowerCase() !== 'output') {
        pairs.push({ key, value: val })
      }
      i++
      continue
    }

    i++
  }

  // Spacing after commas in JSON / array strings: [[1,2],[2,3]] -> [[1, 2], [2, 3]]
  const formatVal = (v) => {
    return v.replace(/,([^\s\]}])/g, ', $1')
  }

  // If structured parameters were detected
  if (pairs.length > 0) {
    return (
      <div className={`space-y-1 font-mono ${isCompact ? 'text-[11px]' : 'text-xs'}`}>
        {pairs.map((p, idx) => (
          <div
            key={idx}
            className={`flex flex-wrap items-baseline gap-1.5 bg-zinc-100/90 dark:bg-black/40 border border-zinc-200/80 dark:border-white/[0.06] ${
              isCompact ? 'px-2 py-1 rounded-lg' : 'px-3 py-1.5 rounded-xl'
            }`}
          >
            <span className="font-bold text-[#0f62fe] dark:text-[#38bdf8] font-mono tracking-tight shrink-0">
              {p.key}
            </span>
            <span className="text-zinc-400 font-bold shrink-0">=</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-medium break-all font-mono">
              {formatVal(p.value)}
            </span>
          </div>
        ))}
      </div>
    )
  }

  // Fallback for non-key-value or unstructured inputs
  const fallbackClean = cleanInput
    .replace(/\r?\n=\r?\n/g, ' = ')
    .trim()

  return (
    <pre className={`rounded-xl bg-zinc-100 dark:bg-black/40 border border-zinc-200/80 dark:border-white/[0.06] overflow-x-auto text-zinc-800 dark:text-zinc-200 font-mono whitespace-pre-wrap leading-relaxed ${
      isCompact ? 'p-2 text-[11px]' : 'p-3 text-xs'
    }`}>
      {fallbackClean}
    </pre>
  )
}
