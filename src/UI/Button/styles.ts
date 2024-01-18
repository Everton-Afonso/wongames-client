'use client'

import styled, { css, DefaultTheme } from 'styled-components'

type WrapperButtonProps = {
  $hasIcon?: boolean
  $size?: 'small' | 'medium' | 'large'
  $fullWidth?: boolean
}

const wrapperModifiersButton = {
  small: (theme: DefaultTheme) => css`
    height: 30px;
    font-size: ${theme.font.sizes.xsmall};
    padding: 6px 30px;
  `,

  medium: (theme: DefaultTheme) => css`
    height: 40px;
    font-size: ${theme.font.sizes.small};
    padding: 10px 32px;
  `,

  large: (theme: DefaultTheme) => css`
    height: 50px;
    font-size: ${theme.font.sizes.medium};
    padding: 14px 52px;
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: () => css`
    svg {
      width: 18px;

      & + span {
        margin-left: 6px;
      }
    }
  `
}

export const WrapperButton = styled.button<WrapperButtonProps>`
  ${({ theme, $size, $fullWidth, $hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!$size && wrapperModifiersButton[$size](theme)}
    ${!!$fullWidth && wrapperModifiersButton.fullWidth()}
    ${!!$hasIcon && wrapperModifiersButton.withIcon()}
  `}
`
