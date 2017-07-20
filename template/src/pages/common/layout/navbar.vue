<template>
  <div class="navbar-wrapper">
    <el-menu theme="dark" :default-active="activeName" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="indexHome">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">测试菜单</template>
        <el-menu-item index="indexTest1">测试1</el-menu-item>
        <el-menu-item index="indexTest3">测试3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
    data() {
      return {}
    },
    computed: {
      activeName(){
        return this.$route.name || 'indexHome'
      }
    },
    methods: {
      handleSelect(index){
        this.$router.push({name: index})
      }
    }
  }
</script>
<style lang="postcss">
  .navbar-wrapper {
    .el-menu-item {
      transition: .3s ease-out;
      &:hover {
        text-shadow: 2px 2px 2px rgba(200, 200, 200, .5);
        transform: scale3d(1.1, 1, 1);
        transition: .2s ease-in;
      }
    }
  }
</style>