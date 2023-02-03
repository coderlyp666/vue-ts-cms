import hyRequest from '../index'
import type { ILoginData } from '@/types/login/index'
import { localCache } from '@/utils/cache'

export function Login(data: ILoginData) {
  return hyRequest.post({
    url: '/login',
    data
  })
}
export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: `/users/${id}`,
    headers: {
      Authorization: 'Bearer ' + localCache.getStorage('token')
    }
  })
}

export function getUserMenuById(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`
  })
}
