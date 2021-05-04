import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './ducks'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const enhancer = composeEnhancers(
  applyMiddleware(),
)

const store = createStore(rootReducer, enhancer)
export default store
