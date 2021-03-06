import * as React from 'react'
import routes from './routes'

import { Layout } from './styles'


/**
 * Application start point
 */
const App: React.FC = () => {
  return (
    <Layout>
      {routes()}
    </Layout>
  )
}

export default App
