import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
class Http {
  constructor() {
    // 设置时间
    axios.defaults.baseURL = 'xxxx'

    // 设置全局的拦截器
    axios.interceptors.request.use(
      (reqConfig: InternalAxiosRequestConfig) => {
        // 设置请求头

        return reqConfig
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    axios.interceptors.response.use(
      (res: AxiosResponse) => {
        let data = res.data
        return data
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }

  get<T>(
    url: string,
    params?: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
          ...config,
        })
        .then((res: AxiosResponse) => {
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  post<T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return new Promise((reslove, reject) => {
      axios
        .post(url, data, config)
        .then((res: AxiosResponse) => {
          reslove(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }
}

export default new Http()
