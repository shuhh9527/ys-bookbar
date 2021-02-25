import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import store from './store'
if(process.env.NODE_ENV === 'development'){
    require('@/mock');
}

const app = createApp(App)
app.config.globalProperties.$axios = axios

app.use(ElementPlus, { size: 'small' })
    .use(router)
    .use(store)
    .mount('#app')
