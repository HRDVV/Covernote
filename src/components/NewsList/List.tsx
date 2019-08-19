import Taro, { useCallback } from '@tarojs/taro'
import { View, Image, Text, Video } from '@tarojs/components'
import { Item } from './index.d'
import './List.scss'

function List (props: Item): JSX.Element {
  const { item, onPlay, playing } = props

  const clickVideo = useCallback(() => {
    (async () => {
      const { networkType } = await Taro.getNetworkType()
      if (networkType !== 'wifi') {
        return Taro.showToast({ title: '请在wifi下观看', icon: 'none' })
      }
      onPlay()
    })()
  }, [onPlay])

  let src: any
  item.content && (src = item.content.match(/src=['"]?(\S+)['"]?/))
  return (
    <View className="cp-list-item">
      {
        item.category !== 'video' 
          ? 
          (
            <View 
              className="list-item"
            >
              <View className="list-left">
                <Text className="list-left-top">{item.title}</Text>
                <Text className="list-left-bottom">{item.src} {item.time}</Text>
              </View>
              <View className="list-right">
                <Image
                  style={{ width: Taro.pxTransform(175), height: Taro.pxTransform(120), marginLeft: Taro.pxTransform(20), display: 'block', background: '#ccc' }}
                  src={item.pic}
                  lazyLoad
                />
              </View>
            </View>
          )
          :
          (
            <View 
              className={item.category === 'video' ? 'list-video' : 'list-item'}
            >
              <View className="at-icon at-icon-play" onClick={clickVideo} />
              <Text className="title">{item.title}</Text>
              {
                src && (
                  item.title !== playing.title
                    ?
                    <Image src={item.pic} style="width: 100%;" />
                    :
                    (<Video
                      className="video"
                      src={src[1]}
                      controls
                      poster={item.pic}
                      autoplay
                      initialTime={0}
                      loop={false}
                      muted={false}
                    />)
                )
              }
              <Text className="time">{item.src} {item.time}</Text>
            </View>
          )
      }
    </View>
  )
}

List.defaultProps = {
  item: {},
  playing: {},
  onPlay: () => {}
}
List.options = {
  addGlobalClass: true
}

export default List
