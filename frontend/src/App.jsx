import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import LabelPage from './pages/LabelPage'
import GamePage from './pages/GamePage'
import VideosPage from './pages/VideosPage'

export default function App() {
  return (
    <div className="app-root">
      <nav className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/label">Label</Link>
        <Link to="/game">Game</Link>
        <Link to="/videos">Videos</Link>
      </nav>

      <main className="main-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/label" element={<LabelPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/videos" element={<VideosPage />} />
        </Routes>
      </main>
    </div>
  )
}
