'use client'

import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

const wrapperModifiers = {
  white: () => css`
    color: var(--white);
  `,

  black: () => css`
    color: var(--black);
  `,

  lineLeft: () => css`
    padding-left: var(--xxsmall-spacings);
    border-left: 7px solid var(--secondary);
  `,

  lineBottom: () => css`
    position: relative;
    margin-bottom: var(--medium-spacings);

    &::after {
      position: absolute;
      left: 0;
      bottom: -5px;
      content: '';
      display: block;
      width: 50px;
      border-bottom: 5px solid var(--primary);
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ color, lineLeft, lineBottom }) => css`
    font-size: var(--xxlarge);
    font-style: normal;
    font-weight: var(--bold);
    line-height: normal;
    ${!!color && wrapperModifiers[color]}
    ${lineLeft && wrapperModifiers.lineLeft}
    ${lineBottom && wrapperModifiers.lineBottom}

    @media screen and (max-width: 768px) {
      font-size: var(--xlarge);
    }
  `}
`
