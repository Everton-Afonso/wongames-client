import theme from '../../styles/theme'
import { render } from '../../utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(<Container />)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
