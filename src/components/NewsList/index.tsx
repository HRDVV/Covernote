import Taro, { useCallback, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import List from './List'
import { PageOwnProps, ListItem } from './index.d'

const NewsList = (props: PageOwnProps): JSX.Element => {
  const { newsList } = props

  const [playing, setPlay] = useState({})

  const onPlay = useCallback((newsItem) => {
    setPlay(newsItem)
  }, [])

  return (
    <View className="cp-news-list">
      {
        newsList.map((newsItem: ListItem) => {
          return (
            <View key={newsItem.title}>
              <List 
                item={newsItem}
                playing={playing}
                onPlay={() => { onPlay(newsItem) }}
              />
            </View>
          )
        })
      }
    </View>
  )
}

NewsList.defaultProps = {
  newsList: []
}
NewsList.options = {
  addGlobalClass: true
}

export default NewsList
