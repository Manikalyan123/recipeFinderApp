import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import RecipeDetail from './components/RecipeDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
