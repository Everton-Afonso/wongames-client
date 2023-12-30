import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import MediaMatch from '.'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  // hook tests
  beforeEach(() => {
    render(
      <>
        <MediaMatch renderingMode="desktop">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>

        <MediaMatch renderingMode="mobile">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })
})
