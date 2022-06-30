import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  Grid,
  GridItem,
  Icon,
  Search
} from 'vant'

const elements = [
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  Grid,
  GridItem,
  Icon,
  Search
]

export default function (Vue) {
  elements.forEach((item) => {
    Vue.use(item)
  })
}
