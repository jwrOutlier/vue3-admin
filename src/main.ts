import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import useThirdComponent from '@/config/third_module_component'
import App from './App.vue'
import router from './router'
const app = createApp(App)

useThirdComponent(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
// console.log(import.meta.env.VITE_APP_PATH)
