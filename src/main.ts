import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/index.css'
import router from './router/index'
import axios from 'axios'

axios.defaults.baseURL = 'http://139.162.137.167/'

const app = createApp(App)
app.use(router)
app.mount('#app')
