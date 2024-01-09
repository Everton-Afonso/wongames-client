'use client'

import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperButtonProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

const wrapperModifiersButton = {
  small: () => css`
    height: 30px;
    font-size: var(--xsmall);
    padding: 6px 30px;
  `,

  medium: () => css`
    height: 40px;
    font-size: var(--small);
    padding: 10px 32px;
  `,

  large: () => css`
    height: 50px;
    font-size: var(--medium);
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
  ${({ size, fullWidth, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: var(--white);
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && wrapperModifiersButton[size]}
    ${!!fullWidth && wrapperModifiersButton.fullWidth()}
    ${!!hasIcon && wrapperModifiersButton.withIcon()}
  `}
`
