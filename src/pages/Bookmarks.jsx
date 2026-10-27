import { Link } from 'react-router-dom'
import { questions } from '../data/questions'
import { useStore } from '../store/useStore'
import { Bookmark, BookmarkX, Play, ArrowRight, Trash2 } from 'lucide-react'

function difficultyPill(diff) {
  if (diff === 'Easy') return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
  if (diff === 'Hard') return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'
  return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
}

export default function Bookmarks(){
  const bookmarks = useStore(s => s.bookmarks)
  const toggleBookmark = useStore(s => s.toggleBookmark)
  const solved = useStore(s => s.solved)

  const list = questions.filter(q => bookmarks.includes(q.id))

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 flex items-center justify-between flex-wrap gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold">
            <Bookmark size={13} fill="currentColor" />
            <span>SAVED FOR REVIEW</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Bookmarked Problems
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {list.length} questions saved locally for your final interview prep revision.
          </p>
        </div>
        <Link
          to="/problems"
          className="px-4 py-2 bg-[#0f62fe] hover:bg-[#0043ce] text-white text-xs font-semibold rounded-xl transition"
        >
          Browse All Problems
        </Link>
      </div>

      {list.length === 0 ? (
        <div className="glass-card rounded-2xl p-16 text-center space-y-3">
          <BookmarkX className="mx-auto text-zinc-300 dark:text-zinc-600 mb-2" size={36} />
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">No bookmarked questions yet</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
            Click the star or bookmark icon on any problem to save challenging questions for revision.
          </p>
          <Link
            to="/problems"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#0f62fe] text-white text-xs font-semibold rounded-xl hover:bg-[#0043ce] transition shadow-md shadow-blue-500/20"
          >
            <span>Browse IBM Questions</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {list.map(q => {
            const isSolved = !!solved[q.id]?.solvedAt
            return (
              <div
                key={q.id}
                className="glass-card rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-zinc-400">{q.id}</span>
                    <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${difficultyPill(q.difficulty)}`}>
                      {q.difficulty}
                    </span>
                  </div>
                  <Link
                    to={`/problem/${q.id}`}
                    className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-[#0f62fe] dark:group-hover:text-[#38bdf8] transition-colors mt-2 block"
                  >
                    {q.title}
                  </Link>
                  <div className="flex items-center gap-1.5 mt-2 flex-wrap text-xs text-zinc-500">
                    <span>{q.stage}</span>
                    <span>•</span>
                    <span className="truncate max-w-[200px]">{q.topics.join(', ')}</span>
                    {isSolved && (
                      <span className="ml-auto text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        Solved
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-zinc-200/80 dark:border-white/[0.06]">
                  <button
                    onClick={() => toggleBookmark(q.id)}
                    className="text-xs text-rose-500 hover:text-rose-600 flex items-center gap-1 p-1 font-medium transition"
                  >
                    <Trash2 size={13} /> Remove
                  </button>
                  <Link
                    to={`/problem/${q.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0f62fe] text-white text-xs font-semibold rounded-lg hover:bg-[#0043ce] transition shadow-xs"
                  >
                    <Play size={12} fill="currentColor" /> Solve Now
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
