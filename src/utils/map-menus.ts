import type { RouteRecordRaw } from 'vue-router'
import router from '@/router'

function loadLocalRoutes() {
  // 保存路由对象的数组t
  const localRoutes: RouteRecordRaw[] = []
  // 获取router/main的使用ts文件
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    {
      eager: true
    }
  )
  // 将加载的对象添加到localRoutes数组中
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }
  // console.log(files)
  return localRoutes
}

export let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]) {
  const localRoutes = loadLocalRoutes()
  // 根据菜单去匹配正确的路由
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      // console.log(route)

      if (route) router.addRoute('main', route)
      if (firstMenu === null && route) {
        firstMenu = submenu
      }
    }
  }
}

/**
 *
 * @param path 路径
 * @param menu 菜单
 */
export function mapPathToMenu(path: string, userMenus: any) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) return submenu
    }
  }
}

export function mapPathToBreadcrumbs(path: string, userMenus: any) {
  const breadcrumbs: any[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        breadcrumbs.push({ name: menu.name })
        breadcrumbs.push({ name: submenu.name, url: submenu.url })
      }
    }
  }
  return breadcrumbs
}
