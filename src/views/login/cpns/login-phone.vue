<template>
  <div class="login-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号">
        <el-input size="large" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input size="large" show-password style="width: 130px" />
        <el-button
          style="margin-left: 5px; width: 123px"
          size="large"
          type="primary"
          >获取验证码</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.login-phone {
}
</style>
