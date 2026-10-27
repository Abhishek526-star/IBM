import { useState, useEffect } from 'react'
import Topbar from './Topbar'
import { Outlet, useLocation } from 'react-router-dom'
import { useStore } from '../../store/useStore'
import { ShieldCheck } from 'lucide-react'

export default function Layout(){
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const theme = useStore(s => s.prefs.theme)

  const [prevPath, setPrevPath] = useState(location.pathname)
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    const updateTheme = () => {
      const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
    updateTheme()
    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      mq.addEventListener('change', updateTheme)
      return () => mq.removeEventListener('change', updateTheme)
    }
  }, [theme])

  const isProblemDetail = location.pathname.startsWith('/problem/')

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#07090e] text-zinc-900 dark:text-zinc-100 transition-colors duration-200 relative overflow-x-hidden selection:bg-[#0f62fe]/20 selection:text-[#0f62fe]">
      {/* Ambient background glow orbs for Linear depth */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-600/[0.07] dark:bg-[#0f62fe]/[0.12] blur-[120px] ambient-glow" />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-500/[0.05] dark:bg-[#6366f1]/[0.08] blur-[140px] ambient-glow" style={{ animationDelay: '3s' }} />
        <div className="absolute -bottom-[10%] left-[10%] w-[450px] h-[450px] rounded-full bg-cyan-500/[0.04] dark:bg-[#00d2ff]/[0.06] blur-[130px] ambient-glow" style={{ animationDelay: '5s' }} />
      </div>

      {/* Top navigation */}
      <Topbar onMenu={() => setMenuOpen(v => !v)} menuOpen={menuOpen} />

      {/* Main content view */}
      <main className="flex-1 w-full relative z-10 flex flex-col min-h-0">
        <Outlet />
      </main>

      {/* Minimalist modern footer */}
      {!isProblemDetail && (
        <footer className="relative z-10 border-t border-zinc-200/80 dark:border-white/[0.06] bg-white/60 dark:bg-[#07090e]/60 backdrop-blur-md px-6 py-6 transition-colors">
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">IBM FastPrep Studio</span>
              <span>•</span>
              <span>114 Authenticated OA & Technical Problems</span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Judge0 Cloud Active
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-blue-500" /> LocalStorage Encrypted Persist
              </span>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
