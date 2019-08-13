import Taro, { Chain } from '@tarojs/taro'

const Interceptor = {
  loading (chain: Chain) {
    const requestParams = chain.requestParams
    Taro.showLoading({
      title: '加载中',
      mask: true
    })
    return chain.proceed(requestParams)
      .then(res => {
        Taro.hideLoading()
        return res
      })
  },
  name () {

  }
}

export default Interceptor
