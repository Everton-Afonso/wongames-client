'use client'

import styled, { css } from 'styled-components'

import { RibbonProps } from '.'

const wrapperModifiers = {
  primary: () => css`
    background-color: var(--primary);
  `,

  secondary: () => css`
    background-color: var(--secondary);
  `,

  small: () => css`
    font-size: var(--xsmall);
    height: 24px;
  `,

  normal: () => css`
    font-size: var(--small);
    height: 33px;
  `,

  large: () => css`
    font-size: var(--large);
    height: 40px;
  `
}

export const WrapperRibbon = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ color, sizes }) => css`
    ${!!color && wrapperModifiers[color]}
    ${!!sizes && wrapperModifiers[sizes]}
  `}
`
