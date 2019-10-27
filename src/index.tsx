import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from 'containers/App'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import Store from 'store'
import { theme as Theme } from 'theme'
import { BrowserRouter } from 'react-router-dom'

import 'styles/index.scss'

const render = (
  <Provider store={Store}>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

ReactDOM.render(render, document.getElementById('root'))
