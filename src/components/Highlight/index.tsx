import Button from '../../UI/Button'

import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: HighlightProps) => {
  return (
    <S.WrapperHighlight>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>

      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.WrapperHighlight>
  )
}

export default Highlight
