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

  :root {
    //grid
    --contaier: 130rem;
    --gutter: 3.2rem;

    //border
    --radius: 0.4rem;

    //font
    --family: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    --light: 300;
    --normal: 400;
    --bold: 600;

    //sizes
    --xsmall: 0.75rem;
    --small: 0.875rem;
    --medium: 1rem;
    --large: 1.125rem;
    --xlarge: 1.25rem;
    --xxlarge: 1.75rem;

    //color
    --primary: #f231a5;
    --secondary: #3cd3c1;
    --mainBg: #06092b;
    --white: #fafafa;
    --black: #030517;
    --lightGray: #eaeaea;
    --gray: #8f8f8f;
    --darkGray: #2e2f42;

    //spacings
    --xxsmall-spacings: 0.8rem;
    --xsmall-spacings: 1.6rem;
    --small-spacings: 2.4rem;
    --medium-spacings: 3.2rem;
    --large-spacings: 4rem;
    --xlarge-spacings: 4.8rem;
    --xxlarge-spacings: 5.6rem;

    //layers
    --base: 10;
    --menu: 20;
    --overlay: 30;
    --modal: 40;
    --alwaysOnTop: 50;
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
    font-family: var(--family);
    font-size: var(--medium);
  }
`}`

export default GlobalStyles
