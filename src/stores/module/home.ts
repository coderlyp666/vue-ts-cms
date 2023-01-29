import { defineStore } from 'pinia'
import hyRequest from '@/service/index'
const useHomeStore = defineStore('home', {
  state:() => ({
    num:1
  }),
  getters:{
    dbNum(state) {
      return state.num * 2
    }
  },
  actions:{
    changeNum(num:number) {
     return this.num  = num
    },
    fetchHomeData() {
      hyRequest.get({
        url:'/search/hot'
      }).then(res => {
        console.log(res);

      })
    }
  }
})

export default useHomeStore