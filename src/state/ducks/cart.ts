import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  setCart: ['data'],
  resetCart: [],
})

const INITIAL_STATE = {
  cart: [],
}

const setCart = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    cart: [...state.cart, action.data],
  }
}

const resetCart = (state = INITIAL_STATE) => {
  return {
    ...state,
    cart: [],
  }
}

export default createReducer(INITIAL_STATE, {
  [Types.SET_CART]: setCart,
  [Types.RESET_CART]: resetCart,
})
