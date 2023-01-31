<template>
  <div class="not-found">
    <!-- <h2>not-found : {{ route.params.pathMatch }}</h2> -->
    <h2>你输入的路径不对,请联系管理员!</h2>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
const route = useRoute()
</script>

<style lang="less" scoped>
 .not-found {
  display: flex;
  justify-content: center;
  color: red;
 }
</style>
