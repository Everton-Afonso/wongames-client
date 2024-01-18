import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size,
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.WrapperButton
      $size={size}
      $fullWidth={fullWidth}
      $hasIcon={!!icon}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.WrapperButton>
  )
}

export default Button
