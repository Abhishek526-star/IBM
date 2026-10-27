import { Link, useLocation } from 'react-router-dom'
import { Inbox, Bot, Zap, GraduationCap, BarChart3, Search, Command, Sun, Moon } from 'lucide-react'
import { useStore } from '../../store/useStore'

export default function Sidebar({ open, onClose }) {
  const loc = useLocation()
  const prefs = useStore(s => s.prefs)
  const setPrefs = useStore(s => s.setPrefs)
  const isActive = (path) => loc.pathname === path || (path !== '/' && loc.pathname.startsWith(path))

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark')
    setPrefs({ theme: isDark ? 'light' : 'dark' })
  }

  // FastPrep exact sidebar replication
  return (
    <>
      {open && <div onClick={onClose} className="fixed inset-0 bg-black/60 z-30 md:hidden" />}
      <aside className={`fixed md:sticky top-[48px] md:top-[48px] z-30 h-[calc(100vh-48px)] w-[240px] bg-white dark:bg-[#0a0a0a] border-r border-[#e0e0e0] dark:border-[#1e1e1e] flex flex-col overflow-auto transition-transform md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        {/* User header */}
        <div className="px-3 py-3 flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#0f62fe] dark:bg-[#1e1e1e] border border-transparent dark:border-[#2a2a2a] flex items-center justify-center rounded">
            <Zap size={14} className="text-white fill-white" />
          </div>
          <span className="text-[13px] font-semibold text-[#161616] dark:text-white">Abhishek Kumar</span>
        </div>

        {/* Search */}
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2 bg-[#f4f4f4] dark:bg-[#141414] border border-[#e0e0e0] dark:border-[#1f1f1f] rounded-md px-2.5 py-2">
            <Search size={14} className="text-[#6b7280]" />
            <span className="text-[13px] text-[#6b7280] flex-1">Search</span>
            <span className="flex items-center gap-1 text-[11px] text-[#6b7280] border border-[#d1d5db] dark:border-[#2a2a2a] bg-white dark:bg-[#0a0a0a] px-1 py-0.5 rounded">
              <Command size={10} />K
            </span>
          </div>
        </div>

        {/* Workspace */}
        <div className="px-3 pt-2">
          <div className="text-[11px] tracking-widest font-semibold text-[#6b7280] px-2 mb-2 flex items-center gap-1">
            <span className="text-[10px]">⌄</span> WORKSPACE
          </div>
          <nav className="space-y-0.5">
            <Link to="/" onClick={onClose} className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] ${isActive('/') && loc.pathname === '/' ? 'bg-[#e5e7eb] dark:bg-[#1a1a1a] text-[#161616] dark:text-white font-medium' : 'text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f4f4f4] dark:hover:bg-[#141414] hover:text-[#161616] dark:hover:text-white'}`}>
              <Inbox size={16} className="text-[#6b7280]" />
              <span className="flex-1">Inbox applications</span>
            </Link>
            <Link to="/progress" onClick={onClose} className="flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f4f4f4] dark:hover:bg-[#141414] hover:text-[#161616] dark:hover:text-white">
              <Bot size={16} className="text-[#6b7280]" />
              <span className="flex-1">AI Apply</span>
              <span className="text-[11px] bg-[#d1fae5] text-[#065f46] px-1.5 py-0.5 rounded-full font-medium">New</span>
            </Link>
            <Link to="/problems" onClick={onClose} className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] ${isActive('/problems') || isActive('/problem') ? 'bg-[#e0e7ff] dark:bg-[#1e1e1e] text-[#0f62fe] dark:text-white font-semibold' : 'text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f4f4f4] dark:hover:bg-[#141414] hover:text-[#161616] dark:hover:text-white'}`}>
              <Zap size={16} className={`${isActive('/problems') || isActive('/problem') ? 'text-[#0f62fe] dark:text-[#22d3ee] fill-[#0f62fe] dark:fill-[#22d3ee]' : 'text-[#6b7280]'}`} />
              <span className="flex-1 font-medium">Interview Prep</span>
            </Link>
            <Link to="/bookmarks" onClick={onClose} className="flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f4f4f4] dark:hover:bg-[#141414] hover:text-[#161616] dark:hover:text-white">
              <GraduationCap size={16} className="text-[#6b7280]" />
              <span className="flex-1">Learn</span>
              <span className="text-[11px] bg-[#d1fae5] text-[#065f46] px-1.5 py-0.5 rounded-full font-medium">New</span>
            </Link>
            <Link to="/progress" onClick={onClose} className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] ${isActive('/progress') ? 'bg-[#e5e7eb] dark:bg-[#1a1a1a] text-[#161616] dark:text-white font-medium' : 'text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f4f4f4] dark:hover:bg-[#141414] hover:text-[#161616] dark:hover:text-white'}`}>
              <BarChart3 size={16} className="text-[#6b7280]" />
              <span className="flex-1">Hiring Insights</span>
            </Link>
          </nav>
        </div>

        {/* Community */}
        <div className="px-3 pt-5">
          <div className="text-[11px] tracking-widest font-semibold text-[#6b7280] px-2 mb-2 flex items-center gap-1">
            <span className="text-[10px]">⌄</span> COMMUNITY
          </div>
          <nav className="space-y-0.5">
            <a href="#" className="flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f4f4f4] dark:hover:bg-[#141414] hover:text-[#161616] dark:hover:text-white">
              <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#ef4444] flex items-center justify-center text-[10px] text-white">✦</span>
              <span className="flex-1">Experience</span>
            </a>
            <a href="https://discord.gg" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f4f4f4] dark:hover:bg-[#141414] hover:text-[#161616] dark:hover:text-white">
              <span className="w-4 h-4 bg-[#5865f2] rounded-full flex items-center justify-center text-white text-[10px]">◈</span>
              <span className="flex-1">Join Discord</span>
              <span className="text-[#6b7280]">↗</span>
            </a>
          </nav>
        </div>

        {/* Bottom user */}
        <div className="mt-auto border-t border-[#e0e0e0] dark:border-[#1e1e1e] px-3 py-3 flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#f4f4f4] dark:bg-[#1e1e1e] border border-[#e0e0e0] dark:border-[#2a2a2a] flex items-center justify-center text-[11px] text-[#161616] dark:text-white font-semibold">AK</div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] text-[#161616] dark:text-white leading-none">Abhishek Kumar</div>
          </div>
          <button
            onClick={toggleTheme}
            className="p-1 text-[#6b7280] hover:text-[#161616] dark:hover:text-white transition rounded"
            title={`Switch to ${prefs.theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {prefs.theme === 'light' ? <Moon size={15} /> : <Sun size={15} className="text-[#f59e0b]" />}
          </button>
        </div>
      </aside>
    </>
  )
}
