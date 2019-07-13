import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'

Vue.config.productionTip = false

import './style.scss'
import './assets/iconfont/iconfont.css'

import Card from './components/Card.vue'
Vue.component('m-card',Card);

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard);

Vue.use(VueAwesomeSwiper)

Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3002/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
