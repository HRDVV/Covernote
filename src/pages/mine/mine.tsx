import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import { PageOwnProps, PageState } from './mine.d'
import './mine.scss'

export default class Mine extends Component<PageOwnProps, PageState> {

  config: Config = {
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
    backgroundColor: '#cccccc'
  }

  constructor (props: PageOwnProps) {
    super(props)
    this.state = {
      userInfo: {}
    }
  }

  componentWillMount () { }

  getUserInfo (e: any) {
    console.log(e.detail.userInfo)
    let userInfo = e.detail.userInfo
    this.setState({
      userInfo
    })
  }

  render () {
    const { userInfo } = this.state
    return (
      <View className='pg-mine'>
        <AtNavBar
          className='nav'
          color='#000'
          leftText='意见反馈'
          border={false}
        />
        <View className='header'>
          <Image className='logo' src={userInfo.avatarUrl} />
          <Button
            type='default'
            className='login'
            onGetUserInfo={this.getUserInfo.bind(this)}
            open-type='getUserInfo'
          >
            { userInfo.avatarUrl ? userInfo.nickName : '未登录，点击登录' }
          </Button>
        </View>
        <View className='line' />
        <View className='buket'>
          <View>我的收藏</View>
          { !userInfo.avatarUrl && <View className='tip'>点击登录，获取专属你的收藏列表吧</View> }
        </View>
      </View>
    )
  }
}
