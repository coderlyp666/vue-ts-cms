import hyRequest from '../index'
import type { ILoginData } from '@/types/login/index'
export function Login(data: ILoginData) {
  return hyRequest.post({
    url: '/login',
    data
  })
}
