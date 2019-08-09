import Taro, { PureComponent } from '@tarojs/taro'
import { View } from '@tarojs/components'

type Prop = {}

interface Demo {
  props: Prop
}

class Demo extends PureComponent {

  static options = {
    addGlobalClass: true
  }

  render () {
    return (
      <View>
      </View>
    )
  }
}

export default Demo