import { IngredientesResponse } from '../../types/ingredientes'

export type StepsProps = {
  steps: Array<string>,
  currentStep: number
  data: IngredientesResponse | [],
  next: () => void
  prev: () => void
}
