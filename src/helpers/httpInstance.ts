import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { FuncaoGenerica, ObjetoGenerico } from '../types/common'

abstract class HttpClient {
  protected readonly instance: AxiosInstance
  protected ErrorFC: FuncaoGenerica | undefined
  protected BeforeRequestFC: FuncaoGenerica | undefined

  public constructor(
    baseURL: string,
    headers?: ObjetoGenerico,
    beforeRequest?: FuncaoGenerica,
    handleError401?: FuncaoGenerica,
  ) {
    this.instance = axios.create({
      headers,
      baseURL,
    })
    this.ErrorFC = handleError401
    this.BeforeRequestFC = beforeRequest

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.request.use(this._handleRequest)
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    )
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    if (this.BeforeRequestFC) {
      this.BeforeRequestFC()
    }
    return config
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: AxiosError): Promise<AxiosError> => {
    if (error.response && error.response.status === 401 && this.ErrorFC) {
      this.ErrorFC()
    }
    return Promise.reject(error)
  };
}

export default HttpClient
