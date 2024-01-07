import * as S from './styles'

export type LineColor = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColor
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'xxlarge'
}: HeadingProps) => {
  return (
    <S.Wrapper
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      lineColor={lineColor}
      size={size}
    >
      {children}
    </S.Wrapper>
  )
}

export default Heading
