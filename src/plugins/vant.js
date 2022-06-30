import { Button } from 'vant'

const elements = [Button]

export default function (Vue) {
  elements.forEach((item) => {
    Vue.use(item)
  })
}
