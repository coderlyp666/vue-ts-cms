import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/css/index.less'
import router from './router'
import store from './stores'
import 'normalize.css'
import 'element-plus/dist/index.css'
import iconFun from './global/icon'
const info = {
  name: 'why'
}
const app = createApp(App)
app.use(iconFun)
app.use(store)

app.use(router)
app.mount('#app')
