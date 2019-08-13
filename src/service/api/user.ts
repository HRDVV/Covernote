import Request from '../tools/Request'

export default {
  getCategories () {
    return Request.get('/categories/')
  }
}
