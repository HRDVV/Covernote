import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import api from '@/apis'
import NewsList from '@/components/NewsList'
import { PageOwnProps, PageState, ListItem } from './index.d'
import './index.scss'

class Index extends Component<PageOwnProps, PageState> {
  config: Config = {
    navigationBarTitleText: '网易新闻精选',
    navigationBarBackgroundColor: '#E10001',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50,
    backgroundTextStyle: 'dark'
  }

  constructor(props: PageOwnProps) {
    super(props)
    this.state = {
      tabList: [],
      current: 0,
      channel: '头条',
      num: 10,
      start: 0,
      newsList: [],
      status: 2
    }
    this.changeTabs = this.changeTabs.bind(this)
  }

  async componentWillMount () {
    await this.getNewsChannel()
    this.getNewsByChannel()
  }

  componentWillUnmount () {}

  onPullDownRefresh () {
    this.setState(() => {
      return {
        start: 0
      }
    }, async () => {
      await this.getNewsByChannel()
      Taro.stopPullDownRefresh()
    })
  }

  onReachBottom () {
    this.setState((preState: PageState) => {
      return {
        start: preState.start + preState.num,
        status: 1
      }
    }, () => {
      this.getNewsByChannel('a')
    })
  }

  getNewsChannel () {
    api.getNewsChannel().then((res: any) => {
      if (res.code === '10000' && res.result.msg === 'ok') {
        let tabList = res.result.result.map((item: string) => {
          return { title: item }
        })
        this.setState(() => ({
          tabList: tabList
        }))
      } else {
        Taro.showToast({ title: res.msg, icon: 'none' })
      }
    }, (err: any) => {
      console.error(err)
    })
  }

  getNewsByChannel (type?: string) {
    const { channel, num, start } = this.state
    api.getNewsByChannel({
      channel,
      num,
      start
    }).then((res: any) => {
      if (res.code === '10000' && res.result.msg === 'ok') {
        this.setState((preState: PageState) => {
          let newsList = preState.newsList
          return {
            status: res.result.result.list.length === 0 ? 0 : 2,
            newsList: type !== 'a' ? res.result.result.list : [...newsList, ...res.result.result.list]
          }
        })
      } else {
        Taro.showToast({ title: res.msg, icon: 'none' })
      }
    }, (err: any) => {
      console.error(err)
    })
  }

  changeTabs (index: number) {
    this.setState((preState: PageState) => ({
      current: index,
      channel: preState.tabList[index].title,
      start: 0,
      newsList: []
    }), () => {
      this.getNewsByChannel()
    })
  }
  
  renderTabs (tabList: Array<{title: string}>, current: number, newsList: Array<ListItem>) {
    return tabList.map((item: {title: string}, index: number) => {
      return (
        <AtTabsPane
          key={item.title}
          current={current} 
          index={index}
        >
          <View className="list-wraper">
            { current === index && <NewsList newsList={newsList} /> }
          </View>
        </AtTabsPane>
      )
    })
  }

  render () {
    const { tabList, current, newsList, status } = this.state
    return (
      <View className="pg-news-home">
        <AtTabs
          scroll
          swipeable={false}
          animated={false}
          current={current} 
          tabList={tabList}
          className="tabs"
          onClick={this.changeTabs}
        >
          { this.renderTabs(tabList, current, newsList) }
        </AtTabs>
        <Text className="load-status">{status === 0 ? '没有更多了' : (status === 1 ? '加载中' : '') }</Text>
      </View>
    )
  }
}

export default Index
