import React, {useState} from 'react'
import SearchBar from '../SearchBar'
import RecipePage from '../RecipePage'
import './index.css'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = term => {
    setSearchTerm(term)
    console.log('Searching for:', term)
  }

  return (
    <div className="home-container">
      <div className="header">
        <h1>Recipe Finder</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="content">
        <RecipePage searchTerm={searchTerm} />
      </div>
    </div>
  )
}

export default Home
