import Vue from 'vue'
import App from './App.vue'
import router from './routers'
// import axios from './utils/request.js'
import vant from './plugins/vant.js'

// Vue.use(axios)
Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
