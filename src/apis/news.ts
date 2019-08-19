import ajax from '@/service/request'

export default {
  getNewsByChannel (data: any) {
    return ajax({
      url: '/jisuapi/get',
      data,
      isLoading: true
    })
  },
  getNewsChannel () {
    return ajax({
      url: '/jisuapi/channel',
      isLoading: true
    })
  }
}
