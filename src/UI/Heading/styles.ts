'use client'

import styled, { css } from 'styled-components'
import { HeadingProps, LineColor } from '.'

const wrapperModifiers = {
  white: () => css`
    color: var(--white);
  `,

  black: () => css`
    color: var(--black);
  `,

  lineLeft: (lineColor: LineColor) => css`
    padding-left: var(--xxsmall-spacings);
    border-left: 4px solid var(--${lineColor});
  `,

  lineBottom: (lineColor: LineColor) => css`
    position: relative;
    margin-bottom: var(--small-spacings);

    &::after {
      position: absolute;
      left: 0;
      bottom: -5px;
      content: '';
      display: block;
      width: 50px;
      border-bottom: 4px solid var(--${lineColor});
    }
  `,

  xsmall: () => css`
    font-size: var(--xsmall);

    &::after {
      width: 20px;
    }
  `,

  small: () => css`
    font-size: var(--small);

    &::after {
      width: 25px;
    }
  `,

  medium: () => css`
    font-size: var(--medium);

    &::after {
      width: 30px;
    }
  `,

  large: () => css`
    font-size: var(--large);
  `,

  xlarge: () => css`
    font-size: var(--xlarge);
  `,

  xxlarge: () => css`
    font-size: var(--xxlarge);
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ color, lineLeft, lineBottom, lineColor, size }) => css`
    font-style: normal;
    font-weight: var(--bold);
    line-height: normal;
    ${!!color && wrapperModifiers[color]}
    ${lineLeft && lineColor && wrapperModifiers.lineLeft(lineColor)}
    ${lineBottom && lineColor && wrapperModifiers.lineBottom(lineColor)}
    ${!!size && wrapperModifiers[size]}
  `}
`
