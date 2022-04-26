import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.provide('currentUser', {
  name: 'bitle'
})
app.mount('#app')
