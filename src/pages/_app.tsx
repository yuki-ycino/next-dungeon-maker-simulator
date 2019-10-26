import React from "react"
import { Provider } from "react-redux"
import App, { AppProps } from "next/app"
import withRedux from "next-redux-wrapper"
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"

import { setupStore, Store } from "../store"
import "../i18n"

type Props = {
  Component: React.Component
  pageProps: object
  store: Store
} & AppProps

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    )
  }
}

export default withRedux(setupStore)(MyApp)
