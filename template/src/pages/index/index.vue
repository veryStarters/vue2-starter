<template>
  <div class="index-wrapper">
    <Layout></Layout>
  </div>
</template>
<script>
  export default {
    name: 'page-index',
    data(){
      return {
      }
    }
  }
</script>
<style>
  <!-- 全局覆盖el-menu定义 -->
  .el-menu {
    border-radius: 0;
  }
</style>