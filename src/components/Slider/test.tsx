import 'match-media-mock'

import { render, screen } from '../../utils/tests/helpers'
import { Settings } from 'react-slick'

import Slider from '.'

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    const settings: Settings = {
      dots: true,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true
    }

    const { container } = render(
      <Slider settings={settings}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})
