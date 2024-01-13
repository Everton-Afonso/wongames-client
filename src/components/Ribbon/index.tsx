import * as S from './styles'

export type RibbonProps = {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  sizes?: 'small' | 'normal' | 'large'
}

const Ribbon = ({
  children,
  color = 'primary',
  sizes = 'normal'
}: RibbonProps) => {
  return (
    <S.WrapperRibbon color={color} sizes={sizes}>
      {children}
    </S.WrapperRibbon>
  )
}

export default Ribbon
