import App, { Container } from 'next/app'
import { Provider as StyletronProvider, styled } from 'styletron-react'
import { styletron } from '../styletron'

import Column from '../components/Grid/Column'
import Sidebar from '../components/docs/Sidebar'

const Content = styled('main', {

  padding: '0 1rem',

  ':before, :after': {
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
  render () {
    const { Component, pageProps, router } = this.props

    return (
      <Container>
        <StyletronProvider value={styletron}>
          <Sidebar path={router.pathname} />
          <Content>
            <Column size={10}>
              <Component {...pageProps} />
            </Column>
          </Content>
        </StyletronProvider>
      </Container>
    )
  }
}
