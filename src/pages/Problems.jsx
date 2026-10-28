import { useMemo, useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { questions } from '../data/questions'
import { useStore } from '../store/useStore'
import {
  Search,
  CheckCircle2,
  Circle,
  Clock,
  Bookmark,
  Filter,
  ArrowRight
} from 'lucide-react'
import CustomSelect from '../components/common/CustomSelect'


function formatLastSeen(dateStr) {
  if (!dateStr) return 'Oct 2026'
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
    return {
      dot: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]',
      bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
    }
  }
  if (diff === 'Hard') {
    return {
      dot: 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]',
      bg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'
    }
  }
  if (diff === 'AI project') {
    return {
      dot: 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]',
      bg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
    }
  }
  return {
    dot: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]',
    bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
  }
}

function Sightings({ count }) {
  const bars = Math.min(4, Math.max(1, count || 1))
  return (
    <div className="flex items-center gap-1.5" title={`${count || 1} candidates reported this problem`}>
      <div className="flex items-end gap-0.5 h-3.5">
        {[1, 2, 3, 4].map(b => (
          <span
            key={b}
            className={`w-1 rounded-xs transition-all ${
              b <= bars
                ? 'bg-blue-600 dark:bg-[#38bdf8]'
                : 'bg-zinc-200 dark:bg-white/10'
            }`}
            style={{ height: `${b * 25}%` }}
          />
        ))}
      </div>
      <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">{count || 1}</span>
    </div>
  )
}

