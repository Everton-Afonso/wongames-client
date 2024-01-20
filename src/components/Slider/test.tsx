import 'match-media-mock'

import { render } from '@testing-library/react'
import { Settings } from 'react-slick'

import Slider from '.'

describe('<Slider />', () => {
  it('should render the Slider', () => {
    const settings: Settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true
    }

    render(
      <Slider settings={settings}>
        <div>1</div>
      </Slider>
    )
  })
})
