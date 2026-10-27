import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { questions } from '../data/questions'
import { useStore } from '../store/useStore'
import {
  Bookmark,
  ChevronRight,
  Play,
  CheckCircle2,
  Circle,
  Zap,
  Sparkles,
  ArrowRight,
  Cloud,
  Check,
  Layers,
  Code2,
  Clock
} from 'lucide-react'

function generateWeeklyDays(activity) {
  const baseTime = Date.now()
  return [...Array(7)].map((_, i) => {
    const d = new Date(baseTime)
    d.setDate(d.getDate() - (6 - i))
    const key = d.toISOString().slice(0, 10)
    return {
      label: d.toLocaleDateString('en-US', { weekday: 'short' }),
      key,
      count: activity[key] || 0
    }
  })
}

export default function Dashboard() {
  const bookmarks = useStore(s => s.bookmarks)
  const solved = useStore(s => s.solved)
  const submissions = useStore(s => s.submissions)
  const activity = useStore(s => s.activity)

  const solvedCount = Object.values(solved).filter(v => v.solvedAt).length
  const attempted = Object.keys(solved).length
  const totalQuestions = questions.length
  const pct = Math.round((solvedCount / totalQuestions) * 100)

  const byDifficulty = useMemo(() => {
    const counts = { Easy: 0, Medium: 0, Hard: 0, totalEasy: 0, totalMedium: 0, totalHard: 0 }
    questions.forEach(q => {
      const diff = q.difficulty || 'Medium'
      const totalKey = 'total' + diff
      counts[totalKey] = (counts[totalKey] || 0) + 1
      if (solved[q.id]?.solvedAt) {
        counts[diff] = (counts[diff] || 0) + 1
      }
    })
    return counts
  }, [solved])

  const topTopics = useMemo(() => {
    const byTopic = {}
    questions.forEach(q => {
      q.topics.forEach(t => {
        if (!byTopic[t]) byTopic[t] = { total: 0, solved: 0 }
        byTopic[t].total++
        if (solved[q.id]?.solvedAt) byTopic[t].solved++
      })
    })
    return Object.entries(byTopic).sort((a, b) => b[1].total - a[1].total).slice(0, 8)
  }, [solved])

  const days = useMemo(() => generateWeeklyDays(activity), [activity])
  const maxAct = Math.max(1, ...days.map(d => d.count))
  const bookmarkedQs = questions.filter(q => bookmarks.includes(q.id)).slice(0, 4)

  const sortedByRecent = useMemo(() => {
    return [...questions].sort((a, b) => new Date(b.lastReported || 0) - new Date(a.lastReported || 0))
  }, [])

  // Circle progress calculation
  const radius = 38
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (pct / 100) * circumference

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Hero Card */}
        <div className="lg:col-span-8 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle gradient sheen */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/25 text-[#0f62fe] dark:text-[#38bdf8] text-[12px] font-semibold tracking-wide">
              <Sparkles size={13} className="animate-spin-slow" />
              <span>AUTHENTIC IBM TECHNICAL & OA QUESTIONS 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              Master the <span className="gradient-text">IBM Coding</span> Assessment
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              Curated collection of 114 real interview questions reported for IBM Software Engineering roles.
              Execute code with authentic test suites locally in JavaScript or in the cloud with Python, Java, and C++ via Judge0.
            </p>

            {/* Quick feature tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300">
                <Zap size={13} className="text-amber-500" /> Instant Sandbox
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300">
                <Cloud size={13} className="text-blue-500" /> Multi-Language (Python, Java, C++)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300">
                <Check size={13} className="text-emerald-500" /> 100% Real Test Cases
              </span>
            </div>
          </div>

          <div className="relative z-10 pt-6 sm:pt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/problems"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0f62fe] to-[#0043ce] hover:from-[#0043ce] hover:to-[#0f62fe] text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play size={16} fill="currentColor" />
              <span>Explore All 114 Problems</span>
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/problem/IBM-001"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-zinc-800 dark:text-zinc-200 text-sm font-medium border border-zinc-200 dark:border-white/[0.08] transition"
            >
              <span>Solve Tree Pythagorean Triples</span>
              <ChevronRight size={14} className="text-zinc-400" />
            </Link>
          </div>
        </div>

        {/* Right Progress Summary Card with Circular Ring */}
        <div className="lg:col-span-4 glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Overall Progress
              </span>
              <Link to="/progress" className="text-xs text-[#0f62fe] dark:text-[#38bdf8] hover:underline font-medium">
                Detailed Stats →
              </Link>
            </div>

            {/* Circular Progress Gauge */}
            <div className="flex items-center gap-6 mt-5">
              <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
                  {/* Background Circle */}
                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    className="stroke-zinc-200 dark:stroke-white/[0.08]"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  {/* Animated Gradient Stroke */}
                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    className="stroke-[#0f62fe] transition-all duration-1000 ease-out"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xl font-extrabold text-zinc-900 dark:text-white leading-none">
                    {pct}%
                  </span>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                    Solved
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {solvedCount} of {totalQuestions} Solved
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {attempted} questions attempted • {totalQuestions - attempted} remaining untouched
                </p>
              </div>
            </div>

            {/* Difficulty Breakdown Bars */}
            <div className="space-y-2.5 mt-6 pt-5 border-t border-zinc-200 dark:border-white/[0.08]">
              {/* Easy */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Easy
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                    {byDifficulty.Easy} / {byDifficulty.totalEasy || 12}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-zinc-100 dark:bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${(byDifficulty.Easy / (byDifficulty.totalEasy || 12)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Medium */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" /> Medium
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                    {byDifficulty.Medium} / {byDifficulty.totalMedium || 88}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-zinc-100 dark:bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all duration-500"
                    style={{ width: `${(byDifficulty.Medium / (byDifficulty.totalMedium || 88)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Hard */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" /> Hard
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                    {byDifficulty.Hard} / {byDifficulty.totalHard || 13}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-zinc-100 dark:bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-500 rounded-full transition-all duration-500"
                    style={{ width: `${(byDifficulty.Hard / (byDifficulty.totalHard || 13)) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Activity mini histogram */}
          <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-white/[0.08]">
            <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 mb-2.5 uppercase tracking-wider">
              7-Day Activity
            </div>
            <div className="grid grid-cols-7 gap-1.5 items-end h-10">
              {days.map(d => {
                const heightPct = d.count ? Math.max(25, Math.round((d.count / maxAct) * 100)) : 12
                return (
                  <div key={d.key} className="flex flex-col items-center gap-1 h-full justify-end group/bar">
                    <div
                      title={`${d.label}: ${d.count} actions`}
                      className={`w-full rounded-sm transition-all duration-300 ${
                        d.count > 0
                          ? 'bg-[#0f62fe] group-hover/bar:bg-[#0043ce]'
                          : 'bg-zinc-200 dark:bg-white/[0.07]'
                      }`}
                      style={{ height: `${heightPct}%` }}
                    />
                    <span className="text-[10px] text-zinc-400 font-mono">{d.label[0]}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid sm:grid-cols-3 gap-5">
        <Link
          to="/problems"
          className="glass-card rounded-2xl p-5 group flex items-center justify-between cursor-pointer"
        >
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Total Questions
            </span>
            <div className="text-3xl font-extrabold text-zinc-900 dark:text-white font-mono">
              {totalQuestions}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              113 OA Coding + 2 Projects
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-[#0f62fe] group-hover:scale-110 transition-transform">
            <Code2 size={22} />
          </div>
        </Link>

        <Link
          to="/progress"
          className="glass-card rounded-2xl p-5 group flex items-center justify-between cursor-pointer"
        >
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Questions Solved
            </span>
            <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
              {solvedCount}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              {attempted} in progress
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
            <CheckCircle2 size={22} />
          </div>
        </Link>

        <Link
          to="/bookmarks"
          className="glass-card rounded-2xl p-5 group flex items-center justify-between cursor-pointer"
        >
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Bookmarked
            </span>
            <div className="text-3xl font-extrabold text-amber-500 font-mono">
              {bookmarks.length}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              Saved for final review
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
            <Bookmark size={22} />
          </div>
        </Link>
      </div>

      {/* Topic Filter Chips */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Layers size={16} className="text-[#0f62fe]" /> Practice by Topic
          </h2>
          <Link to="/problems" className="text-xs text-[#0f62fe] dark:text-[#38bdf8] font-medium hover:underline">
            View All Topics →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {topTopics.map(([topic, stats]) => (
            <Link
              key={topic}
              to={`/problems?topic=${encodeURIComponent(topic)}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-zinc-100 hover:bg-zinc-200/80 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-zinc-200/80 dark:border-white/[0.06] text-zinc-700 dark:text-zinc-300 transition-all hover:scale-[1.02]"
            >
              <span>{topic}</span>
              <span className="font-mono text-[11px] px-1.5 py-0.2 rounded-full bg-zinc-200/70 dark:bg-white/10 text-zinc-500 dark:text-zinc-400">
                {stats.solved}/{stats.total}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Problems Feed & Recent Activity Split */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left: Recent Problems to Practice */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Code2 size={16} className="text-[#0f62fe]" /> Recent IBM Assessment Problems
            </h2>
            <Link to="/problems" className="text-xs text-[#0f62fe] dark:text-[#38bdf8] font-medium hover:underline">
              Browse all 114 →
            </Link>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden divide-y divide-zinc-200 dark:divide-white/[0.06]">
            {sortedByRecent.slice(0, 6).map(q => {
              const isSolved = !!solved[q.id]?.solvedAt
              const isAttempted = !!solved[q.id]
              const diffColor =
                q.difficulty === 'Easy'
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                  : q.difficulty === 'Hard'
                  ? 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20'
                  : 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20'

              return (
                <div
                  key={q.id}
                  className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="shrink-0">
                      {isSolved ? (
                        <CheckCircle2 size={18} className="text-emerald-500" />
                      ) : isAttempted ? (
                        <Clock size={18} className="text-amber-500" />
                      ) : (
                        <Circle size={18} className="text-zinc-300 dark:text-zinc-600" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <Link
                        to={`/problem/${q.id}`}
                        className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-[#0f62fe] dark:hover:text-[#38bdf8] truncate block transition-colors"
                      >
                        {q.id} • {q.title}
                      </Link>
                      <div className="flex items-center gap-2 mt-1 flex-wrap text-xs">
                        <span className={`px-2 py-0.5 rounded-full border text-[11px] font-medium ${diffColor}`}>
                          {q.difficulty}
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400">•</span>
                        <span className="text-zinc-500 dark:text-zinc-400 truncate max-w-[200px]">
                          {q.topics.slice(0, 2).join(', ')}
                        </span>
                        <span className="text-zinc-400 hidden sm:inline">•</span>
                        <span className="text-zinc-400 hidden sm:inline">{q.stage}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/problem/${q.id}`}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 hover:bg-[#0f62fe] text-zinc-700 hover:text-white dark:bg-white/[0.06] dark:hover:bg-[#0f62fe] dark:text-zinc-200 transition-all duration-200"
                  >
                    <span>Solve</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Bookmarks & Recent Submissions */}
        <div className="lg:col-span-4 space-y-6">
          {/* Bookmarked Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Bookmark size={15} className="text-amber-500" /> Saved Bookmarks
              </h3>
              <Link to="/bookmarks" className="text-xs text-[#0f62fe] dark:text-[#38bdf8] font-medium hover:underline">
                View all
              </Link>
            </div>

            <div className="glass-card rounded-2xl p-4">
              {bookmarkedQs.length === 0 ? (
                <div className="text-center py-6 text-zinc-400 space-y-1">
                  <Bookmark size={24} className="mx-auto text-zinc-300 dark:text-zinc-600 mb-1" />
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">No bookmarks saved yet</p>
                  <p className="text-[11px] text-zinc-400">Star questions while practicing to save them for later</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {bookmarkedQs.map(q => (
                    <Link
                      key={q.id}
                      to={`/problem/${q.id}`}
                      className="block p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/[0.04] transition"
                    >
                      <div className="text-xs font-semibold text-zinc-900 dark:text-white truncate">
                        {q.id} • {q.title}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{q.difficulty} • {q.stage}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submissions Mini Log */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Clock size={15} className="text-blue-500" /> Recent Submissions
              </h3>
              <Link to="/progress" className="text-xs text-[#0f62fe] dark:text-[#38bdf8] font-medium hover:underline">
                History
              </Link>
            </div>

            <div className="glass-card rounded-2xl p-4">
              {submissions.length === 0 ? (
                <div className="text-center py-6 text-zinc-400 space-y-1">
                  <Code2 size={24} className="mx-auto text-zinc-300 dark:text-zinc-600 mb-1" />
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">No submissions yet</p>
                  <p className="text-[11px] text-zinc-400">Run code on any problem to track your runs</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {submissions.slice(0, 4).map(s => (
                    <div key={s.id} className="flex items-center justify-between text-xs">
                      <div className="min-w-0 pr-2">
                        <div className="font-medium text-zinc-800 dark:text-zinc-200 truncate">{s.qid} • {s.title}</div>
                        <div className="text-[10px] text-zinc-400">{s.language.toUpperCase()} • {new Date(s.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                        s.passed === s.total
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                      }`}>
                        {s.passed}/{s.total}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
