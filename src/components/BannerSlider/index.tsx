import Slider, { SliderSettings } from '../../UI/Slider'
import Banner, { BannerProps } from '../Banner'

import * as S from './styles'

export type BannerSliderProps = {
  items: readonly BannerProps[]
}

const BannerSlider = ({ items }: BannerSliderProps) => {
  const settings: SliderSettings = {
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  }

  return (
    <S.WrapperBannerSlider>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <Banner key={index} {...item} />
        ))}
      </Slider>
    </S.WrapperBannerSlider>
  )
}

export default BannerSlider
