import Taro from '@tarojs/taro'

type HeaderConfig = {
  'content-type'?: string
  Authorization?: string
  cookie?: string
  [props: string]: any
}

export interface RequestExtConfig {
  isLoading?: boolean,
  isAuth?: boolean
}

export interface RequestConfig extends Taro.request.Param, RequestExtConfig {
  header?: HeaderConfig
}
