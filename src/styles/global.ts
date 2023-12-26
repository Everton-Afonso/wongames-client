'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    height: 100%;
  }

  html {
    @media screen and (max-width: 1024px) {
      font-size: 93.75%;
    }

    @media screen and (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  body {
    font-family:
      'Poppins',
      'Open Sans',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Helvetica Neue',
      sans-serif;
  }
`}`

export default GlobalStyles
