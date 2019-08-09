import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

type IProps = {}

interface Index {
  props: IProps
}

class Index extends Component{

  config: Config = {
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: '#cccccc',
    navigationBarTextStyle: 'white'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {}

  componentDidShow () {
  }

  componentDidHide () {}

  render () {
    return (
      <View className="index">

      </View>
    )
  }
}

export default Index
