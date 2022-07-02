import axios from '../utils/request'

export const getHots = () =>
  axios({
    url: '/search/hot'
  })

// 获取搜索列表
export const songSearch = (keywords, limit, offset) =>
  axios({
    url: '/cloudsearch',
    params: {
      keywords,
      limit,
      offset
    }
  })
