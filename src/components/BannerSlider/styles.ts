'use client'

import styled, { css } from 'styled-components'
import * as BannerStyles from '../Banner/styles'

export const WrapperBannerSlider = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

      li {
        background: ${theme.colors.white};
        width: 8.82px;
        height: 8.82px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        opacity: 0;
        width: 8.82px;
        height: 8.82px;
        cursor: pointer;
      }
    }

    .slick-slide {
      visibility: hidden;

      &.slick-active.slick-current {
        visibility: visible;
      }
    }

    @media screen and (min-width: 1170px) {
      ${BannerStyles.WrapperBanner} {
        max-width: 1040px;
        margin: 0 auto;
      }

      .slick-dots {
        position: absolute;
        right: 0;
        flex-direction: column;
        height: 100%;
        top: 0;
        margin: 0;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    }
  `}
`
