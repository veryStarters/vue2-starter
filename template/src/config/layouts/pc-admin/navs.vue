<template>
  <div class="navbar-wrapper">
    <el-menu :theme="theme" :default-active="activeName" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(nav,index) in navs" :key="index" class="item" :index="nav.name">{{nav.label}}</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  import config from './config'
  const navs = config.navs
  export default {
    name: 'navbar',
    data() {
      return {
        navs: navs,
        theme: config.sidebarTheme
      }
    },
    computed: {
      activeName(){
        let name = this.$route.name || 'indexHome'
        let match = name.match(/[A-Z]{1}/)
        if (match) {
          name = name.substr(0, match.index)
        }
        return name + 'Home'
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
    .item {
      transition: .3s ease-out;
      &:hover {
        text-shadow: 2px 2px 2px rgba(200, 200, 200, .5);
        transform: scale3d(1.1, 1, 1);
        transition: .2s ease-in;
      }
    }
  }
</style>