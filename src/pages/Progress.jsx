import { useMemo } from 'react'
import { questions } from '../data/questions'
import { useStore } from '../store/useStore'
import { Link } from 'react-router-dom'
import { BarChart3, CheckCircle2, Clock, Layers, Calendar } from 'lucide-react'

function generateHeatmapCells(activity, days = 90) {
  const baseTime = Date.now()
  return [...Array(days)].map((_, i) => {
    const d = new Date(baseTime)
    d.setDate(d.getDate() - (days - 1 - i))
    const key = d.toISOString().slice(0, 10)
    const count = activity[key] || 0
    let level = 0
    if (count >= 6) level = 4
    else if (count >= 3) level = 3
    else if (count >= 2) level = 2
    else if (count >= 1) level = 1
    return { key, count, level, date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }
  })
}

export default function Progress(){
  const solved = useStore(s => s.solved)
  const submissions = useStore(s => s.submissions)
  const activity = useStore(s => s.activity)

  const solvedCount = Object.values(solved).filter(v => v.solvedAt).length
  const attempted = Object.keys(solved).length
  const total = questions.length
  const pct = Math.round((solvedCount / total) * 100)

  const byDiff = useMemo(() => {
    const counts = {
      Easy: { total: 0, solved: 0 },
      Medium: { total: 0, solved: 0 },
      Hard: { total: 0, solved: 0 },
      'AI project': { total: 0, solved: 0 },
    }
    questions.forEach(q => {
      const diff = q.difficulty || 'Medium'
      if (!counts[diff]) {
        counts[diff] = { total: 0, solved: 0 }
      }
      counts[diff].total++
      if (solved[q.id]?.solvedAt) {
        counts[diff].solved++
      }
    })
    return counts
  }, [solved])

  const byTopic = useMemo(() => {
    const topics = {}
    questions.forEach(q => {
      q.topics.forEach(t => {
        if (!topics[t]) topics[t] = { total: 0, solved: 0 }
        topics[t].total++
        if (solved[q.id]?.solvedAt) topics[t].solved++
      })
    })
    return topics
  }, [solved])

  // Heatmap 90 days
  const cells = useMemo(() => generateHeatmapCells(activity, 90), [activity])

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-[#0f62fe] dark:text-[#38bdf8] text-xs font-semibold">
            <BarChart3 size={13} />
            <span>PERFORMANCE ANALYTICS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Your Interview Readiness
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
            Track problem solving velocity, topic coverage, and submission success metrics across authentic IBM assessment questions.
          </p>

          <div className="pt-4 flex items-end gap-6">
            <div className="text-5xl font-extrabold gradient-text font-mono leading-none">
              {pct}%
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              <span className="font-bold text-zinc-900 dark:text-white">{solvedCount}</span> of {total} completed<br />
              <span className="font-medium">{attempted}</span> attempted • {total - attempted} untouched
            </div>
          </div>

          <div className="h-2 w-full max-w-md bg-zinc-200/80 dark:bg-white/[0.08] rounded-full overflow-hidden mt-3">
            <div className="h-full bg-gradient-to-r from-[#0f62fe] to-[#00d2ff] rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="md:col-span-4 p-5 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.06] space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            By Difficulty
          </div>
          <div className="space-y-3 pt-1">
            {Object.entries(byDiff).map(([k, v]) => {
              const color =
                k === 'Easy' ? 'bg-emerald-500 text-emerald-600 dark:text-emerald-400' :
                k === 'Hard' ? 'bg-rose-500 text-rose-600 dark:text-rose-400' :
                k === 'AI project' ? 'bg-purple-500 text-purple-600 dark:text-purple-400' :
                'bg-amber-500 text-amber-600 dark:text-amber-400'
              return (
                <div key={k} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-zinc-700 dark:text-zinc-300">{k}</span>
                    <span className="font-mono text-zinc-500 dark:text-zinc-400 text-[11px]">{v.solved}/{v.total}</span>
                  </div>
                  <div className="h-1.5 bg-zinc-200 dark:bg-white/[0.08] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${color.split(' ')[0]}`}
                      style={{ width: v.total ? `${(v.solved / v.total) * 100}%` : '0%' }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Heatmap & Topic Table */}
        <div className="lg:col-span-8 space-y-8">
          {/* 90-Day Activity Heatmap */}
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Calendar size={15} className="text-[#0f62fe]" /> 90-Day Practice Activity Heatmap
              </h2>
              <span className="text-xs text-zinc-400 font-mono">Real execution tracking</span>
            </div>

            <div className="pt-2 grid grid-cols-[repeat(18,minmax(0,1fr))] sm:grid-cols-[repeat(30,minmax(0,1fr))] gap-1.5">
              {cells.map(c => (
                <div
                  key={c.key}
                  title={`${c.date}: ${c.count} runs`}
                  className={`aspect-square rounded-sm transition-all duration-200 hover:scale-125 hover:z-20 ${
                    c.level === 0 ? 'bg-zinc-200/80 dark:bg-white/[0.06]' :
                    c.level === 1 ? 'bg-blue-300 dark:bg-blue-900/60 shadow-[0_0_6px_rgba(59,130,246,0.3)]' :
                    c.level === 2 ? 'bg-blue-500 dark:bg-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.5)]' :
                    c.level === 3 ? 'bg-indigo-600 dark:bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]' :
                    'bg-cyan-400 dark:bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 text-[11px] text-zinc-400 pt-2 font-mono">
              <span>Less</span>
              <span className="w-3 h-3 rounded-xs bg-zinc-200/80 dark:bg-white/[0.06]" />
              <span className="w-3 h-3 rounded-xs bg-blue-300 dark:bg-blue-900/60" />
              <span className="w-3 h-3 rounded-xs bg-blue-500 dark:bg-blue-600" />
              <span className="w-3 h-3 rounded-xs bg-indigo-600 dark:bg-indigo-500" />
              <span className="w-3 h-3 rounded-xs bg-cyan-400" />
              <span>More</span>
            </div>
          </div>

          {/* Progress by Topic */}
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Layers size={15} className="text-[#0f62fe]" /> Mastery by Algorithmic Category
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-white/[0.08] text-zinc-400 uppercase tracking-wider text-[11px]">
                    <th className="text-left py-2.5 font-bold">Category</th>
                    <th className="text-right py-2.5 font-bold">Solved</th>
                    <th className="text-right py-2.5 font-bold">Total</th>
                    <th className="w-[180px] px-4 py-2.5 text-left font-bold">Coverage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/70 dark:divide-white/[0.05]">
                  {Object.entries(byTopic)
                    .sort((a, b) => b[1].total - a[1].total)
                    .map(([t, v]) => (
                      <tr key={t} className="hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition">
                        <td className="py-3 font-semibold text-zinc-800 dark:text-zinc-200">
                          <Link to={`/problems?topic=${encodeURIComponent(t)}`} className="hover:text-[#0f62fe] transition">
                            {t}
                          </Link>
                        </td>
                        <td className="text-right font-mono font-bold text-emerald-600 dark:text-emerald-400">{v.solved}</td>
                        <td className="text-right font-mono text-zinc-500">{v.total}</td>
                        <td className="px-4">
                          <div className="h-1.5 w-full bg-zinc-200 dark:bg-white/[0.08] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#0f62fe] rounded-full"
                              style={{ width: `${v.total ? (v.solved / v.total) * 100 : 0}%` }}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Submissions & Solved List */}
        <div className="lg:col-span-4 space-y-8">
          {/* Recent Submissions */}
          <div className="glass-card rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Clock size={15} className="text-blue-500" /> Recent Submissions Log
            </h3>
            {submissions.length === 0 ? (
              <p className="text-xs text-zinc-400 py-6 text-center">No runs logged yet</p>
            ) : (
              <div className="space-y-2.5">
                {submissions.slice(0, 8).map(s => (
                  <div key={s.id} className="p-3 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.06] flex items-center justify-between text-xs">
                    <div className="min-w-0 pr-2">
                      <div className="font-semibold text-zinc-900 dark:text-white truncate">{s.qid} • {s.title}</div>
                      <div className="text-[11px] text-zinc-400">{s.language.toUpperCase()} • {new Date(s.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full font-mono text-[11px] font-bold ${
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

          {/* Quick Problem Checklist */}
          <div className="glass-card rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500" /> Solved Questions
            </h3>
            <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
              {questions.map(q => {
                const st = solved[q.id]
                return (
                  <Link
                    key={q.id}
                    to={`/problem/${q.id}`}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition ${
                      st?.solvedAt
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold'
                        : st
                        ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300'
                        : 'hover:bg-zinc-100 dark:hover:bg-white/[0.04] text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full shrink-0 ${
                      st?.solvedAt ? 'bg-emerald-500' : st ? 'bg-amber-500' : 'bg-zinc-300 dark:bg-zinc-600'
                    }`} />
                    <span className="truncate flex-1">{q.id} {q.title}</span>
                    {st?.solvedAt && <span className="text-[10px] font-bold">SOLVED</span>}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
