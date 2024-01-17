'use client'

import styled, { css } from 'styled-components'

import * as HeadingStyles from '../../UI/Heading/styles'

export const WrapperFooter = styled.footer`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      text-transform: uppercase;
    }

    section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.grid.gutter};
      margin-top: ${theme.spacings.medium};

      div {
        a,
        span {
          display: block;
          color: ${theme.colors.gray};
          text-decoration: none;
          margin-bottom: ${theme.spacings.xxsmall};
          font-size: ${theme.font.sizes.small};
        }
      }

      @media screen and (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
