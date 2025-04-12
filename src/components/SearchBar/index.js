import React, {useState} from 'react'
import './index.css'

function SearchBar({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = event => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm)
    if (onSearch) {
      onSearch(newSearchTerm) // Call onSearch on every change
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search for recipes "
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
