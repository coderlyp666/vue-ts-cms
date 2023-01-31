import { defineStore } from 'pinia'
import { Login } from '@/service/login/index'
import type { ILoginData } from '@/types/login/index'
import { localCache } from '@/utils/cache/index'
const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getStorage('token') ?? '',
    name: ''
  }),
  actions: {
    async LoginAction(data: ILoginData) {
      const res = await Login(data)
      console.log(res)
      this.token = res.data.token
      localCache.setStorage('token', this.token)
    }
  }
})

export default useLoginStore
