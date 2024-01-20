'use client'

import styled, { css, DefaultTheme } from 'styled-components'

import { RibbonColors, RibbonProps } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${theme.colors[color]};
      border-top-color: ${theme.colors[color]};
      filter: brightness(50%);
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 24px;
    padding: 0 16px;
    right: -13px;

    &::before {
      top: 24px;
      border-top-width: 6px;
      border-right-width: 13px;
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 33px;
    padding: 0 16px;
    right: -14px;

    &::before {
      top: 33px;
      border-top-width: 8px;
      border-right-width: 14px;
    }
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
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
  ${({ theme, color, sizes }) => css`
    z-index: 1;
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

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

    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!sizes && wrapperModifiers[sizes](theme)}
  `}
`
