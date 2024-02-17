'use client'

import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: calc(${theme.grid.container} - 200px);
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
