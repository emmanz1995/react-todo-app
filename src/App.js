import React, { useState, useEffect } from 'react'
import Todo from './components/todo/todo'
import './app.scss'
import moonIcon from './images/icon-moon.svg'
import sunIcon from './images/icon-sun.svg'

function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <div className={theme}>
      <div className="background">
        <div className="hero">
          <div className="hero-wrapper">
            <h1>Todo</h1>
            <span>
              <button
                  className="theme-toggle-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <img src={sunIcon} alt="" /> : <img src={moonIcon} alt="" />}
              </button>
            </span>
          </div>
        </div>
        <Todo />
      </div>
    </div>
  )
}

export default App
