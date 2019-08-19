export type ListItem = {
  time: string,
  content: string,
  category: string,
  pic: string,
  title: string,
  src: string
}

export type PageOwnProps = {
  newsList: Array<ListItem>
}

export type Item = {
  item: ListItem,
  playing: any,
  onPlay: Function
}
