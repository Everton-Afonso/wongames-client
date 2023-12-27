import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'color',
      'var(--white)'
    )
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'color',
      'var(--black)'
    )
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '110px'
    })
  })

  it('should render a bigger logo', () => {
    render(<Logo size="large" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '200px'
    })
  })
})
