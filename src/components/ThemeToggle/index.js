// src/components/ThemeToggle/index.js
import React from 'react'
import './index.css'

function ThemeToggle({theme, toggleTheme}) {
  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  )
}

export default ThemeToggle
