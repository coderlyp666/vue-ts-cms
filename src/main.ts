import { createApp } from 'vue'
import App from './App.vue'
import "../src/assets/css/index.less"
import router from './router'
import pinia from './stores'
import "normalize.css"

const info = {
  name: 'why'
}
createApp(App).use(router).use(pinia).mount('#app')
