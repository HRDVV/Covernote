import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import './index.scss'

type IProps = {}

interface Index {
  props: IProps
}

class Index extends Component {

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

  handle = () => {
    Taro.navigateTo({
      url: '/packages/package1/pages/demo/demo'
    })
  }

  render () {
    return (
      <View className="index">
        <Button onClick={this.handle}>走</Button>
      </View>
    )
  }
}

export default Index
