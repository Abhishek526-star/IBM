import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, Menu, X, Bookmark, BarChart3, Settings, LayoutDashboard, Code2, Moon, Sun, Cloud } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { useState } from 'react'

export default function Topbar({ onMenu, menuOpen }) {
  const loc = useLocation()
  const navigate = useNavigate()
  const prefs = useStore(s => s.prefs)
  const setPrefs = useStore(s => s.setPrefs)
  const [q, setQ] = useState('')

  const nav = [
    { to: '/', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/problems', label: 'Problems', icon: Code2, badge: '114' },
    { to: '/bookmarks', label: 'Bookmarks', icon: Bookmark },
    { to: '/progress', label: 'Analytics', icon: BarChart3 },
    { to: '/settings', label: 'Settings', icon: Settings },
  ]

  const isActive = (path) => loc.pathname === path || (path !== '/' && loc.pathname.startsWith(path))

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark')
    setPrefs({ theme: isDark ? 'light' : 'dark' })
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-white/85 dark:bg-[#090a0f]/80 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/[0.07] transition-colors">
      <div className="max-w-[1440px] mx-auto h-[56px] flex items-center justify-between px-4 sm:px-6 gap-3">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenu}
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-white/5 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f62fe] via-[#0043ce] to-[#00d2ff] p-0.5 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0a0f1d] rounded-[6px] flex items-center justify-center font-black text-[10px] tracking-tight text-white font-mono">
                IBM
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[14px] font-bold text-zinc-900 dark:text-white tracking-tight leading-none group-hover:text-[#0f62fe] dark:group-hover:text-[#38bdf8] transition-colors">
                  FastPrep Studio
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-blue-500/10 text-[#0f62fe] dark:text-[#38bdf8] border border-blue-500/20">
                  2026
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                IBM OA & Technical Prep
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation Pill Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-white/[0.04] p-1 rounded-xl border border-zinc-200/60 dark:border-white/[0.05]">
          {nav.map(item => {
            const active = isActive(item.to)
            const Icon = item.icon
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  active
                    ? 'text-zinc-900 dark:text-white bg-white dark:bg-white/[0.1] shadow-xs shadow-black/5 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/[0.04]'
                }`}
              >
                <Icon size={14} className={active ? 'text-[#0f62fe] dark:text-[#38bdf8]' : ''} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    active
                      ? 'bg-blue-500/15 text-[#0f62fe] dark:text-[#38bdf8]'
                      : 'bg-zinc-200/70 dark:bg-white/10 text-zinc-600 dark:text-zinc-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right: Search, Judge0 Status, Theme Toggle, User */}
        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={13} />
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && q.trim()) {
                  navigate(`/problems?q=${encodeURIComponent(q.trim())}`)
                }
              }}
              placeholder="Search problems, topics..."
              className="w-[220px] bg-zinc-100/80 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] rounded-lg pl-8 pr-8 py-1.5 text-[12px] text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe] transition"
            />
            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono font-medium text-zinc-400 dark:text-zinc-500 bg-zinc-200/60 dark:bg-white/10 px-1 py-0.5 rounded">
              ↵
            </span>
          </div>

          {/* Cloud Judge0 Indicator */}
          <Link
            to="/settings"
            title="Judge0 Multi-Language Execution Active"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/15 transition"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <Cloud size={12} />
            <span>Judge0 CE</span>
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] hover:bg-zinc-200 dark:hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle theme"
            title="Toggle color theme"
          >
            {prefs.theme === 'light' ? (
              <Moon size={15} className="text-zinc-600" />
            ) : (
              <Sun size={15} className="text-amber-400" />
            )}
          </button>

          {/* User profile avatar */}
          <Link
            to="/progress"
            className="flex items-center gap-2 p-1 pl-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-white/5 transition"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-[11px] font-bold shadow-xs">
              AK
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile navigation drawer when open */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-white/[0.07] px-4 py-3 space-y-1.5 bg-white/95 dark:bg-[#0c0e17]/95 backdrop-blur-xl">
          <div className="relative mb-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && q.trim()) {
                  navigate(`/problems?q=${encodeURIComponent(q.trim())}`)
                  onMenu()
                }
              }}
              placeholder="Search problems, topics..."
              className="w-full bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/[0.08] rounded-lg pl-9 pr-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 focus:outline-none"
            />
          </div>
          {nav.map(item => {
            const active = isActive(item.to)
            const Icon = item.icon
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={onMenu}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-medium ${
                  active
                    ? 'bg-blue-500/10 text-[#0f62fe] dark:text-[#38bdf8] font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={16} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 font-mono">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
