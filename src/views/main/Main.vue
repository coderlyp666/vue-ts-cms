<template>
  <div class="main">
    <el-container>
      <el-aside :width="isFold ? '60px' : '210px'">
        <main-menu :is-fold="isFold" />
      </el-aside>
      <el-container>
        <el-header>
          <main-header @fold-change="foidChange" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import { localCache } from '@/utils/cache'
import mainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'

const loginClick = () => {
  router.push('/login')
  localCache.removeStorage('token')
}

const isFold = ref<boolean>(false)
const foidChange = (flag: boolean) => {
  isFold.value = flag
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
    background-color: salmon;
  }
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    transition: width 0.3s ease;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-header {
    background-color: #fff;
    height: 48px;
  }
}
</style>
