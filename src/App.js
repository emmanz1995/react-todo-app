import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Todo from './components/todo/todo'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.veryDarkBlue};
    font-family: ${props => props.theme.fontFamily};
  }
  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Todo />
    </div>
  )
}

export default App
