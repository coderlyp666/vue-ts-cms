<template>
  <div class="not-found">
    <h2>not-found : {{ route.params.pathMatch }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
const route = useRoute()
</script>

<style lang="less" scoped>
 .not-found {
 }
</style>
