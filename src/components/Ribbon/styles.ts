'use client'

import styled, { css } from 'styled-components'

import { RibbonProps } from '.'

const wrapperModifiers = {
  primary: () => css`
    background-color: var(--primary);

    &::before {
      border-left-color: var(--primary);
      border-top-color: var(--primary);
      filter: brightness(50%);
    }
  `,

  secondary: () => css`
    background-color: var(--secondary);

    &::before {
      border-left-color: var(--secondary);
      border-top-color: var(--secondary);
      filter: brightness(50%);
    }
  `,

  small: () => css`
    font-size: var(--xsmall);
    height: 24px;
    padding: 0 16px;
    right: -13px;

    &::before {
      top: 24px;
      border-top-width: 6px;
      border-right-width: 13px;
    }
  `,

  normal: () => css`
    font-size: var(--small);
    height: 33px;
    padding: 0 16px;
    right: -14px;

    &::before {
      top: 33px;
      border-top-width: 8px;
      border-right-width: 14px;
    }
  `,

  large: () => css`
    font-size: var(--large);
    height: 40px;
    padding: 0 16px;
    right: -22px;

    &::before {
      top: 40px;
      border-top-width: 10px;
      border-right-width: 22px;
    }
  `
}

export const WrapperRibbon = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ color, sizes }) => css`
    position: absolute;
    top: var(--xsmall-spacings);
    display: flex;
    align-items: center;
    font-weight: var(--bold);
    color: var(--white);

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!color && wrapperModifiers[color]}
    ${!!sizes && wrapperModifiers[sizes]}
  `}
`
