<template>
  <div class="aside">
    <el-menu
      default-active="39"
      class="el-menu-vertical-demo"
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
      :collapse="isFold"
    >
      <div class="title">
        <img src="@/assets/img/logo.svg" alt="" />
        <h3 v-show="!isFold">Vue3 + TS</h3>
      </div>
      <!-- 遍历整个菜单 -->
      <template v-for="item in userMenus" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <!-- 字符串: el-icon-monitor => 组件 component动态组件 -->
            <el-icon>
              <component :is="item.icon.split('-icon-')[1]" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>

          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item
              :index="subitem.id + ''"
              @click="routerClick(subitem.url)"
            >
              {{ subitem.name }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { localCache } from '@/utils/cache'
const props = defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
console.log(props.isFold)

// 获取菜单
const userMenus = localCache.getStorage('userMenus') ?? []

// 页面跳转
const router = useRouter()
const routerClick = (path: string) => {
  console.log(path)

  router.push(path)
}
</script>

<style lang="less" scoped>
.aside {
  .title {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 10px 10px 10px 2px;
    box-sizing: border-box;

    img {
      width: 28px;
      // margin: 0 10px;
      margin-left: 20px;
      margin-right: 10px;
    }
  }
  .el-sub-menu {
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135;
    }

    .el-menu-item:hover {
      color: #fff;
    }

    .el-menu-item.is-active {
      background-color: #0a60bd;
    }
  }
}
.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
