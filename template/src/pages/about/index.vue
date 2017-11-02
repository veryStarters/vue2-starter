<template>
  <div class="about-wrapper">
    <pc-admin-layout :topbar="1" :theme="theme" :menus="menus"></pc-admin-layout>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'page-about',
    components: {},
    data() {
      return {
        theme: {
          bgColor: '#e4e4e4',
          textColor: '#666',
          activateTextColor: '#2ca2fc'
        },
        menus: [
          {
            name: 'aboutHome',
            label: '首页'
          },
          {
            name: 'aboutTest1',
            label: '测试1'
          }
        ]
      }
    }
  }
</script>
<style lang="postcss">
  <!--全局样式覆盖-->
  .about-wrapper {
    .el-menu {
      border-right: none;
    }
    .el-menu--horizontal {
      border-bottom: none;
    }
    .el-menu-item:hover{
      background: #cecece !important;
    }
  }
</style>
<style lang="postcss" scoped>
  .about-wrapper {
  }
</style>