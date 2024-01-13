import Image from 'next/image'

import Button from '../../UI/Button'
import Ribbon from '../Ribbon'

import * as S from './styles'

type RibbonProps = {
  ribbon?: React.ReactNode
  riboonSize?: 'small' | 'normal' | 'large'
  ribbonColor?: 'primary' | 'secondary'
}

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
} & RibbonProps

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  riboonSize = 'normal',
  ribbonColor = 'primary'
}: BannerProps) => {
  return (
    <S.WrapperBanner>
      {!!ribbon && (
        <Ribbon color={ribbonColor} sizes={riboonSize}>
          {ribbon}
        </Ribbon>
      )}

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