export default function Problems() {
  const [params, setParams] = useSearchParams()
  const filters = useStore(s => s.filters)
  const setFilters = useStore(s => s.setFilters)
  const bookmarks = useStore(s => s.bookmarks)
  const toggleBookmark = useStore(s => s.toggleBookmark)
  const solved = useStore(s => s.solved)

  const [sortBy, setSortBy] = useState(() => params.get('sort') || 'recent')
  const [statusTab, setStatusTab] = useState('All') // All | Solved | Attempted
  const [categoryTab, setCategoryTab] = useState('All')

  // Sync URL params to store filters on mount
  useEffect(() => {
    const q = params.get('q')
    const diff = params.get('difficulty')
    const topic = params.get('topic')
    const patch = {}
    if (q !== null && q !== filters.search) patch.search = q
    if (diff !== null && diff !== filters.difficulty) patch.difficulty = diff
    if (topic !== null && topic !== filters.topic) patch.topic = topic
    if (Object.keys(patch).length > 0) setFilters(patch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const p = new URLSearchParams()
    if (filters.search) p.set('q', filters.search)
    if (filters.difficulty !== 'All') p.set('difficulty', filters.difficulty)
    if (filters.topic !== 'All') p.set('topic', filters.topic)
    if (sortBy !== 'recent') p.set('sort', sortBy)
    setParams(p, { replace: true })
  }, [filters.search, filters.difficulty, filters.topic, sortBy, setParams])

  const allTopics = useMemo(() => {
    const set = new Set()
    questions.forEach(q => q.topics.forEach(t => set.add(t)))
    return ['All', ...Array.from(set).sort()]
  }, [])

  const filteredSorted = useMemo(() => {
    let arr = questions.filter(q => {
      // Category tab
      if (categoryTab === 'Algorithms' && q.difficulty === 'AI project') return false
      if (categoryTab === 'AI coding' && q.difficulty !== 'AI project') return false

      if (filters.search) {
        const s = filters.search.toLowerCase().trim()
        const matchTitle = q.title.toLowerCase().includes(s)
        const matchId = q.id.toLowerCase().includes(s)
        const matchTopic = q.topics.some(t => t.toLowerCase().includes(s))
        const matchStage = q.stage.toLowerCase().includes(s)
        if (!matchTitle && !matchId && !matchTopic && !matchStage) return false
      }
      if (filters.difficulty !== 'All' && q.difficulty !== filters.difficulty) return false
      if (filters.topic !== 'All' && !q.topics.includes(filters.topic)) return false

      if (statusTab === 'Solved' && !solved[q.id]?.solvedAt) return false
      if (statusTab === 'Attempted' && (!solved[q.id] || solved[q.id]?.solvedAt)) return false

      return true
    })

    arr.sort((a, b) => {
      if (sortBy === 'recent') {
        const da = new Date(a.lastReported || 0).getTime()
        const db = new Date(b.lastReported || 0).getTime()
        return db - da
      }
      if (sortBy === 'reports') {
        return (b.sightings ?? b.reports ?? 1) - (a.sightings ?? a.reports ?? 1)
      }
      if (sortBy === 'difficulty') {
        const order = { Easy: 1, Medium: 2, Hard: 3, 'AI project': 4 }
        return (order[a.difficulty] ?? 1) - (order[b.difficulty] ?? 1)
      }
      return 0
    })
    return arr
  }, [filters.search, filters.difficulty, filters.topic, solved, sortBy, statusTab, categoryTab])

  const total = questions.length

  const categories = [
    { id: 'All', label: 'All Problems', count: total },
    { id: 'Algorithms', label: 'Algorithms & Data Structures', count: 112 },
    { id: 'AI coding', label: 'AI Projects', count: 2 },
  ]

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Category Pills Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-zinc-200/80 dark:border-white/[0.08] pb-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {categories.map(cat => {
            const active = categoryTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setCategoryTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  active
                    ? 'bg-[#0f62fe] text-white shadow-md shadow-blue-500/20'
                    : 'bg-zinc-100 hover:bg-zinc-200/80 dark:bg-white/[0.05] dark:hover:bg-white/[0.08] text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${active ? 'bg-white/20 text-white' : 'bg-zinc-200 dark:bg-white/10 text-zinc-500 dark:text-zinc-400'}`}>
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>

        <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          Showing <span className="font-bold text-zinc-900 dark:text-white font-mono">{filteredSorted.length}</span> of {total} problems
        </div>
      </div>

      {/* Filter Toolbar Card */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center gap-3 relative z-30">
        {/* Search input */}
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={filters.search}
            onChange={e => setFilters({ search: e.target.value })}
            placeholder="Search by title, topic (e.g. Graph), ID (IBM-001)..."
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-100/90 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] rounded-xl text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe] transition"
          />
        </div>

        {/* Dropdowns & Status Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Difficulty Dropdown */}
          <CustomSelect
            value={filters.difficulty}
            onChange={val => setFilters({ difficulty: val })}
            options={[
              { value: 'All', label: 'All Difficulties' },
              { value: 'Easy', label: 'Easy' },
              { value: 'Medium', label: 'Medium' },
              { value: 'Hard', label: 'Hard' },
            ]}
          />

          {/* Topics Dropdown (with quick search) */}
          <CustomSelect
            value={filters.topic}
            onChange={val => setFilters({ topic: val })}
            options={allTopics.map(t => ({
              value: t,
              label: t === 'All' ? 'All Topics' : t,
            }))}
            searchable={true}
            searchPlaceholder="Search topics..."
            className="max-w-[160px]"
            menuClassName="min-w-[200px]"
          />

          {/* Sort By */}
          <CustomSelect
            value={sortBy}
            onChange={val => setSortBy(val)}
            options={[
              { value: 'recent', label: 'Latest Seen' },
              { value: 'reports', label: 'Most Reported' },
              { value: 'difficulty', label: 'Difficulty' },
            ]}
          />


          {/* Status Tabs */}
          <div className="flex bg-zinc-100 dark:bg-white/[0.05] p-1 rounded-xl border border-zinc-200/80 dark:border-white/[0.08]">
            {['All', 'Solved', 'Attempted'].map(tab => (
              <button
                key={tab}
                onClick={() => setStatusTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  statusTab === tab
                    ? 'bg-white dark:bg-white/10 text-zinc-900 dark:text-white shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Problems Table / List */}
      <div className="glass-card rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-white/[0.08] relative z-10">
        {/* Table Header */}
        <div className="hidden lg:grid grid-cols-[48px_1fr_160px_160px_180px_100px_48px] gap-4 px-6 py-3.5 bg-zinc-50/80 dark:bg-white/[0.02] border-b border-zinc-200/80 dark:border-white/[0.08] text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          <span>Status</span>
          <span>Problem</span>
          <span>Role / Company</span>
          <span>Stage</span>
          <span>Topics</span>
          <span className="text-right">Sightings</span>
          <span className="text-right">Save</span>
        </div>

        {/* Rows */}
        {filteredSorted.length === 0 ? (
          <div className="p-16 text-center space-y-3">
            <Filter size={32} className="mx-auto text-zinc-300 dark:text-zinc-600 mb-2" />
            <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">No matching IBM problems</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Try adjusting your filters or search keywords</p>
            <button
              onClick={() => {
                setFilters({ search: '', difficulty: 'All', topic: 'All' })
                setStatusTab('All')
              }}
              className="mt-2 px-4 py-2 bg-[#0f62fe] text-white text-xs font-semibold rounded-xl hover:bg-[#0043ce] transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="divide-y divide-zinc-200/80 dark:divide-white/[0.05]">
            {filteredSorted.map(q => {
              const isSolved = !!solved[q.id]?.solvedAt
              const isAttempted = !!solved[q.id]
              const isBookmarked = bookmarks.includes(q.id)
              const diffStyle = difficultyPill(q.difficulty)
              const topicFirst = q.topics[0] || 'Algorithm'
              const extraTopics = Math.max(0, q.topics.length - 1)

              return (
                <div
                  key={q.id}
                  className="px-6 py-4 lg:grid lg:grid-cols-[48px_1fr_160px_160px_180px_100px_48px] lg:gap-4 flex flex-col gap-3 items-start lg:items-center hover:bg-zinc-50/80 dark:hover:bg-white/[0.02] transition-colors group"
                >
                  {/* Status Indicator */}
                  <div className="flex items-center">
                    {isSolved ? (
                      <CheckCircle2 size={18} className="text-emerald-500" />
                    ) : isAttempted ? (
                      <Clock size={18} className="text-amber-500" />
                    ) : (
                      <Circle size={18} className="text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-400" />
                    )}
                  </div>

                  {/* Problem Title & Meta */}
                  <div className="min-w-0 pr-2">
                    <Link
                      to={`/problem/${q.id}`}
                      className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-[#0f62fe] dark:group-hover:text-[#38bdf8] transition-colors line-clamp-1"
                    >
                      {q.id} • {q.title}
                    </Link>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${diffStyle.bg}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${diffStyle.dot}`} />
                        {q.difficulty}
                      </span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                        {formatLastSeen(q.lastReported)}
                      </span>
                      {q.verified && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          Verified
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Company Column */}
                  <div className="hidden lg:flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#0f62fe] flex items-center justify-center font-bold text-[9px] text-white font-mono shadow-xs">
                      IBM
                    </div>
                    <div className="text-xs font-medium text-zinc-700 dark:text-zinc-300 truncate">
                      {q.companySub || 'Software Engineer'}
                    </div>
                  </div>

                  {/* Stage Column */}
                  <div className="hidden lg:block">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300">
                      {q.stage}
                    </span>
                  </div>

                  {/* Topics Column */}
                  <div className="hidden lg:flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-white/[0.05] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/[0.06] whitespace-nowrap">
                      {topicFirst}
                    </span>
                    {extraTopics > 0 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[11px] font-mono text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-white/[0.03]">
                        +{extraTopics}
                      </span>
                    )}
                  </div>

                  {/* Sightings Column */}
                  <div className="hidden lg:flex justify-end">
                    <Sightings count={q.sightings ?? q.reports ?? 1} />
                  </div>

                  {/* Bookmark Button */}
                  <div className="hidden lg:flex justify-end">
                    <button
                      onClick={() => toggleBookmark(q.id)}
                      className={`p-1.5 rounded-lg transition ${
                        isBookmarked
                          ? 'text-amber-500 bg-amber-500/10 hover:bg-amber-500/20'
                          : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/5'
                      }`}
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
                    >
                      <Bookmark size={15} fill={isBookmarked ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  {/* Mobile Row Controls */}
                  <div className="lg:hidden flex items-center justify-between w-full pt-2 border-t border-zinc-100 dark:border-white/[0.04]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-500">{q.stage}</span>
                      <span>•</span>
                      <span className="text-xs text-zinc-500">{topicFirst}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sightings count={q.sightings ?? q.reports ?? 1} />
                      <button
                        onClick={() => toggleBookmark(q.id)}
                        className={`p-1 ${isBookmarked ? 'text-amber-500' : 'text-zinc-400'}`}
                      >
                        <Bookmark size={15} fill={isBookmarked ? 'currentColor' : 'none'} />
                      </button>
                      <Link
                        to={`/problem/${q.id}`}
                        className="p-1 text-[#0f62fe] font-semibold text-xs flex items-center gap-1"
                      >
                        Solve <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
