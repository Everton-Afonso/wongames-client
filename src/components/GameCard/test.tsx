import { render, screen } from '../../utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/red-dead-img.jpg',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.developer)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimg%2Fred-dead-img.jpg&w=3840&q=75'
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    render(<GameCard {...props} />)

    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render price in label-through in price when promotional', () => {
    render(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
