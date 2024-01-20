import { render, screen } from '../../utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text conrrectly', () => {
    const { container } = render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the primary color', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with the secondary color', () => {
    render(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with the small size', () => {
    render(<Ribbon sizes="small">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '24px',
      fontSize: '0.75rem'
    })
  })

  it('should render with the normal size as default', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '33px',
      fontSize: '0.875rem'
    })
  })

  it('should render with the large size', () => {
    render(<Ribbon sizes="large">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '40px',
      fontSize: '1.125rem'
    })
  })
})
