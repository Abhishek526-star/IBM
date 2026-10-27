import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Problems from './pages/Problems'
import ProblemDetail from './pages/ProblemDetail'
import Bookmarks from './pages/Bookmarks'
import Progress from './pages/Progress'
import Settings from './pages/Settings'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/problems" element={<Problems/>} />
          <Route path="/problem/:id" element={<ProblemDetail/>} />
          <Route path="/bookmarks" element={<Bookmarks/>} />
          <Route path="/progress" element={<Progress/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
