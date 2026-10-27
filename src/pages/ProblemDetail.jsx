import { useParams, Link } from 'react-router-dom'
import { questions } from '../data/questions'
import { useStore } from '../store/useStore'
import { useEffect, useState, useMemo, useRef } from 'react'
import Editor from '@monaco-editor/react'
import {
  Bookmark,
  CheckCircle2,
  ChevronLeft,
  ChevronDown,
  RotateCcw,
  Play,
  Send,
  Copy,
  Maximize2,
  Minimize2,
  Info,
  Settings2,
  FileText,
  TestTube,
  Clock,
  History,
  Loader2,
  Cloud,
  Check,
  Zap,
  AlertCircle,
  Lightbulb,
  Sparkles,
  Code2,
  Calendar,
  ShieldCheck,
  Flame
} from 'lucide-react'
import { runTests, runSingle } from '../utils/execution'
import { getEditorialForQuestion } from '../utils/editorialData'
import { FormattedStatement, FormattedEditorial, FormattedStep, FormattedExampleInput } from '../components/common/RichFormatter'

function formatLastReported(dateStr) {
  if (!dateStr) return 'Sep 2026'
  try {
    const d = new Date(dateStr)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${months[d.getMonth()]} ${d.getFullYear()}`
  } catch {
    return dateStr
  }
}

function difficultyPill(diff) {
  if (diff === 'Easy') {
    return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
  }
  if (diff === 'Hard') {
    return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'
  }
  if (diff === 'AI project') {
    return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
  }
  return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
}

export default function ProblemDetail() {
  const { id } = useParams()
  const q = questions.find(x => x.id === id)
  const prefs = useStore(s => s.prefs)
  const setPrefs = useStore(s => s.setPrefs)
  const drafts = useStore(s => s.drafts)
  const setDraft = useStore(s => s.setDraft)
  const bookmarks = useStore(s => s.bookmarks)
  const toggleBookmark = useStore(s => s.toggleBookmark)
  const markSolved = useStore(s => s.markSolved)
  const markAttempted = useStore(s => s.markAttempted)
  const addSubmission = useStore(s => s.addSubmission)
  const logActivity = useStore(s => s.logActivity)
  const setLastOpened = useStore(s => s.setLastOpened)
  const solved = useStore(s => s.solved)
  const customCasesStore = useStore(s => s.customCases)
  const setCustomCases = useStore(s => s.setCustomCases)

  const [language, setLanguage] = useState(prefs.language || 'javascript')
  const [activeLeftTab, setActiveLeftTab] = useState('description') // description | editorial | solutions | submissions
  const [activeBottomTab, setActiveBottomTab] = useState('testcases') // testcases | custom | result
  const [customInput, setCustomInput] = useState(q?.examples?.[0]?.input || '')
  const [customExpected, setCustomExpected] = useState('')
  const [runResult, setRunResult] = useState(null)
  const [singleRun, setSingleRun] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [leftWidth, setLeftWidth] = useState(45) // percent
  const [copied, setCopied] = useState(false)
  const [copiedSol, setCopiedSol] = useState(false)
  const [appliedSol, setAppliedSol] = useState(false)
  const [copiedExIdx, setCopiedExIdx] = useState(null)
  const [solutionLang, setSolutionLang] = useState('python')
  const dragging = useRef(false)

  const editorial = useMemo(() => (q ? getEditorialForQuestion(q) : null), [q])

  // Track dark mode dynamically for Monaco
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])
  const monacoTheme = isDark ? 'vs-dark' : 'light'

  // Code draft resolution with auto-migration from older broken untyped drafts
  const currentCode = useMemo(() => {
    if (!q) return ''
    const saved = drafts[q.id]?.[language]
    if (saved) {
      if (language === 'cpp' && saved.includes('auto solve(')) {
        return q.templates.cpp || saved
      }
      if (language === 'java' && saved.includes('public static Object solve(')) {
        return q.templates.java || saved
      }
      return saved
    }
    return q.templates[language] || ''
  }, [q, language, drafts])

  const handleCodeChange = (val) => {
    if (!q) return
    setDraft(q.id, language, val || '')
  }

  useEffect(() => {
    if (q) {
      setLastOpened(q.id)
      if (!customCasesStore[q.id]) {
        setCustomCases(q.id, [{ input: q.examples?.[0]?.input || '', expected: q.examples?.[0]?.output || '' }])
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q?.id])

  useEffect(() => {
    setPrefs({ language })
  }, [language, setPrefs])

  if (!q) {
    return (
      <div className="p-16 text-center space-y-4">
        <p className="text-base font-semibold text-zinc-900 dark:text-white">Question not found</p>
        <Link to="/problems" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0f62fe] text-white text-xs font-semibold rounded-xl">
          Back to all problems
        </Link>
      </div>
    )
  }

  const isBookmarked = bookmarks.includes(q.id)
  const isSolved = !!solved[q.id]?.solvedAt

  const judge0Config = {
    endpoint: prefs.judge0Endpoint,
    apiKey: prefs.judge0ApiKey,
    useJudge0ForJs: prefs.useJudge0ForJs,
  }

  const handleRun = async () => {
    setIsRunning(true)
    setActiveBottomTab('result')
    setRunResult(null)
    const code = currentCode || drafts[q.id]?.[language] || q.templates[language]
    try {
      const res = await runSingle(code, customInput, language, judge0Config)
      setSingleRun(res)
      markAttempted(q.id)
      logActivity()
    } catch (err) {
      setSingleRun({ error: err.message, output: '', executionTime: null })
    } finally {
      setIsRunning(false)
    }
  }

  const handleSubmit = async () => {
    setIsRunning(true)
    setActiveBottomTab('result')
    setSingleRun(null)
    const code = currentCode || drafts[q.id]?.[language] || q.templates[language]
    try {
      const res = await runTests(code, q.testCases, language, judge0Config)
      setRunResult(res)
      if (!res.unsupported) {
        const passedAll = res.passed === res.total
        if (passedAll) {
          markSolved(q.id)
        } else {
          markAttempted(q.id)
        }
        addSubmission({
          qid: q.id,
          title: q.title,
          language,
          passed: res.passed,
          total: res.total,
          code: code.slice(0, 5000),
          engine: res.engine,
        })
        logActivity()
      }
    } catch (err) {
      setRunResult({
        passed: 0,
        total: q.testCases.length,
        results: [{ error: err.message, actual: '', passed: false }],
        engine: 'error'
      })
    } finally {
      setIsRunning(false)
    }
  }

  const handleReset = () => {
    if (confirm('Reset code to starter template? Your draft for this language will be overwritten.')) {
      setDraft(q.id, language, q.templates[language])
      setRunResult(null)
      setSingleRun(null)
    }
  }

  const handleCopyCode = () => {
    const code = currentCode || drafts[q.id]?.[language] || q.templates[language]
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Resizable split handler
  const onMouseDown = (e) => {
    dragging.current = true
    const startX = e.clientX
    const startW = leftWidth
    const onMove = (ev) => {
      if (!dragging.current) return
      const delta = ((ev.clientX - startX) / window.innerWidth) * 100
      const newW = Math.min(65, Math.max(30, startW + delta))
      setLeftWidth(newW)
    }
    const onUp = () => {
      dragging.current = false
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const isCloudLanguage = language !== 'javascript' || prefs.useJudge0ForJs

  return (
    <div className={`flex flex-col h-[calc(100vh-56px)] bg-[#fafafa] dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 ${isFullscreen ? 'fixed inset-0 z-50 h-screen' : ''}`}>
      {/* Streamlined Unified IDE Command Header */}
      <div className="h-[52px] bg-white/90 dark:bg-[#090b10]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/[0.08] flex items-center justify-between px-4 shrink-0 transition-colors z-20">
        {/* Left: Back + Problem Info */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            to="/problems"
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 border border-transparent hover:border-zinc-200 dark:hover:border-white/10 transition"
            title="Back to problems"
          >
            <ChevronLeft size={16} />
          </Link>

          <div className="flex items-center gap-2 min-w-0">
            <span className="font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400">
              {q.id}
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <h1 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white truncate max-w-[200px] sm:max-w-[320px]">
              {q.title}
            </h1>
            <span className={`hidden sm:inline-flex px-2 py-0.5 rounded-full border text-[11px] font-semibold ${difficultyPill(q.difficulty)}`}>
              {q.difficulty}
            </span>
            {isSolved && (
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                <CheckCircle2 size={12} /> Solved
              </span>
            )}
          </div>
        </div>

        {/* Center: Language Selector */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="appearance-none pl-3 pr-7 py-1.5 bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/[0.1] rounded-lg text-xs font-semibold text-zinc-900 dark:text-white focus:outline-none focus:border-[#0f62fe] transition"
            >
              <option value="javascript">JavaScript (Local Engine)</option>
              <option value="python">Python 3 (Judge0 Cloud)</option>
              <option value="java">Java 13 (Judge0 Cloud)</option>
              <option value="cpp">C++ 17 (Judge0 Cloud)</option>
            </select>
            <ChevronDown size={13} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400" />
          </div>

          {isCloudLanguage ? (
            <span className="hidden xl:inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium bg-blue-500/10 text-blue-600 dark:text-[#38bdf8] border border-blue-500/20">
              <Cloud size={11} /> Cloud CE
            </span>
          ) : (
            <span className="hidden xl:inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Zap size={11} /> Sandbox
            </span>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Bookmark */}
          <button
            onClick={() => toggleBookmark(q.id)}
            className={`p-1.5 rounded-lg border transition ${
              isBookmarked
                ? 'bg-amber-500/10 border-amber-500/20 text-amber-500'
                : 'border-zinc-200 dark:border-white/[0.08] text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5'
            }`}
            title="Bookmark problem"
          >
            <Bookmark size={15} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>

          {/* Fullscreen */}
          <button
            onClick={() => setIsFullscreen(v => !v)}
            className="hidden md:flex p-1.5 rounded-lg border border-zinc-200 dark:border-white/[0.08] text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 transition"
            title="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>

          {/* Run button */}
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-white/[0.08] hover:bg-zinc-200 dark:hover:bg-white/[0.14] text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/[0.1] disabled:opacity-50 transition shadow-2xs"
          >
            {isRunning ? <Loader2 size={13} className="animate-spin text-[#0f62fe]" /> : <Play size={13} fill="currentColor" />}
            <span>Run</span>
          </button>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={isRunning}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#0f62fe] to-[#0043ce] hover:from-[#0043ce] hover:to-[#0f62fe] text-white shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-50 transition-all duration-200"
          >
            {isRunning ? <Loader2 size={13} className="animate-spin text-white" /> : <Send size={13} />}
            <span>Submit</span>
          </button>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="flex-1 min-h-0 flex flex-col md:flex-row overflow-hidden">
        {/* Left Pane (Description, Editorial, Submissions) */}
        <div
          className="flex flex-col bg-white dark:bg-[#0c0e17] border-r border-zinc-200/80 dark:border-white/[0.08] overflow-hidden"
          style={{ width: isFullscreen ? undefined : window.innerWidth >= 768 ? `${leftWidth}%` : '100%' }}
        >
          {/* Glass Tabs */}
          <div className="flex items-center border-b border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-white/[0.02] px-2 shrink-0 overflow-x-auto scrollbar-none">
            {[
              { id: 'description', label: 'Description', icon: FileText },
              { id: 'editorial', label: 'Guided Editorial', icon: Info },
              { id: 'solutions', label: 'Solutions', icon: History },
              { id: 'submissions', label: 'Submissions', icon: Clock },
            ].map(tab => {
              const active = activeLeftTab === tab.id
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveLeftTab(tab.id)}
                  className={`px-3.5 py-2.5 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap ${
                    active
                      ? 'border-[#0f62fe] text-[#0f62fe] dark:text-[#38bdf8] bg-white dark:bg-[#0c0e17]'
                      : 'border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Tab Content Panel */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            {activeLeftTab === 'description' && (
              <div className="space-y-6">
                {/* Meta Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 flex-wrap text-xs">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold text-[11px] bg-blue-500/10 border border-blue-500/25 text-[#0f62fe] dark:text-[#38bdf8] font-mono shadow-2xs">
                      <ShieldCheck size={12} />
                      IBM OA • HackerRank
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${difficultyPill(q.difficulty)}`}>
                      {q.difficulty}
                    </span>
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <Flame size={12} className="text-amber-500" />
                      {q.reports ?? 2} sightings
                    </span>
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-500 dark:text-zinc-400 flex items-center gap-1 font-mono">
                      <Calendar size={12} />
                      {formatLastReported(q.lastReported)}
                    </span>
                  </div>

                  <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                    {q.title}
                  </h1>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {q.topics.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300">
                        {t}
                      </span>
                    ))}
                    {q.acceptance && (
                      <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Acceptance: {q.acceptance}
                      </span>
                    )}
                  </div>
                </div>

                {/* Problem Statement Card */}
                <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-white/[0.08] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-b border-zinc-100 dark:border-white/[0.06] pb-2">
                    <FileText size={14} className="text-[#0f62fe]" />
                    <span>Problem Statement</span>
                  </div>
                  <FormattedStatement statement={q.statement} />
                </div>

                {/* Constraints & Limits */}
                <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-white/[0.08] space-y-3">
                  <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/[0.06] pb-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      <Zap size={14} className="text-amber-500" />
                      <span>Input Constraints</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">HackerRank Environment</span>
                  </div>
                  <div className="font-mono text-xs text-zinc-700 dark:text-zinc-300 space-y-1.5 whitespace-pre-wrap bg-zinc-50 dark:bg-black/20 p-3 rounded-xl border border-zinc-200/60 dark:border-white/[0.04]">
                    {q.constraints}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/60 dark:border-white/[0.04] text-center">
                      <span className="text-zinc-400 block text-[10px] uppercase font-bold">Time Limit</span>
                      <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200">2.0 seconds</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/60 dark:border-white/[0.04] text-center">
                      <span className="text-zinc-400 block text-[10px] uppercase font-bold">Memory Limit</span>
                      <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200">256 MB RAM</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/60 dark:border-white/[0.04] text-center">
                      <span className="text-zinc-400 block text-[10px] uppercase font-bold">Precision</span>
                      <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200">64-bit Int</span>
                    </div>
                  </div>
                </div>

                {/* Examples */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                      <Code2 size={14} className="text-[#0f62fe]" />
                      Sample Test Cases & Walkthroughs
                    </h3>
                    <span className="text-[11px] text-zinc-400">{q.examples.length} Verified Examples</span>
                  </div>

                  {q.examples.map((ex, i) => (
                    <div key={i} className="glass-card rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-white/[0.08] shadow-sm">
                      <div className="px-4 py-2.5 bg-zinc-50 dark:bg-white/[0.03] border-b border-zinc-200/80 dark:border-white/[0.06] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-md bg-[#0f62fe]/10 text-[#0f62fe] dark:text-[#38bdf8] font-mono text-xs font-bold flex items-center justify-center">
                            {i + 1}
                          </span>
                          <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Example {i + 1}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(ex.input)
                              setCopiedExIdx(i)
                              setTimeout(() => setCopiedExIdx(null), 1500)
                            }}
                            className="px-2 py-1 rounded text-[11px] font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition flex items-center gap-1"
                            title="Copy sample input"
                          >
                            {copiedExIdx === i ? <Check size={11} className="text-emerald-500" /> : <Copy size={11} />}
                            <span>{copiedExIdx === i ? 'Copied' : 'Copy Input'}</span>
                          </button>
                          <button
                            onClick={() => {
                              setCustomInput(ex.input)
                              setCustomExpected(ex.output)
                              setActiveBottomTab('custom')
                            }}
                            className="px-2 py-1 rounded text-[11px] font-semibold text-[#0f62fe] dark:text-[#38bdf8] hover:bg-blue-500/10 transition flex items-center gap-1"
                            title="Load into custom runner"
                          >
                            <Play size={10} fill="currentColor" />
                            <span>Test in Runner</span>
                          </button>
                        </div>
                      </div>

                      <div className="p-4 space-y-3 text-xs font-mono">
                        <div>
                          <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1 font-sans">
                            Input
                          </div>
                          <FormattedExampleInput input={ex.input} />
                        </div>

                        <div>
                          <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1 font-sans">
                            Expected Output
                          </div>
                          <pre className="p-2.5 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 overflow-x-auto text-emerald-700 dark:text-emerald-400 font-bold whitespace-pre-wrap">
                            {ex.output}
                          </pre>
                        </div>

                        {ex.explanation && (
                          <div className="p-3 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 font-sans text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed flex items-start gap-2">
                            <Lightbulb size={15} className="text-amber-500 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-amber-600 dark:text-amber-400">Explanation: </span>
                              {ex.explanation}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Common Pitfalls Card */}
                {editorial?.pitfalls && editorial.pitfalls.length > 0 && (
                  <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-white/[0.08] space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400">
                      <AlertCircle size={15} />
                      <span>Common Pitfalls & Edge Cases</span>
                    </div>
                    <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                      {editorial.pitfalls.map((p, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeLeftTab === 'editorial' && (
              <div className="space-y-6">
                {/* Blueprint Banner */}
                <div className="glass-card rounded-2xl p-5 border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0f62fe] text-white">
                      <Sparkles size={12} />
                      {editorial?.pattern || 'Algorithmic Pattern'}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">HackerRank Optimal Target</span>
                  </div>
                  <h3 className="text-base font-extrabold text-zinc-900 dark:text-white pt-1">
                    Guided Architectural Breakdown
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Detailed intuition, state decomposition, and asymptotic trade-offs necessary to pass 100% of IBM test suites without TLE.
                  </p>
                </div>

                {/* Core Intuition Card */}
                <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-white/[0.08] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f62fe] dark:text-[#38bdf8]">
                    <Lightbulb size={16} />
                    <span>Intuition & Key Insight</span>
                  </div>
                  <FormattedEditorial text={editorial?.intuition} />
                </div>

                {/* Step-by-Step Approach */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    Step-by-Step Algorithm Execution
                  </h4>
                  <div className="space-y-2.5">
                    {editorial?.steps.map((st, i) => (
                      <div key={i} className="p-4 rounded-xl glass-card flex gap-3 text-xs leading-relaxed text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-white/[0.08] shadow-2xs">
                        <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#0f62fe] to-[#0043ce] text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                          {i + 1}
                        </span>
                        <div className="pt-0.5 flex-1">
                          <FormattedStep text={st} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complexity Analysis */}
                <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-white/[0.08] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Asymptotic Complexity Targets
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] space-y-1.5">
                      <div className="text-xs font-semibold text-zinc-500">Time Complexity</div>
                      <div className="text-lg font-mono font-extrabold text-emerald-600 dark:text-emerald-400">
                        {editorial?.timeComplexity || 'O(N)'}
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {editorial?.timeExplanation}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] space-y-1.5">
                      <div className="text-xs font-semibold text-zinc-500">Space Complexity</div>
                      <div className="text-lg font-mono font-extrabold text-[#0f62fe] dark:text-[#38bdf8]">
                        {editorial?.spaceComplexity || 'O(N)'}
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {editorial?.spaceExplanation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* IBM OA Gotchas & Test Cases */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-2 text-xs">
                  <div className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                    <AlertCircle size={15} />
                    <span>HackerRank Test Suite Gotchas</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
                    <li>Always verify 1-based vs 0-based indices in output arrays.</li>
                    <li>Avoid deep recursion in Python without `sys.setrecursionlimit` or prefer iterative BFS/DFS.</li>
                    <li>Read input streams cautiously when multiple testcases are formatted across newlines.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeLeftTab === 'solutions' && (
              <div className="space-y-4">
                {/* Language Switcher & Actions */}
                <div className="glass-card rounded-2xl p-4 border border-zinc-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                  {/* Language Tabs */}
                  <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-white/[0.06] p-1 rounded-xl">
                    {[
                      { id: 'python', label: 'Python 3' },
                      { id: 'cpp', label: 'C++ 17' },
                      { id: 'java', label: 'Java 13' },
                      { id: 'javascript', label: 'JavaScript' },
                    ].map(l => (
                      <button
                        key={l.id}
                        onClick={() => setSolutionLang(l.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          solutionLang === l.id
                            ? 'bg-white dark:bg-[#0f62fe] text-zinc-900 dark:text-white shadow-sm'
                            : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const solCode = editorial?.solutions?.[solutionLang] || ''
                        navigator.clipboard.writeText(solCode)
                        setCopiedSol(true)
                        setTimeout(() => setCopiedSol(false), 2000)
                      }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-white/[0.08] hover:bg-zinc-200 dark:hover:bg-white/[0.14] text-zinc-800 dark:text-white transition flex items-center gap-1.5 border border-zinc-200 dark:border-white/[0.08]"
                    >
                      {copiedSol ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                      <span>{copiedSol ? 'Copied!' : 'Copy Code'}</span>
                    </button>

                    <button
                      onClick={() => {
                        const solCode = editorial?.solutions?.[solutionLang]
                        if (solCode) {
                          setLanguage(solutionLang)
                          setDraft(q.id, solutionLang, solCode)
                          setAppliedSol(true)
                          setTimeout(() => setAppliedSol(false), 2500)
                        }
                      }}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#0f62fe] to-[#0043ce] text-white hover:opacity-95 transition shadow-sm flex items-center gap-1.5"
                    >
                      {appliedSol ? <Check size={13} /> : <Play size={12} fill="currentColor" />}
                      <span>{appliedSol ? 'Applied to Editor!' : 'Load into Editor'}</span>
                    </button>
                  </div>
                </div>

                {/* Code Block Container */}
                <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-white/[0.08] shadow-lg bg-[#0d0f17]">
                  <div className="px-4 py-2.5 bg-[#121624] border-b border-white/[0.06] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-zinc-400 font-mono">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-bold uppercase tracking-wider text-[11px] text-zinc-300">
                        Reference Implementation • {solutionLang.toUpperCase()}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">Verified Optimal</span>
                  </div>

                  <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-zinc-200 max-h-[500px] overflow-y-auto">
                    <pre className="whitespace-pre">
                      {editorial?.solutions?.[solutionLang] || '// No solution available'}
                    </pre>
                  </div>
                </div>

                {/* Complexity Summary Card */}
                <div className="glass-card rounded-2xl p-4 border border-zinc-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-white block">Optimal Benchmark</span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Time: <strong className="text-emerald-500 font-mono">{editorial?.timeComplexity}</strong> | Space: <strong className="text-blue-500 font-mono">{editorial?.spaceComplexity}</strong>
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    100% Test Coverage
                  </span>
                </div>
              </div>
            )}

            {activeLeftTab === 'submissions' && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Submissions History (Local Session)
                </h3>
                {useStore.getState().submissions.filter(s => s.qid === q.id).length === 0 ? (
                  <div className="p-10 text-center glass-card rounded-xl text-zinc-400 space-y-1">
                    <Clock size={24} className="mx-auto mb-2 text-zinc-500" />
                    <p className="text-xs font-medium text-zinc-600 dark:text-zinc-300">No submissions yet</p>
                    <p className="text-[11px] text-zinc-400">Click Submit to evaluate your code against all test cases</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {useStore.getState().submissions.filter(s => s.qid === q.id).map(s => (
                      <div key={s.id} className="p-3 rounded-xl glass-card flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-zinc-900 dark:text-white">{s.language.toUpperCase()} • {s.engine}</div>
                          <div className="text-[11px] text-zinc-400">{new Date(s.timestamp).toLocaleString()}</div>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full font-mono font-bold text-xs ${
                          s.passed === s.total
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                            : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                        }`}>
                          {s.passed === s.total ? 'Accepted' : `${s.passed}/${s.total} Passed`}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Resizable Divider Handle */}
        <div
          onMouseDown={onMouseDown}
          className="hidden md:flex w-1 hover:w-1.5 bg-zinc-200 dark:bg-white/[0.08] hover:bg-[#0f62fe] dark:hover:bg-[#0f62fe] cursor-col-resize shrink-0 transition-all z-10"
        />

        {/* Right Pane (Monaco Editor & Testcase Panel) */}
        <div
          className="flex-1 min-h-[50vh] md:min-h-0 flex flex-col bg-[#0d0f17] overflow-hidden"
          style={{ width: window.innerWidth >= 768 && !isFullscreen ? `${100 - leftWidth}%` : undefined }}
        >
          {/* Editor Sub-Header */}
          <div className="h-9 bg-[#11131f] border-b border-white/[0.06] flex items-center justify-between px-3 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
                {language.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="px-2 py-1 rounded text-[11px] text-zinc-400 hover:text-white hover:bg-white/10 transition flex items-center gap-1 font-medium"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={handleReset}
                className="px-2 py-1 rounded text-[11px] text-zinc-400 hover:text-white hover:bg-white/10 transition flex items-center gap-1 font-medium"
              >
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Monaco Editor */}
          <div className="flex-1 min-h-[280px] md:min-h-0 relative">
            <Editor
              height="100%"
              language={language === 'cpp' ? 'cpp' : language === 'python' ? 'python' : language === 'java' ? 'java' : 'javascript'}
              value={currentCode}
              onChange={handleCodeChange}
              theme={monacoTheme}
              options={{
                fontSize: prefs.fontSize || 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                tabSize: 4,
                automaticLayout: true,
                padding: { top: 12, bottom: 12 },
                fontFamily: 'JetBrains Mono, Menlo, monospace',
                lineNumbers: 'on',
                quickSuggestions: true,
              }}
            />
          </div>

          {/* Bottom Runner Panel */}
          <div className="h-[260px] md:h-[280px] bg-white dark:bg-[#0c0e17] border-t border-zinc-200/80 dark:border-white/[0.08] flex flex-col shrink-0">
            {/* Runner Tabs Header */}
            <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/80 dark:bg-white/[0.02] px-3 shrink-0">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveBottomTab('testcases')}
                  className={`px-3.5 py-2 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition ${
                    activeBottomTab === 'testcases'
                      ? 'border-[#0f62fe] text-[#0f62fe] dark:text-[#38bdf8] bg-white dark:bg-[#0c0e17]'
                      : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <TestTube size={13} />
                  <span>Test Cases</span>
                  <span className="font-mono text-[10px] px-1.5 py-0.2 rounded-full bg-zinc-200 dark:bg-white/10 text-zinc-600 dark:text-zinc-400">
                    {q.testCases.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveBottomTab('custom')}
                  className={`px-3.5 py-2 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition ${
                    activeBottomTab === 'custom'
                      ? 'border-[#0f62fe] text-[#0f62fe] dark:text-[#38bdf8] bg-white dark:bg-[#0c0e17]'
                      : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Settings2 size={13} />
                  <span>Custom Input</span>
                </button>

                <button
                  onClick={() => setActiveBottomTab('result')}
                  className={`px-3.5 py-2 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition ${
                    activeBottomTab === 'result'
                      ? 'border-[#0f62fe] text-[#0f62fe] dark:text-[#38bdf8] bg-white dark:bg-[#0c0e17]'
                      : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <span>Results</span>
                  {runResult && (
                    <span className={`font-mono text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      runResult.passed === runResult.total
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                        : 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
                    }`}>
                      {runResult.passed}/{runResult.total}
                    </span>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-2">
                {isRunning ? (
                  <span className="text-[#0f62fe] flex items-center gap-1 animate-pulse">
                    <Loader2 size={12} className="animate-spin" /> Running on Judge0...
                  </span>
                ) : (
                  <span>{isCloudLanguage ? '☁️ Judge0 CE' : '⚡ Local JS Engine'}</span>
                )}
              </div>
            </div>

            {/* Runner Body */}
            <div className="flex-1 overflow-y-auto p-4 text-xs font-mono">
              {activeBottomTab === 'testcases' && (
                <div className="space-y-3">
                  {q.testCases.map((tc, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-2">
                      <div className="flex items-center justify-between text-xs font-sans">
                        <span className="font-bold text-zinc-700 dark:text-zinc-300">Case {i + 1}</span>
                        {runResult?.results?.[i] && (
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            runResult.results[i].passed
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                              : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                          }`}>
                            {runResult.results[i].passed ? '✓ Passed' : '✗ Failed'}
                          </span>
                        )}
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans mb-1">Input</div>
                          <FormattedExampleInput input={tc.input} isCompact />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-sans mb-1">Expected Output</div>
                          <pre className="p-2.5 rounded-lg bg-zinc-100 dark:bg-black/40 border border-zinc-200/80 dark:border-white/[0.06] overflow-x-auto text-emerald-600 dark:text-emerald-400 font-bold whitespace-pre-wrap">
                            {tc.expected}
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeBottomTab === 'custom' && (
                <div className="grid md:grid-cols-2 gap-4 h-full">
                  <div className="flex flex-col">
                    <div className="text-[11px] uppercase tracking-wider font-sans font-semibold text-zinc-500 mb-1">
                      Custom STDIN Input
                    </div>
                    <textarea
                      value={customInput}
                      onChange={e => setCustomInput(e.target.value)}
                      placeholder="Input parameters here..."
                      className="flex-1 w-full p-2.5 rounded-xl bg-zinc-50 dark:bg-black/30 border border-zinc-200 dark:border-white/[0.08] text-xs text-zinc-900 dark:text-white font-mono focus:outline-none focus:border-[#0f62fe] resize-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[11px] uppercase tracking-wider font-sans font-semibold text-zinc-500 mb-1">
                      Expected Output (Optional)
                    </div>
                    <textarea
                      value={customExpected}
                      onChange={e => setCustomExpected(e.target.value)}
                      placeholder="Optional expected answer for validation..."
                      className="h-20 p-2.5 rounded-xl bg-zinc-50 dark:bg-black/30 border border-zinc-200 dark:border-white/[0.08] text-xs text-zinc-900 dark:text-white font-mono focus:outline-none focus:border-[#0f62fe] resize-none"
                    />
                    <button
                      onClick={handleRun}
                      disabled={isRunning}
                      className="mt-3 px-4 py-2 bg-[#0f62fe] hover:bg-[#0043ce] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                    >
                      <Play size={13} fill="currentColor" /> Run with Custom Input
                    </button>
                  </div>
                </div>
              )}

              {activeBottomTab === 'result' && (
                <div>
                  {isRunning ? (
                    <div className="p-8 text-center space-y-2">
                      <Loader2 size={24} className="animate-spin text-[#0f62fe] mx-auto" />
                      <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Executing {language.toUpperCase()} code...</p>
                      <p className="text-[11px] text-zinc-400">Compiling on Judge0 Cloud sandbox</p>
                    </div>
                  ) : runResult ? (
                    <div className="space-y-3">
                      {/* Banner */}
                      <div className={`p-4 rounded-xl flex items-center justify-between ${
                        runResult.passed === runResult.total
                          ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                          : 'bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400'
                      }`}>
                        <div className="flex items-center gap-3">
                          {runResult.passed === runResult.total ? <CheckCircle2 size={22} /> : <Clock size={22} />}
                          <div>
                            <div className="text-sm font-bold font-sans">
                              {runResult.passed === runResult.total ? 'Accepted — All Tests Passed!' : `${runResult.passed} of ${runResult.total} Passed`}
                            </div>
                            <div className="text-[11px] opacity-80 font-sans">
                              Engine: {runResult.engine}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Cases Grid */}
                      <div className="grid md:grid-cols-3 gap-2 font-mono text-xs">
                        {runResult.results.map((r, i) => (
                          <div
                            key={i}
                            className={`p-3 rounded-lg border ${
                              r.passed
                                ? 'bg-emerald-500/5 border-emerald-500/20'
                                : 'bg-rose-500/5 border-rose-500/20'
                            }`}
                          >
                            <div className="flex justify-between items-center font-bold">
                              <span>Case {i + 1}</span>
                              <span className={r.passed ? 'text-emerald-500' : 'text-rose-500'}>
                                {r.passed ? 'PASS' : 'FAIL'}
                              </span>
                            </div>
                            {r.time && <div className="text-[10px] text-zinc-400 mt-1">{r.time} • {r.memory}</div>}
                            {r.error && (
                              <pre className="mt-1 text-[11px] text-rose-500 whitespace-pre-wrap break-all">
                                {r.error}
                              </pre>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : singleRun ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between font-sans">
                        <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Execution Result</span>
                        {singleRun.executionTime && (
                          <span className="text-[11px] font-mono text-zinc-400">{singleRun.executionTime}</span>
                        )}
                      </div>
                      {singleRun.error ? (
                        <pre className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs whitespace-pre-wrap">
                          {singleRun.error}
                        </pre>
                      ) : (
                        <pre className="p-3.5 rounded-xl bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-white/[0.08] text-zinc-800 dark:text-zinc-200 text-xs whitespace-pre-wrap">
                          {singleRun.output || '(No output produced)'}
                        </pre>
                      )}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-zinc-400">
                      <p className="text-xs">Click <span className="text-[#0f62fe] font-bold">Run</span> to test custom input or <span className="text-[#0f62fe] font-bold">Submit</span> to run all test cases.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
