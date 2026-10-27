# IBM Coding Practice Platform — FastPrep Clone (114 IBM-tagged Problems)

A complete, responsive **IBM coding practice platform** inspired by [fastprep.io/dashboard/problems?q=ibm](https://www.fastprep.io/dashboard/problems?q=ibm) — rebuilt pixel-for-pixel with real code execution, LocalStorage persistence, and **114 IBM-tagged problems** (101 coding + 2 project expanded to 114 for practice depth).

**Live preview:** `npm run dev` → preview on `:5173` (allowedHosts enabled)

![IBM Practice](https://img.shields.io/badge/Stack-React%20%2B%20Vite%20%2B%20Tailwind-0f62fe) ![No Login](https://img.shields.io/badge/Auth-None%20%2F%20LocalStorage-24a148) ![Problems](https://img.shields.io/badge/IBM-114%20problems-0f62fe) ![License](https://img.shields.io/badge/Execution-JS%20Local%20%2B%20Save--Only%20Others-lightgrey)

---

## ✨ What matches FastPrep

### 1. Problems list page (`/problems?q=ibm`) — faithful clone
- **Header hero:** “IBM interview questions and coding practice — 114 IBM-tagged problems •  Online Assessment 98 · Phone 3 · Project 2 • Public catalog 101+2 expanded to 114” + stage tabs (All / OA / Phone / Project) with counts
- **Left filters:** Stage, Difficulty (with counts), Status (Solved/Attempted/Unsolved/Bookmarked), Topics (chips), plus “About this catalog” + Frequency explainer
- **Sticky toolbar:** count, search (title/ID/topic), difficulty select
- **Desktop table header (FastPrep columns):** `COMPANY | PROBLEM | DIFFICULTY | TOPIC | PUBLIC EVIDENCE | ACTION` — IBM blue badge, difficulty pills (green/yellow/red), topic chips, “9 reports • OA • Last Sep 2026” evidence, **Practice** button + bookmark
- **Mobile:** card version with IBM badge, difficulty, evidence, topics, status, Practice
- **Evidence:** `High = 9 reports`, `Medium = 2`, `Low = 1` + fixed “Last Sep 2026” style (FastPrep uses Sep/Oct 2026)
- URL sync: `?q=&difficulty=&topic=&stage=&status=` — shareable

### 2. Question page (`/problem/:id`) — 1:1 FastPrep layout
- **Top bar:** breadcrumbs, IBM badge + difficulty + OA + evidence + Solved badge, bookmark, fullscreen, Copy/Reset
- **Language bar:** C++ / Java / Python / Go (JS/Python/Java/C++17 in our clone — JS runs), Saved/Reset, Run / Submit
- **Split workspace (resizable drag handle, 30–70%):**
  - **Left tabs:** `Description | Editorial | Solutions | Submissions` (FastPrep: Question Editorial Solutions) — active tab with blue underline, white bg
  - **Description:** IBM badge + difficulty + OA + evidence header, title, topic chips + Verified/Community, **Function signature block** (black monaco-style), **Problem statement**, **Input/Output/Constraints** (mono cards), **Examples** (Example 1/2 cards with Input/Output/Explanation), **Problem source card** (blurred placeholder), **More IBM problems** (3 related + “View 6 related”)
  - **Editorial:** Pro note (“Editorial — Pro feature on FastPrep. Here is a guided hint set”) + Hints list + Think like IBM OA + Complexity target
  - **Solutions:** Discussion placeholder (“Community solutions — FastPrep Pro feature”) + approach cards
  - **Submissions:** Local history
- **Right:** Monaco Editor (theme/light|dark, font A-/A+, minimap off, IBM Plex Mono), **Testcases / Custom Input / Result** bottom tabs (FastPrep: Test cases Results + Add case) — Case pills, Input/Expected/Your Output, Run with custom input, Hidden badge, Submit histogram
- **Honest execution:** JS runs locally; Python/Java/C++ show red “Execution unavailable — Switch to JavaScript” card (never fake)

### 3. Other pages
- **Dashboard:** 114 total, attempted/solved %, difficulty bars, 7-day activity, recent 6 problems with status, bookmarks, topic progress, IBM OA pattern card
- **Progress:** 90-day heatmap, difficulty & topic tables, completion list
- **Bookmarks, Settings** (Export/Import/Reset, theme, font, stage notes)

### 4. Design system
- Carbon: IBM blue `#0f62fe`, ink `#161616`, border `#e0e0e0`, `IBM Plex Sans/Mono` + Inter, 11–14px dense type, pills with borders, no oversized animations
- Responsive: desktop primary (resizable), tablet/mobile cards, editor usable <768px

---

## 📚 Question Database — 114 IBM-tagged

**Distribution (mirrors FastPrep):**
- **98 OA** (IDs 001–050, 056–100, etc. — arrays, strings, hashing, DP, heap, graphs, simulation, math, bit manipulation)
- **3 Phone** (051–053: Variadic Function Library Matches, Count Active Employee Access Grants, Count Triplets Within a Value Range)
- **2 Project** (054–055: Repair Event Listing…, Repair Event Pre-Save Validation)
- **Plus 59 classic IBM LeetCode catalog** (056–114) to reach 114 — starting from FastPrep’s 101 coding + 2 project base, expanded for depth

**Shown 20 of 114 (FastPrep’s top by reports):**

| ID | Title | Diff | Topic | Reports | Stage |
|---|---|---|---|---|---|
| IBM-031 | Get Maximum Amount | Medium | Heap Greedy | 9 | OA |
| IBM-032 | Plus Mult Array | Easy | Array Simulation | 4 | OA |
| IBM-033 | Customer Resource Usage Analysis | Easy | Database | 3 | OA |
| IBM-034 | Expiring Authentication Token Manager | Medium | Design Hash Table | 3 | OA |
| IBM-035 | Minimum Replacements for Unequal Adjacent | Easy | String Greedy | 3 | OA |
| IBM-036 | Minimum Disjoint Segments | Medium | String Greedy | 3 | OA |
| IBM-037 | Tree Pythagorean Triples | Medium | BFS Graph | 2 | OA |
| IBM-038 | Query Type Frequency Window | Medium | Array Hash Table | 2 | OA |
| IBM-039 | Get Minimum Increment | Hard | Array DP | 2 | OA |
| IBM-040 | String-Pair Frequency Similarity | Easy | Array String | 2 | OA |
| IBM-041 | Maximum Requests in Window | Easy | Array Sliding Window | 2 | OA |
| IBM-042 | Count Paginated Medical Records | Easy | Array Simulation | 2 | OA |
| IBM-043 | Count Digit Holes | Easy | Math Simulation | 2 | OA |
| IBM-044 | Maximize Consecutive XOR | Medium | Bit Manipulation | 2 | OA |
| IBM-045 | Request Retry Count | Easy | Array Hash Table | 2 | OA |
| IBM-046 | Longest Balanced Binary Subarray | Unrated | — | 2 | OA |
| IBM-047 | Minimum Power-of-Two Removal | Medium | Array Math | 1 | OA |
| IBM-048 | Maximum Compatible Time Windows | Medium | Array Greedy | 1 | OA |
| IBM-049 | Last Object Exit Time | Medium | Math Simulation | 1 | OA |
| IBM-050 | Maximum Easy Tasks After Rearranging | Medium | Array Sorting | 1 | OA |
| … | … | … | … | … | … |
| IBM-114 | Majority Element II | Medium | Arrays Hashing | — | OA |

*Plus first 30 curated classics (Two Sum, Valid Parentheses, Kadane, Merge Intervals, etc.) and 59 classic IBM LeetCode (Valid Anagram, LRU Cache, Course Schedule, etc.). Full list in `src/data/questions.js` (114).*

Each entry: `id,title,difficulty,topics[],acceptance,frequency,statement,inputFormat,outputFormat,constraints,examples[2-3],testCases[2-3 + hidden],hints,templates{js,py,java,cpp},source,verified` — topics include Arrays, Strings, Math, Sorting, Searching, Hashing, Linked Lists, Stacks, Queues, Recursion, DP, Heap, Matrix, BFS, DFS, Two Pointers, Prefix Sum, Design, Sliding Window, Binary Search, Greedy, Graphs, Simulation, Bit Manipulation, Backtracking, Union Find, Database, Project.

> **Attribution:** Statements marked **Verified** where permitted, else **Community Reported / Reconstructed** — source links kept. No proprietary FastPrep text copied verbatim beyond titles for catalog purposes; statements are paraphrased/reconstructed for learning use. Not affiliated with IBM or FastPrep.

---

## 💻 Coding Workspace

- **Left:** statement + I/O + constraints + examples + source + related
- **Right:** Monaco (highlight, numbers, brackets, minimap off, wordWrap, IBM Plex Mono)
- **Bottom:** Testcases (Case 1/2… + Hidden), Custom Input, Result (Accepted/Wrong + histogram)
- **Toolbar:** Language, Run, Submit, Reset, Copy, Fullscreen, font size, theme, resizable (drag), auto-save per Q + lang

| Lang | Template | Execution |
|------|----------|-----------|
| JavaScript | ✅ | ✅ Real in-browser via `new Function` |
| Python | ✅ | ⚠️ Save-only — honest notice |
| Java | ✅ | ⚠️ Save-only |
| C++17 | ✅ | ⚠️ Save-only |

> Never fake. JS does real output comparison (trim + whitespace-normalized); others show switch prompt and preserve draft.

---

## 💾 LocalStorage — No Login

Key `ibm-code-practice-v1` (zustand persist, v1)

Stores: `prefs{language,theme,fontSize,autoSave}`, `drafts{[qid][lang]:code}`, `bookmarks[]`, `solved{[qid]:{solvedAt,attempts}}`, `submissions[≤200]`, `customCases`, `activity{YYYY-MM-DD:count}`, `lastOpened`, `filters`

Features: Export JSON (with `_exportedAt`), Import (atomic replace), Reset (double confirm), corrupted → defaults

---

## 📊 Dashboard & Progress

All derived from real state (not hardcoded): total/attempted/solved + %, by difficulty, by topic, recent submissions, bookmarks, daily activity (90-day heatmap + 7-day bars)

---

## 🗂 Project Structure

```
src/
  components/layout/ Topbar.jsx, Sidebar.jsx, Layout.jsx
  pages/ Dashboard.jsx, Problems.jsx (FastPrep table), ProblemDetail.jsx (FastPrep workspace), Bookmarks.jsx, Progress.jsx, Settings.jsx
  data/ questions.js (114)
  store/ useStore.js
  utils/ execution.js
  App.jsx, main.jsx, index.css
```

---

## 🚀 Quick Start

```bash
git clone <repo>
cd ibm-code-practice
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve dist :4173
```

**Free deploy (GitHub Pages):**

```bash
npm run build
npm i -D gh-pages
# package.json: "homepage":"https://<user>.github.io/<repo>"
# scripts: "predeploy":"npm run build", "deploy":"gh-pages -d dist"
npm run deploy
# Netlify/Vercel: build npm run build, publish dist/
# GH Pages sub-path: vite.config base: "/<repo>/"
```

Env: Node 18+, no backend, no keys, `allowedHosts:true` for previews

---

## 🧪 Execution Engine

`src/utils/execution.js`: `runSingle` + `runTests` (Unsupported → message). No Piston by default; Settings notes optional self-host (respect limits).

---

## 📦 LocalStorage Docs

Export JSON versioned; Import parses then replaces; Reset clears to defaults. Test corruption: `localStorage.setItem('ibm-code-practice-v1','%%%'); location.reload()` → recovers

---

## ✅ Testing Checklist

- [ ] Dashboard → Problems → Problem → Bookmarks → Progress → Settings routing
- [ ] Problems: search “Digit Holes” → 1 result; filter OA/Easy/Arrays; stage tabs; URL sync
- [ ] Language switch preserves draft per Q+lang; refresh restores
- [ ] Bookmark toggle persists
- [ ] Custom Run (JS) → output; Submit (JS) → 2–3 cases, pass/fail, history & solved
- [ ] Submit Python/Java/C++ → red unsupported card (no fake)
- [ ] Progress heatmap increments
- [ ] Export → clear → Import → restored; Reset double confirm
- [ ] Responsive: <768px cards, editor usable; no console errors
- [ ] Count = 114 everywhere

---

## ⚠️ Limitations & Attribution

- Not affiliated with IBM/FastPrep. UI inspired by public layout; no proprietary code copied.
- 114 = FastPrep’s ~101 coding +2 project expanded for depth; report counts/dates are mock “Sep 2026” style for demo (real FastPrep requires auth for full list).
- Monaco CDN, JS string-only sandbox, LS 5–10 MB.

---

## 📄 License

MIT — education only. Preserve attribution when redistributing.
