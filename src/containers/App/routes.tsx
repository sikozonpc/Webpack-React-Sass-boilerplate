import * as React from 'react'
import { Route, Switch } from 'react-router'

import Login from 'containers/Login'
import { ErrorScreen } from 'containers/ErrorScreen'
import { IRouteConfig } from './types'

export const routesConfig: IRouteConfig[] = [
  { path: '/', component: Login, exact: true },
  { component: ErrorScreen, protected: true },
]

/**
 * Returns all the routes of the application
 */
export default () => (
  <Switch>
    {routesConfig.map((route, index) =>
      <Route
        key={`route-${index}`}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    )}
  </Switch>
)
