<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs
      type="border-card"
      stretch
      v-model="ActiveTab"
      @tab-change="phoneClick"
    >
      <el-tab-pane label="账号登录" name="account">
        <template #label>
          <span class="icon">
            <el-icon><UserFilled /></el-icon>
            <span class="text">账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">
        <template #label>
          <span class="icon">
            <el-icon><Cellphone /></el-icon>
            <span class="text">手机登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="control">
      <el-checkbox v-model="iSActivePwd" label="记住密码" size="large" />
      <el-link type="primary" class="link">忘记密码</el-link>
    </div>
    <el-button type="primary" @click="loginClick" size="large" class="login-btn"
      >登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { localCache } from '@/utils/cache'

// 是否记住密码
const iSActivePwd = ref<boolean>(localCache.getStorage('iSActivePwd') ?? false)

// 监听iSActivePwd变化
watch(iSActivePwd, (newVal) => {
  console.log(newVal)
  localCache.setStorage('iSActivePwd', newVal)
})
const ActiveTab = ref('account')
const accountRef = ref<InstanceType<typeof LoginAccount>>()

const phoneClick = (type: string) => {
  if (type === 'phone') {
    ElMessage('该功能未开发!')
  }
}

// 点击登录
const loginClick = () => {
  if (ActiveTab.value === 'account') {
    accountRef.value?.LoginAccount(iSActivePwd.value)
  } else {
    console.log('手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  height: 200px;

  .title {
    text-align: center;
  }

  .control {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
  }

  .login-btn {
    height: 40px !important;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      margin-left: 5px;
    }
  }
}
</style>
