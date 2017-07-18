<template>
  <div class="navbar-wrapper">
    <el-menu theme="dark" :default-active="activeName" class="el-menu-demo" mode="horizontal">
      <router-link :to="{name: 'indexHome'}">
        <el-menu-item index="indexHome">首页</el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title">测试菜单</template>
        <router-link :to="{name: 'indexTest1'}">
          <el-menu-item index="indexTest1">测试1</el-menu-item>
        </router-link>
        <router-link :to="{name: 'indexTest3'}">
          <el-menu-item index="indexTest3">测试3</el-menu-item>
        </router-link>
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
    mounted() {
    },
    methods: {}
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