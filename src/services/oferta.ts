import { IngredientesType } from '../types/ingredientes'
import HttpClient from '../helpers/httpInstance'
import env from '../config-env'

class Oferta extends HttpClient {
  public constructor() {
    super(`${env.api}`)
  }

  public getOferta = (): Promise<IngredientesType> => {
    return this.instance.get('/oferta')
  }
}

export default Oferta
