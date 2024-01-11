import Image from 'next/image'

import Button from '../../UI/Button'

import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: BannerProps) => {
  return (
    <S.WrapperBanner>
      <Image src={img} alt={title} layout="fill" />

      <section>
        <h2>{title}</h2>
        <h3 dangerouslySetInnerHTML={{ __html: subtitle }} />

        <Button as="a" href={buttonLink} size="medium">
          {buttonLabel}
        </Button>
      </section>
    </S.WrapperBanner>
  )
}

export default Banner
