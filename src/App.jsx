import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Overview from './pages/Overview.jsx'
import Analytics from './pages/Analytics.jsx'
import Emails from './pages/Emails.jsx'
import Settings from './pages/Settings.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white">
      {/* Top Nav */}
      <header className="sticky top-0 backdrop-blur-md/50 bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-bold text-lg tracking-wide">ScopeAX</div>
          <nav className="flex gap-6 text-sm">
            <NavLink className={({isActive})=>`hover:opacity-80 ${isActive?'font-semibold underline':''}`} to="/overview">Overview</NavLink>
            <NavLink className={({isActive})=>`hover:opacity-80 ${isActive?'font-semibold underline':''}`} to="/analytics">Analytics</NavLink>
            <NavLink className={({isActive})=>`hover:opacity-80 ${isActive?'font-semibold underline':''}`} to="/emails">Emails</NavLink>
            <NavLink className={({isActive})=>`hover:opacity-80 ${isActive?'font-semibold underline':''}`} to="/settings">Settings</NavLink>
          </nav>
        </div>
      </header>

      {/* Page body */}
      <main className="max-w-6xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/emails" element={<Emails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<div className="p-6">Not Found</div>} />
        </Routes>
      </main>
    </div>
  )
}
