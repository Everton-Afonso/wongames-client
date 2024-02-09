'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  :root {
    //grid
    --contaier: 130rem;
    --gutter: 2rem;

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

  ${({ theme }) => css`
    html,
    body {
      height: 100%;
      overflow: auto;
      scroll-behavior: smooth;
    }

    html {
      scroll-behavior: smooth;

      @media screen and (max-width: 1080px) {
        font-size: 93.75%; //15px
      }

      @media screen and (max-width: 720px) {
        font-size: 87.5%; //14px
      }
    }

    body {
      font-family: ${theme.font.family};
      background: ${theme.colors.mainBg};
    }
  `}
`

export default GlobalStyles
