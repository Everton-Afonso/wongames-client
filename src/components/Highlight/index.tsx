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
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink
}: HighlightProps) => {
  return (
    <S.WrapperHighlight $backgroundImage={backgroundImage}>
      {!!floatImage && <Image src={floatImage} alt={title} fill={true} />}

      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>

        <Button as="a" href={buttonLink} size="medium">
          {buttonLabel}
        </Button>
      </div>
    </S.WrapperHighlight>
  )
}

export default Highlight
