export type IngredientesType = {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
  pontos?: number
}

export type IngredientesResponse = {
  tamanhos: IngredientesType[],
  massas: IngredientesType[],
  bordas: IngredientesType[],
  tiposQueijos: IngredientesType[],
  recheios: IngredientesType[],
}
