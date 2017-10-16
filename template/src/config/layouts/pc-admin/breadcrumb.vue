<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb :separator="option.separator">
      <el-breadcrumb-item v-for="(opt,index) in option.list" :key="index" :to="opt">{{opt.label}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
  export default {
    name: 'Breadcrumb',
    props: ['option']
  }
</script>
<style lang="postcss" scoped>
  .breadcrumb-wrapper {
    margin: 10px 0;
  }
</style>