import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 column topics', () => {
    const { container } = render(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /nos acompanhe/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /localização/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
