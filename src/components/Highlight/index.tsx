import Image from 'next/image'
import Button from '../../UI/Button'

import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  buttonLabel: string
  buttonLink: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  alignment = 'right'
}: HighlightProps) => {
  return (
    <S.WrapperHighlight alignment={alignment} data-cy="highlight">
      <Image src={backgroundImage} alt={`${title} background`} fill={true} />

      {!!floatImage && (
        <S.FloatImageWrapper>
          <Image src={floatImage} alt={title} fill={true} />
        </S.FloatImageWrapper>
      )}

      <S.Content>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>

        <Button as="a" href={buttonLink} size="medium">
          {buttonLabel}
        </Button>
      </S.Content>
    </S.WrapperHighlight>
  )
}

export default Highlight
