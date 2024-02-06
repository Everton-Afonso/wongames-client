import 'match-media-mock'

import { render, screen } from '../../utils/tests/helpers'

import HomePage from '.'

describe('<HomePage />', () => {
  it('should render menu and footer', () => {
    render(<HomePage />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', { name: /new releases/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /coming soon/i })
    ).toBeInTheDocument()
  })
})
