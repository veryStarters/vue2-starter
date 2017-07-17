<template>
  <div class="index-wrapper">
    <Layout></Layout>
  </div>
</template>
<script>
  import Layout from '../common/layout/layout.vue'
  export default {
    name: 'page-index',
    components: {
      Layout
    }
  }
</script>
<style>
  .el-menu {
    border-radius: 0;
  }
</style>