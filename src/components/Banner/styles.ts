'use client'

import styled from 'styled-components'
import * as RibbonStyles from '../Ribbon/styles'

export const WrapperBanner = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    ${RibbonStyles.WrapperRibbon} {
      right: 0;

      &::before {
        display: none;
      }
    }
  }

  @media screen and (min-width: 768px) {
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  }

  img {
    object-fit: cover;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    min-height: 230px;
    background-color: var(--lightGray);
  }

  section {
    width: 100%;
    background-color: var(--darkGray);
    padding: var(--small-spacings);

    h2 {
      font-size: var(--large);
      font-weight: var(--bold);
      color: var(--white);
    }

    h3 {
      color: var(--white);
      font-size: var(--small);
      font-weight: var(--normal);
      margin: 5px 0 var(--xsmall-spacings);

      strong {
        color: var(--primary);
        font-weight: var(--bold);
      }
    }

    @media screen and (min-width: 768px) {
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 0 0 var(--radius) var(--radius);
      padding: var(--large-spacings);
      position: absolute;
      bottom: 0;
      left: 0;

      h2 {
        font-size: var(--xxlarge);
      }

      h3 {
        font-size: var(--large);
      }
    }
  }
`
