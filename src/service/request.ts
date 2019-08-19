/**
 * @author hanruida
 * @email hrd.candy.dev@gmail.com
 * @create date 2019-08-18 15:16:40
 * @modify date 2019-08-18 15:16:40
 * @desc 请求类封装
 */

import Taro from '@tarojs/taro'
import { SERVER_URL } from '@/config'
import { RequestConfig } from './request.d'
import { Interceptor } from './interceptor'

function ajax(options: RequestConfig): Promise<any> {
  if (!options.url || typeof options.url !== 'string') {
    throw new Error('url必传且只能为string类型')
  }
  let method = options.method
  if (options.method && typeof method !== 'string') {
    throw new TypeError('method必须是string类型')
  }
  const defaultOptions = {
    method: method ? method.toUpperCase() : 'GET',
    isAuth: false,
    isLoading: false
  }
  const finalOptions = Object.assign({}, defaultOptions, options)
  finalOptions.url =  `${ SERVER_URL }${ options.url }`
  if (finalOptions.isLoading) {
    Taro.addInterceptor(Interceptor.loading)
  }
  if (finalOptions.isAuth) {
    // @todo 登录拦截
    Taro.addInterceptor(Interceptor.checkIsLogin)
  }
  return Taro.request(finalOptions)
}

export default ajax
