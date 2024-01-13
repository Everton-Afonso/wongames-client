'use client'

import styled, { css } from 'styled-components'
import { HighlightProps } from '.'

type WrapperHighlightProps = Pick<HighlightProps, 'backgroundImage'>

export const WrapperHighlight = styled.section<WrapperHighlightProps>`
  ${({ backgroundImage }) => css`
    position: relative;
    height: 230px;
    display: grid;
    background: url(${backgroundImage}) no-repeat;
    background-position: center center;
    background-size: cover;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.6);
    }

    div {
      z-index: var(--base);
      text-align: right;
      padding: var(--xsmall-spacings);

      h2 {
        color: var(--white);
        font-size: var(--large);
        font-style: normal;
        font-weight: var(--bold);
        line-height: normal;
      }

      h3 {
        color: var(--white);
        font-size: var(--small);
        font-style: normal;
        font-weight: var(--light);
        line-height: normal;
        margin-bottom: 12px;
      }
    }

    @media screen and (min-width: 768px) {
      height: 320px;

      div {
        align-self: end;
        padding: var(--xlarge-spacings);
        h2 {
          font-size: var(--xxlarge);
          margin-bottom: 12px;
        }

        h3 {
          font-size: var(--large);
          margin-bottom: 24px;
        }
      }
    }
  `}
`
