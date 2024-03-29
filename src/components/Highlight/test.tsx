import { render, screen } from '../../utils/tests/helpers'
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
    render(<Highlight {...props} />)

    expect(
      screen.getByRole('img', { name: `${props.title} background` })
    ).toHaveAttribute(
      'src',
      `/_next/image?url=%2Fimg%2Fred-dead-img.jpg&w=3840&q=75`
    )
  })

  it('should render float image', () => {
    render(<Highlight {...props} floatImage="/img/red-dead-float.png" />)

    expect(
      screen.getByRole('img', {
        name: props.title
      })
    ).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimg%2Fred-dead-float.png&w=3840&q=75'
    )
  })

  it('should render aling right by default', () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )
  })

  it('should render aling right by default', () => {
    const { container } = render(<Highlight {...props} alignment="left" />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )
  })
})
