// 1.区分开发环境和生产环境
//  const BASE_URL = 'http://codercba.com:9002'
// export const BASE_URL = 'http://codercba.prod:8000'

// 2.代码逻辑判断, 判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
// console.log(import.meta.env) // 是否开发环境
// console.log(import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)

let BASE_URL = ''
if (import.meta.env.PROD) {
  BASE_URL = 'http://152.136.185.210:4000'
} else {
  BASE_URL = 'http://152.136.185.210:5000'
}

// console.log(BASE_URL)

// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_URL)
// console.log(import.meta.env.VITE_NAME)

export const TIME_OUT = 10000
export { BASE_URL }
