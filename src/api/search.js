import axios from '../utils/request'

export const getHots = () =>
  axios({
    url: '/search/hot'
  })
