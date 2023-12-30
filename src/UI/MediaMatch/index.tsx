'use client'

import styled, { css } from 'styled-components'

export type MediaMatchProps = {
  renderingMode: 'desktop' | 'mobile'
}

const mediaMatchModifiers = {
  desktop: () => css`
    @media (min-width: 768px) {
      display: block;
    }
  `,

  mobile: () => css`
    @media (max-width: 768px) {
      display: block;
    }
  `
}

export default styled.div<MediaMatchProps>`
  ${({ renderingMode }) => css`
    display: none;
    ${!!renderingMode && mediaMatchModifiers[renderingMode]}
  `}
`
