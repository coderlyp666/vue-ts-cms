import { defineStore } from 'pinia'
import { Login, getUserInfoById, getUserMenuById } from '@/service/login/index'
import type { ILoginData } from '@/types/login/index'
import { localCache } from '@/utils/cache/index'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}
const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getStorage('token') ?? '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async LoginAction(data: ILoginData) {
      const res = await Login(data)
      // console.log(res)
      this.token = res.data.token
      const id = res.data.id
      localCache.setStorage('token', this.token)

      // 获取登录用户信息
      const userInfo = await getUserInfoById(id)
      this.userInfo = userInfo.data
      localCache.setStorage('userInfo', this.userInfo)
      console.log(userInfo)

      // 获取角色权限菜单信息
      const userMenuRes = await getUserMenuById(id)
      this.userMenus = userMenuRes.data
      localCache.setStorage('userMenus', this.userMenus)
      console.log(userMenuRes)
    }
  }
})

export default useLoginStore
