import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'

// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/mine/mine'
    ],
    window: { 
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f0f0f0',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      custom: false,
      selectedColor: '#07c160',
      position: 'bottom',
      list: [
        { 
          iconPath: 'assets/images/list.png',
          selectedIconPath: 'assets/images/list_selected.png',
          pagePath: 'pages/index/index', 
          text: '待办事项'
        },
        { 
          iconPath: 'assets/images/user.png',
          selectedIconPath: 'assets/images/user_selected.png',
          pagePath: 'pages/mine/mine', 
          text: '我的'
        }
      ]
    },
    subPackages: [],
  }
  
  componentDidMount () {
  }
  
  componentDidShow () {}
   
  componentDidHide () {}
  
  componentDidCatchError () {}

  handleClick = () => {}
  
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index></Index>
    )
  }
}
  
Taro.render(<App />, document.getElementById('app'))
