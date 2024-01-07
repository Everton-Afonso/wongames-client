import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'color',
      'var(--white)'
    )
  })

  it('should render a black heading whem color is passed', () => {
    render(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'color',
      'var(--black)'
    )
  })

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-left',
      '4px solid var(--primary)'
    )
  })

  it('should render a heading with a line at the bottom', () => {
    render(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '4px solid var(--primary)',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a samll size', () => {
    render(<Heading size="medium">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'font-size',
      'var(--medium)'
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '30px',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading with a primary line color', () => {
    render(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyleRule('border-left', '4px solid var(--primary)')
    expect(heading).toHaveStyleRule(
      'border-bottom',
      '4px solid var(--primary)',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading with a secondary line color', () => {
    render(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyleRule('border-left', '4px solid var(--secondary)')
    expect(heading).toHaveStyleRule(
      'border-bottom',
      '4px solid var(--secondary)',
      {
        modifier: '::after'
      }
    )
  })
})
