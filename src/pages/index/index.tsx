import Taro, { PureComponent, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCheckbox, AtButton, AtInput } from 'taro-ui'

import './index.scss'

class Index extends PureComponent {

  constructor () {
    super(...arguments)
    this.handleChange = this.handleChange.bind(this)
    this.eventTitleChange = this.eventTitleChange.bind(this)
    this.eventDescChange = this.eventDescChange.bind(this)
  }

  config: Config = {
    navigationBarTitleText: '待办事项'
  }

  state = {
    checkboxOption: [],
    checkedList: [],
    eventTitle: ''
  }

  componentWillMount () {
  }

  componentWillUnmount () {}

  componentDidShow () {
  }

  componentDidHide () {}

  handleChange (val: number) {
    this.setState(() => {
      return {
        checkedList: val
      }
    })
  }

  eventTitleChange (val: string) {
    this.setState({
      eventTitle: val
    })
  }

  eventDescChange (e: any) {
    let value = e.target.value
    this.setState(() => {
      return {
        eventDesc: value
      }
    })
  }

  render () {
    const { 
      checkboxOption, 
      checkedList,
      eventTitle
    } = this.state
    return (
      <View className="pg-bullet-list">
        <View className="event-content">
          <AtInput
            name="eventTitle"
            title="事项标题"
            type="text"
            placeholder="请输入事项标题"
            onChange={this.eventTitleChange}
            value={eventTitle}
            className="event-title"
          />
          <AtButton >
            添加
          </AtButton>
        </View>
        <AtCheckbox 
          options={checkboxOption}
          selectedList={checkedList}
          onChange={this.handleChange.bind(this)}
        />
      </View>
    )
  }
}

export default Index
