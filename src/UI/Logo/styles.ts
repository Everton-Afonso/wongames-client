'use client'

import styled, { css } from 'styled-components'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  $hideOnMobile?: boolean
}

const wrapperModifiers = {
  normal: () => css`
    width: 110px;
    height: 33px;
  `,

  large: () => css`
    width: 200px;
    height: 59.836px;
  `,

  white: () => css`
    color: var(--white);
  `,

  black: () => css`
    color: var(--black);
  `,

  hideOnMobile: () => css`
    @media screen and (max-width: 768px) {
      width: 58px;
      height: 45px;

      svg {
        height: 45px;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    }
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ color, size, $hideOnMobile }) => css`
    ${!!color && wrapperModifiers[color]}
    ${!!size && wrapperModifiers[size]}
    ${!!$hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
