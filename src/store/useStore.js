import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const STORAGE_KEY = 'ibm-code-practice-v1'

const defaultPrefs = {
  language: 'javascript',
  theme: 'dark',
  fontSize: 14,
  autoSave: true,
  judge0Endpoint: 'https://ce.judge0.com',
  judge0ApiKey: '',
  useJudge0ForJs: false,
}

export const useStore = create(
  persist(
    (set, get) => ({
      prefs: { ...defaultPrefs },
      setPrefs: (patch) => set((s) => ({ prefs: { ...s.prefs, ...patch } })),

      // code drafts: { [questionId]: { [lang]: code } }
      drafts: {},
      setDraft: (qid, lang, code) => set((s) => ({
        drafts: { ...s.drafts, [qid]: { ...(s.drafts[qid] || {}), [lang]: code } }
      })),

      // bookmarks: Set<string>
      bookmarks: [],
      toggleBookmark: (qid) => set((s) => ({
        bookmarks: s.bookmarks.includes(qid) ? s.bookmarks.filter(id => id !== qid) : [...s.bookmarks, qid]
      })),

      // solved: { [qid]: { solvedAt, attempts, bestTime } }
      solved: {},
      markSolved: (qid) => set((s) => ({
        solved: { ...s.solved, [qid]: { solvedAt: Date.now(), attempts: (s.solved[qid]?.attempts || 0) + 1 } }
      })),
      markAttempted: (qid) => set((s) => {
        if (s.solved[qid]) return {}
        return { solved: { ...s.solved, [qid]: { solvedAt: null, attempts: (s.solved[qid]?.attempts || 0) + 1 } } }
      }),

      // submissions: array
      submissions: [],
      addSubmission: (sub) => set((s) => ({
        submissions: [{ id: Date.now().toString(), timestamp: Date.now(), ...sub }, ...s.submissions].slice(0, 200)
      })),

      // custom test cases per question
      customCases: {}, // { [qid]: [{ input, expected }] }
      setCustomCases: (qid, cases) => set((s) => ({ customCases: { ...s.customCases, [qid]: cases } })),

      // activity: { [date:string]: count }
      activity: {},
      logActivity: () => {
        const today = new Date().toISOString().slice(0,10)
        set((s) => ({ activity: { ...s.activity, [today]: (s.activity[today]||0)+1 } }))
      },

      lastOpened: null,
      setLastOpened: (qid) => set({ lastOpened: qid }),

      // filter state (not persisted? we persist for convenience)
      filters: { search:'', difficulty:'All', topic:'All', status:'All' },
      setFilters: (patch) => set((s)=> ({ filters: { ...s.filters, ...patch } })),

      resetAll: () => set({
        prefs: { ...defaultPrefs },
        drafts: {},
        bookmarks: [],
        solved: {},
        submissions: [],
        customCases: {},
        activity: {},
        lastOpened: null,
        filters: { search:'', difficulty:'All', topic:'All', status:'All' }
      }),

      // import/export
      exportData: () => {
        const s = get()
        return JSON.stringify({
          prefs: s.prefs,
          drafts: s.drafts,
          bookmarks: s.bookmarks,
          solved: s.solved,
          submissions: s.submissions,
          customCases: s.customCases,
          activity: s.activity,
          lastOpened: s.lastOpened,
          _exportedAt: new Date().toISOString(),
          _version: 1
        }, null, 2)
      },
      importData: (jsonStr) => {
        try {
          const data = JSON.parse(jsonStr)
          set({
            prefs: data.prefs || defaultPrefs,
            drafts: data.drafts || {},
            bookmarks: data.bookmarks || [],
            solved: data.solved || {},
            submissions: data.submissions || [],
            customCases: data.customCases || {},
            activity: data.activity || {},
            lastOpened: data.lastOpened || null,
          })
          return { ok: true }
        } catch (e) {
          return { ok: false, error: e.message }
        }
      }
    }),
    {
      name: STORAGE_KEY,
      version: 1,
      partialize: (state) => ({
        prefs: state.prefs,
        drafts: state.drafts,
        bookmarks: state.bookmarks,
        solved: state.solved,
        submissions: state.submissions,
        customCases: state.customCases,
        activity: state.activity,
        lastOpened: state.lastOpened,
        filters: state.filters,
      }),
      onRehydrateStorage: () => (state, error) => {
        if (error) console.error('rehydrate error', error)
      }
    }
  )
)
