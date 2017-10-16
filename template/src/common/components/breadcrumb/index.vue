<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb :separator="option.separator|| option.sep || '/'">
      <el-breadcrumb-item v-for="(opt,index) in option.list" :key="index" :to="opt">{{opt.label}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
  export default {
    name: 'breadcrumb',
    props: ['option']
  }
</script>
<style lang="postcss" scoped>
  .breadcrumb-wrapper {
    margin: 15px 0;
    padding: 8px;
    color: #1f2d3d;
    background: #fbfbfc;
    font-size: 18px;
  }
</style>