import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' // Updated import for v6
import './App.css'
import RecipePage from './components/RecipePage'
import RecipeDetail from './components/RecipeDetail'
import SearchBar from './components/SearchBar'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
    return () => {
      document.body.classList.remove(theme)
    }
  }, [theme])

  const handleSearch = term => {
    setSearchTerm(term)
  }

  return (
    <Router>
      <div className={`app-container ${theme}`}>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <SearchBar onSearch={handleSearch} />

        <Routes>
          <Route path="/" element={<RecipePage searchTerm={searchTerm} />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
