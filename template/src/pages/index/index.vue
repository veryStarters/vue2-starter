<template>
  <div class="index-wrapper">
    <Layout v-if="!isMobile"></Layout>
    <Layout v-if="isMobile"></Layout>
  </div>
</template>
<script>
  import config from 'config'
  export default {
    name: 'page-index',
    data(){
      return {
        isMobile: config.appType === 'mobile'
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