import Taro, { Chain } from '@tarojs/taro'
import { KEY } from '@/config'

export const Interceptor = {
  loading (chain: Chain) {
    Taro.showLoading({
      title: '加载中'
    })
    const requestParams = chain.requestParams
    const { data, method, url } = requestParams
    if (method === 'GET') {
      if (data) {
        requestParams.data._ = Date.now()
      } else {
        requestParams.data = { _: Date.now() }
      }
    }
    requestParams.url = `${ url }?appkey=${ KEY }`
    return chain.proceed(requestParams).then((res: any) => {
      Taro.hideLoading()
      if (res.statusCode >= 200 && res.statusCode < 300) {
        if (requestParams.responseType === 'arraybuffer') {
          return res
        } else {
          return res.data
        }
      }
      return Promise.reject(res)
    })
  },
  checkIsLogin (chain: Chain) {
    const requestParams = chain.requestParams
    return chain.proceed(requestParams)
  }
}
