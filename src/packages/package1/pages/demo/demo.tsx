import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'


type IProps = {}

interface Demo {
  props: IProps
}

class Demo extends Component {

  config: Config = {
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: '#fff',
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
        12345
      </View>
    )
  }
}

export default Demo
