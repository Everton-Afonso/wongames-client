'use client'

import styled, { css, DefaultTheme } from 'styled-components'

export const WrapperGameCard = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`

export const ImageBox = styled.div`
  height: 140px;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 800px 140px;
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -400px 0;
    }

    100% {
      background-position: 400px 0;
    }
  }

  img {
    position: relative !important;
  }
`

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    max-width: calc(100% - 25px);

    h3 {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.black};
    }

    span {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.gray};
    }
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 0;
    top: -5px;
    cursor: pointer;

    svg {
      width: 25px;
    }
  `}
`

type PriceProps = {
  $isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xxsmall};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
  `
}

export const BuyBox = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const Price = styled.div<PriceProps>`
  ${({ theme, $isPromotional }) => css`
    display: inline-flex;
    font-weight: ${theme.font.bold};
    height: 26px;
    align-items: center;

    ${!$isPromotional && priceModifiers.default(theme)}
    ${$isPromotional && priceModifiers.promotional(theme)}
  `}
`
