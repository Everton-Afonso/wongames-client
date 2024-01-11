import { render, screen } from '@testing-library/react'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text conrrectly', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render with the primary color', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyleRule(
      'background-color',
      'var(--primary)'
    )
  })

  it('should render with the secondary color', () => {
    render(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyleRule(
      'background-color',
      'var(--secondary)'
    )
  })

  it('should render with the samll size', () => {
    render(<Ribbon sizes="small">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyleRule('height', '24px')

    expect(screen.getByText(/best seller/i)).toHaveStyleRule(
      'font-size',
      'var(--xsmall)'
    )
  })

  it('should render with the normal size as default', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyleRule('height', '33px')

    expect(screen.getByText(/best seller/i)).toHaveStyleRule(
      'font-size',
      'var(--small)'
    )
  })

  it('should render with the large size', () => {
    render(<Ribbon sizes="large">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyleRule('height', '40px')

    expect(screen.getByText(/best seller/i)).toHaveStyleRule(
      'font-size',
      'var(--large)'
    )
  })
})
