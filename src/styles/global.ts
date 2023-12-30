'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-poppins);
  }

  :root {
    //grid
    --contaier: 130rem;
    --gutter: 3.2rem;

    //border
    --radius: 4px;

    //font
    --light: 300;
    --normal: 400;
    --bold: 600;

    //sizes
    --xsmall: 0.75rem; // 12px
    --small: 0.875rem; // 14px
    --medium: 1rem; // 16px
    --large: 1.125rem; // 18px
    --xlarge: 1.25rem; // 20px
    --xxlarge: 1.75rem; // 28px

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
    --xxsmall-spacings: 0.5rem;
    --xsmall-spacings: 1rem;
    --small-spacings: 1.5rem;
    --medium-spacings: 2rem;
    --large-spacings: 2.5rem;
    --xlarge-spacings: 3rem;
    --xxlarge-spacings: 3.5rem;

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
    scroll-behavior: smooth;
  }
`}`

export default GlobalStyles
