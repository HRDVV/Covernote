import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

type IProps = {}

interface Page1 {
  props: IProps
}

class Page1 extends PureComponent{

  config: Config = {
    navigationBarTitleText: '首页1',
    navigationBarBackgroundColor: '#cccccc',
    navigationBarTextStyle: 'white'
  }

  state = {
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillMount () {
  }

  componentWillUnmount () {}

  componentDidShow () {
    
  }

  componentDidHide () {}

  render () {
    return (
      <View>
      </View>
    )
  }
}

export default Page1
