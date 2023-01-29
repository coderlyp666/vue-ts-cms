import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {
      path:'/',
      redirect:'/main'
    },
    {
      path:'/:pathMatch(.*)',
      component:() => import("../views/not-found/NotFound.vue")
    },
    {
      path:'/login',
      component:() => import('../views/login/Login.vue'),
    },
    {
      path:'/main',
      component:() => import('../views/main/Main.vue'),
    },
  ]
})

export default router
