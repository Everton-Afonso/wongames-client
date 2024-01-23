'use client'

import styled, { css } from 'styled-components'

import { GameCardSliderProps } from '.'

type WrapperProps = Pick<GameCardSliderProps, 'color'>

export const WrapperGameCardSlider = styled.section<WrapperProps>`
  ${({ theme, color }) => css`
    @media screen and (max-width: 768px) {
      overflow-x: hidden;
    }

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    @media screen and (min-width: 1170px) {
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }

      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    }

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors[color!]};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 25px;
      height: 25px;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
