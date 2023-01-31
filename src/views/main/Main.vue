<template>
  <div class="main">
    <h2>main</h2>
    <el-button @click="loginClick">退出登录</el-button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { localCache } from '@/utils/cache'

const loginClick = () => {
  console.log('a')
  router.push('/login')
  localCache.removeStorage('token')
}
</script>

<style lang="less" scoped>
.main {
}
</style>
