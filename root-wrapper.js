import React from 'react'
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components'
import Layout from './src/components/layout'
import { GlobalStyle, theme } from './src/theme/global-style'


export const wrapPageElement = ({ element }) => (
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        {element}
      </Layout>
    </ThemeProvider>
  </RecoilRoot>
)
