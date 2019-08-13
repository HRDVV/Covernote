import Taro from '@tarojs/taro'
import { DOMAIN } from '../../config'
import Interceptor from './Interceptor'

// type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
type Header = {
  'content-type'?: string
  [propName: string]: any
}
type DataType = 'text' | 'json'
type ResponseType = 'text' | 'arraybuffer'

interface RequestConfig {
  data?: object
  dataType?: DataType
  responseType?: ResponseType
  header?: Header
}

class Request {
  
  static get(url: string, params: RequestConfig = {}) {
    Taro.addInterceptor(Interceptor.loading)
    return Taro.request(
      Object.assign(
        { 
          url: `${ DOMAIN }${ url }`,
          dataType: 'json'
        }, 
        { method: 'GET' },
        params
      )
    )
  }

  static post(url: string, params: Request = {}) {
    return Taro.request(
      Object.assign(
        { 
          url: `${ DOMAIN }${ url }`,
          dataType: 'json'
        }, 
        { method: 'POST' },
        params
      )
    )
  }
}

export default Request
