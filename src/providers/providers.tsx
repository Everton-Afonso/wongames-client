'use client'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import StyledComponentsRegistry from '@/lib/registry'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  )
}
