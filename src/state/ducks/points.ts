import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  setPoints: ['pontos'],
  initConfig: ['pontos'],
})

const INITIAL_STATE = {
  pontos: 0,
  id: 0,
}

const setPoints = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    pontos: action.pontos,
  }
}
const initConfig = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    pontos: action.pontos.pontos,
    id: action.pontos.id,
  }
}

export default createReducer(INITIAL_STATE, {
  [Types.SET_POINTS]: setPoints,
  [Types.INIT_CONFIG]: initConfig,
})
