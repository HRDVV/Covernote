import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Button } from '@tarojs/components'
import Index from './pages/index'
import './app.scss'

// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config: Config = {
    pages: [
      'pages/index/index',
    ],
    window: { 
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    subPackages: [
      {
        root: 'packages/package1',
        pages: [
          'pages/demo/demo'
        ]
      }
    ]
  }
  
  componentDidMount () {
    let name = 'hrd', key = 2 + 2
    let arr = [23, 3]
    arr.forEach(element => {
      console.log(element)
    })

    console.log(name, key)
  }
  
  componentDidShow () {
  }
   
  componentDidHide () {}
  
  componentDidCatchError () {}

  handleClick = () => {}
  
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Button onClick={this.handleClick}>
        <Index />
      </Button>
    )
  }
}
  
Taro.render(<App />, document.getElementById('app'))
