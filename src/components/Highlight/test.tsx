import { render, screen } from '@testing-library/react'

import Highlight from '.'

const props = {
  title: 'Read Dead está de de volta!',
  subtitle: 'Venha conhecer as novas aventuras de John Marston',
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/'
}

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    render(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Read Dead está de de volta!/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Venha conhecer as novas aventuras de John Marston/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /Buy now/i
      })
    ).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })
})
