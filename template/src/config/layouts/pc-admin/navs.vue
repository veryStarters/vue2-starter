<template>
  <div class="navbar-wrapper">
    <el-menu theme="dark" :default-active="activeName" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item class="item" index="indexHome">首页</el-menu-item>
      <el-menu-item class="item" index="anotherHome">关于我</el-menu-item>
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