import App, { Container } from 'next/app'
import { Provider as StyletronProvider, styled } from 'styletron-react'
import { styletron } from '../styletron'
import { ThemeProvider } from 'baseui'
import Jasmine from '../themes'

import Column from '../components/Grid/Column'
import Sidebar from '../components/docs/Sidebar'

const Content = styled('main', {
  padding: '0 1rem',

  ':before': {
    clear: 'both',
    content: '""',
    display: 'table'
  },

  ':after': {
    clear: 'both',
    content: '""',
    display: 'table'
  },

  '@media screen and (min-width: 60em)': {
    padding: 0,
    marginLeft: '380px',
    marginRight: '120px'
  }
})

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <Container>
        <StyletronProvider value={styletron}>
          <ThemeProvider theme={Jasmine}>
            <Sidebar path={router.pathname} />
            <Content>
              <Column size={10}>
                <Component {...pageProps} />
              </Column>
            </Content>
          </ThemeProvider>
        </StyletronProvider>
      </Container>
    )
  }
}
