import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './tailwind.css'
import { inject } from '@vercel/analytics'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
inject()

app.mount('#app')
