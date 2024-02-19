'use client'

import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: calc(${theme.grid.container} - 200px);
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1400px) {
      padding: 0 16px;
    }
  `}
`
