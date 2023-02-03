<template>
  <div class="main-header">
    <div class="left">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" @click="unfoldClick" />
      </el-icon>
      <div class="breadcrumbs">
        <el-breadcrumb separator-icon="ArrowRight">
          <template v-for="item in breadcrumbs" :key="item.name">
            <el-breadcrumb-item
              ><a>{{ item.name }}</a></el-breadcrumb-item
            >
          </template>
        </el-breadcrumb>
      </div>
    </div>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <div class="info">
            <el-avatar :size="28" src="../../../src/assets/img/jay.jpg" />
            <span>{{ userInfo.name }}</span>
          </div>
        </span>
        <template #dropdown>
          <el-dropdown-item @click="exitClick">
            <el-icon><CircleClose /></el-icon>
            退出系统
          </el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { localCache } from '@/utils/cache/index'
import { mapPathToBreadcrumbs } from '@/utils/map-menus'
const router = useRouter()
const isFold = ref<boolean>(false)
// 获取用户名
const userInfo = localCache.getStorage('userInfo')
//退出登录
const exitClick = () => {
  router.push('login')
  localCache.removeStorage('token')
  ElMessage({
    type: 'success',
    message: '退出登录成功!'
  })
}

// 面包屑
const route = useRoute()
const breadcrumbs = computed(() => {
  return mapPathToBreadcrumbs(route.path, localCache.getStorage('userMenus'))
})
const emit = defineEmits(['foldChange'])
const unfoldClick = () => {
  console.log('s')
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .left {
    display: flex;
    align-items: center;

    .breadcrumbs {
      margin-left: 15px;
    }
  }
  .right {
    cursor: pointer;
    .info {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
