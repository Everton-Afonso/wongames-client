import { render } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    render(<Logo />)
  })
})
