<template>
  <div class="navbar-wrapper">
    <el-menu theme="dark" :default-active="activeName" class="el-menu-demo" mode="horizontal">
      <router-link :to="{path: '/'}">
        <el-menu-item index="home">首页</el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title">测试菜单</template>
        <router-link :to="{path: '/test1'}">
          <el-menu-item index="test1">测试1</el-menu-item>
        </router-link>
        <router-link :to="{path: '/test3'}">
          <el-menu-item index="test3">测试3</el-menu-item>
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
        return this.$route.name || 'home'
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>