import { render, screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the button size by default', () => {
    const { container } = render(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      padding: '4px 8px'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '30px',
      padding: '6px 30px'
    })
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyleRule(
      'font-size',
      'var(--xsmall)'
    )
  })

  it('should render the medium size', () => {
    render(<Button size="medium">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '40px',
      padding: '10px 32px'
    })
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyleRule(
      'font-size',
      'var(--small)'
    )
  })

  it('should render the large size', () => {
    render(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '50px',
      padding: '14px 52px'
    })
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyleRule(
      'font-size',
      'var(--medium)'
    )
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
