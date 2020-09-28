import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
      { path: '/', component: App }
    ]
  })
const app = createApp(App)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
