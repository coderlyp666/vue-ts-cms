import { defineStore } from 'pinia'
import { Login, getUserInfoById, getUserMenuById } from '@/service/login/index'
import type { ILoginData } from '@/types/login/index'
import { localCache } from '@/utils/cache/index'
import { mapMenusToRoutes } from '@/utils/map-menus'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}
const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
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
      // console.log(userInfo)

      // 获取角色权限菜单信息
      const userMenus = await getUserMenuById(id)
      this.userMenus = userMenus.data
      localCache.setStorage('userMenus', this.userMenus)
      console.log(userMenus)

      // 动态添加路由
      mapMenusToRoutes(this.userMenus)
      // router.push('/main')
    },
    loadLocalCacheAction() {
      const token = localCache.getStorage('token')
      const userMenus = localCache.getStorage('userMenus')
      const userInfo = localCache.getStorage('userInfo')

      if (token && userMenus && userInfo) {
        mapMenusToRoutes(userMenus)
      }
    }
  }
})

export default useLoginStore
