/**
 * Import all REDUCERS here and export them for the store object
 */

import { combineReducers } from 'redux'

/** Reducer imports */
const testReducer = (state = { data: '123' }, action: any) => {
  if (action.type === '@@testReducer/TEST_ACTION') {
    return state
  }
  return state
}

export default combineReducers({
  testReducer,
})
