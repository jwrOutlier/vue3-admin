import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import getNaiveUI from './config/third_components'
const app = createApp(App)

getNaiveUI(app)
app.use(createPinia())
app.use(router)

app.mount('#app')
