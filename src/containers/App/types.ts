import { RouteProps } from 'react-router'

export type IRouteConfig = RouteProps & {
  /** route is protected by auth */
  protected?: boolean,
}
