export type PageStateProps = {}

export type PageDispatchProps = {}

export type PageOwnProps = {}

export type ListItem = {
  time: string,
  content: string,
  category: string,
  pic: string,
  title: string,
  src: string
}

export type PageState = {
  tabList: Array<{title: string}>
  current: number,
  channel: string,
  num: number,
  start: number,
  newsList: Array<ListItem>,
  status: number
}

export type IProps = PageStateProps & PageDispatchProps & PageOwnProps
