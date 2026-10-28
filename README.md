# 💻 IBM Coding Practice Platform

A responsive coding practice platform to help prepare for IBM coding
assessments and interviews. Browse problems, write solutions, bookmark
questions, and track your progress.

## ✨ Features

-   🧩 **114 practice problems** covering common data structures and
    algorithms.
-   🔎 **Search and filters** by title, topic, difficulty, stage, and
    status.
-   🧑‍💻 **Coding workspace** with JavaScript, Python, Java, and C++17
    templates.
-   ▶️ **JavaScript execution** against configured test cases.
-   🔖 **Bookmarks and progress tracking** for practice sessions.
-   💾 **Automatic draft saving** for each problem and language.
-   📊 **Dashboard** with solved, attempted, and activity summaries.
-   📥 **Import and export** practice data as JSON.
-   📱 **Responsive interface** for desktop and mobile screens.

## 🛠️ Tech Stack

-   ⚛️ React
-   ⚡ Vite
-   🎨 Tailwind CSS
-   🗃️ Zustand
-   📝 Monaco Editor
-   💾 Browser LocalStorage

## 📂 Project Structure

``` text
src/
├── components/
│   └── layout/
├── pages/
│   ├── Dashboard.jsx
│   ├── Problems.jsx
│   ├── ProblemDetail.jsx
│   ├── Bookmarks.jsx
│   ├── Progress.jsx
│   └── Settings.jsx
├── data/
│   └── questions.js
├── store/
│   └── useStore.js
├── utils/
│   └── execution.js
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ Code Execution

  Language     Support
  ------------ --------------------------------------------------
  JavaScript   ✅ Runs in the browser
  Python       📝 Template available; execution not implemented
  Java         📝 Template available; execution not implemented
  C++17        📝 Template available; execution not implemented

## 💾 Data Storage

Practice drafts, bookmarks, progress, and preferences are saved in
browser LocalStorage. No account or backend is required.

> ⚠️ Data is stored in your current browser profile and does not
> automatically sync across devices. Export a backup before clearing
> browser data.

## ⚠️ Limitations

-   Python, Java, and C++17 code execution is not currently implemented.
-   JavaScript execution runs in the browser and is not a secure sandbox
    for untrusted code.
-   Some problem metadata may be illustrative; verify the listed source
    when available.

## ℹ️ Attribution

This is an independent educational project and is not affiliated with or
endorsed by IBM or FastPrep.

## 📄 License

The project notes specify MIT. Add a `LICENSE` file containing the MIT
license text before distributing the project under that license.
