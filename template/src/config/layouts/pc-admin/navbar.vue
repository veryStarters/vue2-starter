<template>
  <div class="navbar-wrapper">
    <el-menu theme="dark" :default-active="activeName" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="indexHome">后台管理布局</el-menu-item>
      <el-menu-item index="anotherHome">内嵌其它布局</el-menu-item>
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
        transform: scale3d(1.1, 1.1, 1) translate3d(5px, -2px, 0);
        transition: .2s ease-in;
      }
    }
  }
</style>