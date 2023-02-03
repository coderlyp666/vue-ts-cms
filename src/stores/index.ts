import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from '@/stores/login/index'
const pinia = createPinia()
function store(app: App) {
  app.use(pinia)
  const loginStore = useLoginStore()
  loginStore.loadLocalCacheAction()
}

export default store
