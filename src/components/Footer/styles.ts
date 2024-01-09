'use client'

import styled from 'styled-components'

import * as HeadingStyles from '../../UI/Heading/styles'

export const WrapperFooter = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gutter);
    margin-top: var(--medium-spacings);

    div {
      a,
      span {
        display: block;
        color: var(--gray);
        text-decoration: none;
        margin-bottom: var(--xxsmall-spacings);
        font-size: var(--small);
      }
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export const Copyright = styled.div`
  color: var(--gray);
  font-size: var(--xsmall);
  margin-top: var(--large-spacings);
  margin-bottom: var(--medium-spacings);
  text-align: center;
`
