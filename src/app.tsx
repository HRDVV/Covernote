import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
// import { Provider } from '@tarojs/redux'

import Index from './pages/index'

// import configStore from './store'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

// const store = configStore()

class App extends Component {

  config: Config = {
    pages: [
      'pages/index/index',
      'pages/mine/mine'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff'
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#E10001',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          selectedIconPath: 'assets/images/home_selected.png',
          iconPath: 'assets/images/home.png'
        },
        // {
        //   pagePath: 'pages/index/index',
        //   text: '视频'
        // },
        {
          pagePath: 'pages/mine/mine',
          text: '我的',
          selectedIconPath: 'assets/images/user_selected.png',
          iconPath: 'assets/images/user.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return (
      // <Provider store={store}>
      <Index />
      // </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
