<template>
  <div class="main">
    <h2>main</h2>
  </div>
</template>

<script setup lang="ts">
  import useHomeStore from '@/stores/module/home'
  const useHome = useHomeStore()
  console.log(useHome.num);
  console.log(useHome.dbNum);
  console.log(useHome.changeNum(9));
  useHome.fetchHomeData()

</script>

<style lang="less" scoped>
 .main {

 }
</style>
