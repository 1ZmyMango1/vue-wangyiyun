import axios from '../utils/request'

// 推荐歌单
export const getRecommends = (limit) =>
  axios({
    url: '/personalized',
    params: {
      limit
    }
  })

// export const getRecommends = (limit) => {
//   return axios({
//     url: '/personalized',
//     params: {
//       limit
//     }
//   })
// }

// 最新音乐
export const getNewSongs = (limit) =>
  axios({
    url: '/personalized/newsong',
    params: {
      limit
    }
  })
