import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'small' | 'normal' | 'large'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  sizes?: RibbonSizes
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
