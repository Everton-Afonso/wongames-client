'use client'

import styled, { css } from 'styled-components'

import * as HeadingStyles from '../../UI/Heading/styles'
import * as GameCardSliderStyles from '../../components/GameCardSlider/styles'
import * as HighlightStyles from '../../components/Highlight/styles'

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.WrapperHighlight},
    ${GameCardSliderStyles.WrapperGameCardSlider} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.WrapperHighlight} {
      @media screen and (max-width: 768px) {
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      }
    }

    ${GameCardSliderStyles.WrapperGameCardSlider} {
      @media screen and (max-width: 768px) {
        margin-right: calc(-${theme.grid.gutter} / 2);
      }
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    @media screen and (min-width: 1170px) {
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base};
    }
  `}
`

export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    @media screen and (min-width: 1170px) {
      margin-top: -13rem;
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    }
  `}
`

export const SectionMostPopular = styled(Sections)``

export const SectionUpcoming = styled(Sections)`
  ${({ theme }) => css`
    ${HighlightStyles.WrapperHighlight} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`

export const SectionFreeGames = styled(Sections)``
