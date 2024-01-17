'use client'

import styled, { css } from 'styled-components'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'alignment'>

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImageWrapper} {
      justify-self: end;
    }
  `
}

export const WrapperHighlight = styled.section<WrapperProps>`
  ${({ alignment }) => css`
    display: grid;
    position: relative;
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    & > img {
      object-fit: cover;
    }

    ${wrapperModifiers[alignment!]()}

    @media screen and (min-width: 768px) {
      height: 320px;
    }
  `}
`

export const FloatImageWrapper = styled.div`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};

    img {
      position: relative !important;
      object-fit: contain;
      max-height: 320px;
      max-width: 266px;
      min-height: 157px;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    h2 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
      font-style: normal;
      line-height: normal;
    }

    h3 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.light};
      font-style: normal;
      line-height: normal;
      margin-bottom: 12px;
    }

    @media screen and (min-width: 768px) {
      align-self: end;
      padding: ${theme.spacings.large};

      h2 {
        font-size: ${theme.font.sizes.xxlarge};
      }

      h3 {
        font-size: ${theme.font.sizes.large};
        margin-bottom: 24px;
      }
    }
  `}
`
