import { createApp } from 'vue'
import App from './App.vue'
import "../src/assets/css/index.less"
import router from './router'
import pinia from './stores'
import "normalize.css"
import 'element-plus/dist/index.css'
import iconFun from './global/icon'
const info = {
  name: 'why'
}
createApp(App).use(iconFun).use(router).use(pinia).mount('#app')
