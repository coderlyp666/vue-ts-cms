<template>
  <div class="login-account">
    <el-form
      ref="formRef"
      label-width="60px"
      :rules="rules"
      :model="accountAndPassword"
      status-icon
    >
      <el-form-item label="账号" prop="name">
        <el-input size="large" v-model="accountAndPassword.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          show-password
          size="large"
          v-model="accountAndPassword.password"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineExpose, reactive, ref } from 'vue'
import type { FormRules, ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/stores/login/index'
import { localCache } from '@/utils/cache'
import router from '@/router/index'

// 表单验证规则
const rules: FormRules = {
  name: [
    { required: true, message: '必须输入账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,12}$/,
      min: 6,
      max: 12,
      message: '必须是6~12数字或字母组成~',
      trigger: 'blur'
    }
  ],

  password: [
    { required: true, message: '必须输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,18}$/,
      min: 6,
      max: 18,
      message: '必须是6~18数字或字母组成~',
      trigger: 'blur'
    }
  ]
}

const formRef = ref<InstanceType<typeof ElForm>>()
// 账号密码
const accountAndPassword: {
  name: string
  password: string
} = reactive({
  name: localCache.getStorage('login/name') ?? '',
  password: localCache.getStorage('login/password') ?? ''
})

// 登录逻辑

const useLogin = useLoginStore()
const LoginAccount = (iSActivePwd: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      const name = accountAndPassword.name
      const password = accountAndPassword.password

      useLogin
        .LoginAction({ name, password })
        .then((res) => {
          ElMessage({
            type: 'success',
            message: '登录成功!'
          })

          // 跳转到主页
          router.push('/main')
          // 登录成功是否保存账号密码
          if (iSActivePwd) {
            localCache.setStorage('login/name', name)
            localCache.setStorage('login/password', password)
          } else {
            localCache.removeStorage('login/name')
            localCache.removeStorage('login/password')
          }
        })
        .catch((err) => {
          console.log(err)

          ElMessage({
            type: 'error',
            message: '登录失败! 账号或密码错误~'
          })
        })
    }
  })
}

defineExpose({
  LoginAccount
})
</script>

<style lang="less" scoped>
.login-account {
}
</style>
