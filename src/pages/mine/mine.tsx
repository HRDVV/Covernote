import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, Label } from '@tarojs/components'

import './mine.scss'

class Mine extends Component {

  config: Config = {
    navigationBarTitleText: '我的'
  }

  state = {
    userInfo: {
      avatarUrl: '',
      city: '',
      country: '',
      gender: 1,
      language: '',
      nickName: '',
      province: ''
    }
  }

  async componentWillMount () {
    let { userInfo } = await Taro.getUserInfo()
    this.setState(() => {
      return {
        userInfo
      }
    })
  }
  
  render () {
    const { userInfo } = this.state
    return (
      <View className="pg-mine">
        <View className="mine-header">
          <View className="mine-logo">
            <Image src={userInfo.avatarUrl} className="logo" />
            <Text className="name">{userInfo.nickName}</Text>
          </View>
        </View>
        <View className="mine-detail">
          <Label className="label">性别</Label>
          <Text className="value">{userInfo.gender === 1 ? '男' : '女'}</Text>
        </View>
        <View className="mine-detail">
          <Label className="label">语言</Label>
          <Text className="value">{userInfo.language === 'zh_CN' ? '汉语' : '其他'}</Text>
        </View>
        <View className="mine-detail">
          <Label className="label">国家</Label>
          <Text className="value">{userInfo.country}</Text>
        </View>
        <View className="mine-detail">
          <Label className="label">省份</Label>
          <Text className="value">{userInfo.province}</Text>
        </View>
        <View className="mine-detail">
          <Label className="label">市辖区</Label>
          <Text className="value">{userInfo.city}</Text>
        </View>
      </View>
    )
  }
}

export default Mine
