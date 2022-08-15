import React, { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import Todo from './components/todo/todo'
import theme from 'styled-theming'
import storage from 'local-storage-fallback'
import { Theme } from './theme'
import { ThemeProvider } from 'styled-components'

export const getBackground = theme('mode', {
  light: 'hsl(0, 0%, 98%)',
  dark: 'hsl(235, 21%, 11%)'
})

export const getForeground = theme('mode', {
  dark: 'hsl(0, 0%, 98%)'
})

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: ${getBackground};
    color: ${getForeground};
    font-family: ${Theme.fontFamily};
  }
  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }
`

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' }
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme))
  }, [theme])
  return (
    <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Todo setTheme={setTheme} theme={theme} />
    </div>
    </ThemeProvider>
  )
}

export default App
