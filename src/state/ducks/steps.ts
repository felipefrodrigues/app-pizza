import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  setStep: ['data'],
  setCurrentStep: ['data'],
  resetStep: [],
  cleanSteps: [],
})

const INITIAL_STATE = {
  steps: {},
  currentStep: 0,
}

const setStep = (state = INITIAL_STATE, action) => {
  const obj = Object.assign({}, state.steps, action.data)

  return {
    ...state,
    steps: obj,
  }
}

const setCurrentStep = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    currentStep: action.data,
  }
}

const resetStep = () => {
  return INITIAL_STATE
}

const cleanSteps = (state = INITIAL_STATE) => {
  return {
    ...state,
    steps: {},
  }
}

export default createReducer(INITIAL_STATE, {
  [Types.SET_STEP]: setStep,
  [Types.SET_CURRENT_STEP]: setCurrentStep,
  [Types.RESET_STEP]: resetStep,
  [Types.CLEAN_STEPS]: cleanSteps,
})
