<template>
  <div class="index-wrapper">
    <pc-admin-layout></pc-admin-layout>
  </div>
</template>
<script>
  export default {
    name: 'page-index',
  }
</script>
<style lang="postcss">
  .index-wrapper {
    .el-menu {
      border-right: none;
    }
    .el-menu--horizontal {
      border-bottom: none;
    }
  }
</style>