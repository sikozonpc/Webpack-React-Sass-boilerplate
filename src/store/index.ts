import { createStore, applyMiddleware, Middleware } from 'redux'
import createSagaMiddleware, { Saga, SagaMiddleware } from 'redux-saga'
import { createLogger } from 'redux-logger'

import combinedReducers from './combineReducers'
import combinedSagas from './combineSagas'

const __PROD__ = process.env.NODE_ENV === 'prodcution'

const sagaMiddleware = createSagaMiddleware()

/** Middlewares */
const middlewares = [sagaMiddleware]

// redux devtools
// @ts-ignore
const composeEnhancer = !__PROD__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const enhancer = composeEnhancer(applyMiddleware(...middlewares))

/** Add a logger if it's not in production */
if (!__PROD__) {
  middlewares.push(createLogger({ diff: true }) as SagaMiddleware<Middleware>)
}

/** Redux Store */
const store = createStore(combinedReducers, enhancer)

/** Run all the sagas */
combinedSagas.forEach((saga: Saga) => sagaMiddleware.run(saga))

export default store

