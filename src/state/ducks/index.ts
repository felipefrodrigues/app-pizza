import { combineReducers } from 'redux'
import steps from './steps'
import points from './points'
import cart from './cart'

export const rootReducer = combineReducers({
  stepsState: steps,
  pointsState: points,
  cartState: cart,
})

export type RootState = ReturnType<typeof rootReducer>;
