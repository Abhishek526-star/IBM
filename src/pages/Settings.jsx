import { useStore } from '../store/useStore'
import { useState } from 'react'
import { Download, Upload, Trash2, AlertTriangle, Database, Palette, Cloud, CheckCircle2, XCircle, Loader2, Sliders } from 'lucide-react'
import { testJudge0Connection } from '../utils/judge0'
import CustomSelect from '../components/common/CustomSelect'


export default function Settings(){
  const prefs = useStore(s => s.prefs)
  const setPrefs = useStore(s => s.setPrefs)
  const exportData = useStore(s => s.exportData)
  const importData = useStore(s => s.importData)
  const resetAll = useStore(s => s.resetAll)
  const [importText, setImportText] = useState('')
  const [msg, setMsg] = useState('')
  const [testState, setTestState] = useState({ testing: false, result: null })

  const handleExport = () => {
    const txt = exportData()
    const blob = new Blob([txt], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ibm-fastprep-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setMsg('Backup downloaded. Keep it safe — LocalStorage is local to this browser.')
    setTimeout(() => setMsg(''), 4000)
  }

  const handleImport = () => {
    const res = importData(importText)
    if (res.ok) {
      setMsg('Import successful — local drafts and progress restored.')
      setImportText('')
    } else {
      setMsg('Import failed: ' + res.error)
    }
    setTimeout(() => setMsg(''), 4000)
  }

  const handleReset = () => {
    if (confirm('Reset ALL data? This clears drafts, bookmarks, progress, and submissions.')) {
      if (confirm('Are you absolutely sure? Click OK to confirm.')) {
        resetAll()
        setMsg('All local data cleared.')
        setTimeout(() => setMsg(''), 3000)
      }
    }
  }

  const copyKeys = () => {
    navigator.clipboard.writeText(exportData())
    setMsg('Data copied to clipboard (JSON).')
    setTimeout(() => setMsg(''), 3000)
  }

  const handleTestJudge0 = async () => {
    setTestState({ testing: true, result: null })
    const res = await testJudge0Connection(prefs.judge0Endpoint, prefs.judge0ApiKey)
    setTestState({ testing: false, result: res })
  }

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-[#0f62fe] dark:text-[#38bdf8] text-xs font-semibold">
          <Sliders size={13} />
          <span>PREFERENCES & ENGINE CONFIG</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Settings & Environment
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Configure code compiler endpoints, theme preferences, editor font size, and backup your local progress.
        </p>
        {msg && (
          <div className="mt-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-4 py-2.5 rounded-xl text-xs font-medium">
            {msg}
          </div>
        )}
      </div>

      {/* Judge0 Multi-Language Execution Config */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-[#0f62fe]">
            <Cloud size={20} />
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">Judge0 Cloud Execution Engine</h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Powers live compilation & test evaluation for Python 3, Java 13, and C++ 17.
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Compiler Endpoint URL
            </label>
            <input
              type="text"
              value={prefs.judge0Endpoint || 'https://ce.judge0.com'}
              onChange={e => setPrefs({ judge0Endpoint: e.target.value.trim() })}
              placeholder="https://ce.judge0.com"
              className="w-full mt-1.5 px-4 py-2.5 text-xs bg-zinc-100 dark:bg-black/30 border border-zinc-200 dark:border-white/[0.08] text-zinc-900 dark:text-white rounded-xl focus:outline-none focus:border-[#0f62fe]"
            />
            <p className="text-[11px] text-zinc-400 mt-1">
              Default is <code className="bg-zinc-200/70 dark:bg-white/10 px-1.5 py-0.5 rounded font-mono">https://ce.judge0.com</code> (open public CE instance, no API key required).
            </p>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              RapidAPI Key (Optional)
            </label>
            <input
              type="password"
              value={prefs.judge0ApiKey || ''}
              onChange={e => setPrefs({ judge0ApiKey: e.target.value.trim() })}
              placeholder="Leave empty if using public ce.judge0.com or self-hosted"
              className="w-full mt-1.5 px-4 py-2.5 text-xs bg-zinc-100 dark:bg-black/30 border border-zinc-200 dark:border-white/[0.08] text-zinc-900 dark:text-white rounded-xl focus:outline-none focus:border-[#0f62fe]"
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06]">
            <div>
              <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Execute JavaScript in Cloud too</div>
              <div className="text-[11px] text-zinc-400">By default, JavaScript runs with 0ms latency in your browser sandbox.</div>
            </div>
            <input
              type="checkbox"
              checked={!!prefs.useJudge0ForJs}
              onChange={e => setPrefs({ useJudge0ForJs: e.target.checked })}
              className="accent-[#0f62fe] w-4 h-4 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleTestJudge0}
              disabled={testState.testing}
              className="px-5 py-2.5 bg-[#0f62fe] hover:bg-[#0043ce] text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition shadow-md shadow-blue-500/20 disabled:opacity-50"
            >
              {testState.testing ? <Loader2 size={14} className="animate-spin" /> : <Cloud size={14} />}
              <span>Test Connection</span>
            </button>
            {testState.result && (
              <span className={`text-xs flex items-center gap-1.5 font-medium ${testState.result.ok ? 'text-emerald-500' : 'text-rose-500'}`}>
                {testState.result.ok ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                {testState.result.ok ? `Connected successfully (${testState.result.version})` : `Failed: ${testState.result.error}`}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Appearance & Storage Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Appearance */}
        <div className="glass-card rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Palette size={16} className="text-[#0f62fe]" /> Appearance & Editor
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06]">
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Color Theme</span>
              <CustomSelect
                value={prefs.theme}
                onChange={val => setPrefs({ theme: val })}
                size="sm"
                align="right"
                menuClassName="min-w-[190px]"
                options={[
                  { value: 'dark', label: 'Dark Mode (Linear obsidian)' },
                  { value: 'light', label: 'Light Mode (Clean studio)' },
                  { value: 'system', label: 'System (Follow OS)' },
                ]}
              />
            </div>


            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/[0.06] space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Monaco Font Size</span>
                <span className="font-mono text-[11px] font-bold text-[#0f62fe]">{prefs.fontSize}px</span>
              </div>
              <input
                type="range"
                min="11"
                max="22"
                value={prefs.fontSize}
                onChange={e => setPrefs({ fontSize: parseInt(e.target.value) })}
                className="w-full accent-[#0f62fe] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Local Storage */}
        <div className="glass-card rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Database size={16} className="text-emerald-500" /> LocalStorage Data Management
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            All 114 question drafts, solved states, bookmarks, and activity heatmaps are encrypted and persisted locally in your browser.
          </p>
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-[#0f62fe] hover:bg-[#0043ce] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow-xs"
            >
              <Download size={13} /> Export JSON
            </button>
            <button
              onClick={copyKeys}
              className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-zinc-700 dark:text-zinc-300 text-xs font-semibold rounded-xl border border-zinc-200 dark:border-white/[0.08] transition"
            >
              Copy JSON
            </button>
          </div>
        </div>
      </div>

      {/* Import & Danger Zone */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Import */}
        <div className="glass-card rounded-2xl p-6 space-y-3">
          <h2 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Upload size={16} className="text-indigo-500" /> Restore Backup
          </h2>
          <textarea
            value={importText}
            onChange={e => setImportText(e.target.value)}
            placeholder='Paste exported JSON backup here...'
            className="w-full h-24 p-3 rounded-xl bg-zinc-50 dark:bg-black/30 border border-zinc-200 dark:border-white/[0.08] text-xs font-mono text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-[#0f62fe] resize-none"
          />
          <button
            onClick={handleImport}
            disabled={!importText.trim()}
            className="px-4 py-2 bg-zinc-800 hover:bg-black dark:bg-white/10 dark:hover:bg-white/20 text-white text-xs font-semibold rounded-xl disabled:opacity-40 transition"
          >
            Import Backup
          </button>
        </div>

        {/* Danger Zone */}
        <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
          <h2 className="text-sm font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
            <AlertTriangle size={16} /> Danger Zone
          </h2>
          <p className="text-xs text-rose-700 dark:text-rose-300 leading-relaxed">
            Resetting clears all drafts across Python, Java, C++, and JavaScript, as well as test results and bookmarks.
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow-sm"
          >
            <Trash2 size={13} /> Reset All Data
          </button>
        </div>
      </div>
    </div>
  )
}
