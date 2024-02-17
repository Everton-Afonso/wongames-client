import { render } from '../../utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(<Container />)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      'calc(1600px - 200px)'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
