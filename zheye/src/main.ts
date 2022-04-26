/* eslint-disable import/no-duplicates */
import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import App from './App.vue'
axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
  const code = '5A8287EE230B9748'
  store.commit('setLoading', true)
  config.params = { ...config.params, icode: code }
  if (config.data instanceof FormData) {
    config.data.append('icode', code)
  } else {
    config.data = { ...config.data, icode: code }
  }
  return config
})
axios.interceptors.response.use(config => {
  setTimeout(() => {
    store.commit('setLoading', false)
  }, 1000)
  return config
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
