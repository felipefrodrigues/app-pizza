import { IngredientesResponse } from '../types/ingredientes'
import HttpClient from '../helpers/httpInstance'
import env from '../config-env'

class Ingredientes extends HttpClient {
  public constructor() {
    super(`${env.api}`)
  }

  public getIngredientes = (): Promise<IngredientesResponse> => {
    return this.instance.get('/ingredientes')
  }
}

export default Ingredientes
