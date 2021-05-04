import HttpClient from '../helpers/httpInstance'
import env from '../config-env'

type pontosResponse = {
  id: number,
  pontos: number
}

class Pontos extends HttpClient {
  public constructor() {
    super(`${env.api}`)
  }

  public getPontos = (): Promise<Array<pontosResponse>> => {
    return this.instance.get('/pontos')
  }

  public alterarPontos = (id: number, pontos: number): Promise<Array<pontosResponse>> => {
    return this.instance.patch(`/pontos/${id}`, {
      pontos,
    })
  }
}

export default Pontos
