'use client'

import styled, { css } from 'styled-components'

export const WrapperHighlight = styled.section<{ $backgroundImage: string }>`
  ${({ $backgroundImage }) => css`
    display: grid;
    position: relative;
    height: 230px;
    background: url(${$backgroundImage}) no-repeat;
    background-position: center center;
    background-size: cover;
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.6);
    }

    img {
      grid-area: floatimage;
      position: relative !important;
      width: initial !important;
      z-index: var(--base);
      height: 100%;
      max-height: 157px;
      align-self: end;
    }

    div {
      grid-area: content;
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

      img {
        max-height: 310px;
      }

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
