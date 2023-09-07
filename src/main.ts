import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './tailwind.css'
import { inject } from '@vercel/analytics'

const app = createApp(App)

app.use(router)
inject()

app.mount('#app')
