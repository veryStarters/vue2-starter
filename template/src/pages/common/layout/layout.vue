<template>
  <div class="layout-wrapper">
    <div class="topbar-container clearfix" v-if="topbar">
      <sticky v-if="topbar===2">
        <topbar></topbar>
      </sticky>
      <topbar v-else="topbar===1"></topbar>
    </div>
    <div class="sidebar-container scroll-bar" :class="{'top-offset':topbar, 'fixed': topbar===2, 'dark': dark}" v-if="sidebar">
      <sidebar></sidebar>
    </div>
    <div class="main-container" :class="{'ml-offset':sidebar}">
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
  import config from 'config'
  import appMain from './appmain.vue'
  import topbar from './topbar.vue'
  import sidebar from './sidebar.vue'
  import sticky from 'components/sticky'
  export default {
    name: 'Layout',
    data(){
      let layout = config.layout
      return {
        topbar: layout.topbar || 0,
        sidebar: layout.sidebar || 0,
        dark: layout.sidebarTheme === 'dark'
      }
    },
    mounted() {
      this.addLoginMonitor()
    },
    components: {
      'app-main': appMain,
      topbar,
      sidebar,
      sticky
    }
  }
</script>
<style lang="postcss" scoped>

  /*布局相关特性定义*/
  $height: 60px;  /*topbar height*/
  $width: 180px;   /*sidebar width*/

  .layout-wrapper{
    position: relative;
  }

  .topbar-container {
    position: relative;
    height: $height;
    width: 100%;
  }
  .sidebar-container {
    width: $width;
    position: absolute;
    bottom: 0;
    top:0;
    left: 0;
    z-index: 1001;
    overflow-x: hidden;
    transition: all .28s ease-out;
    background: #e4e8f1;
    &.top-offset{
      top: $height;
    }
    &.fixed{
      position: fixed;
    }
    &.dark {
      background: #1f2d3d;
    }
  }
  .main-container {
    min-height: 100%;
    transition: all .28s ease-out;
    &.ml-offset {
      margin-left: $width;
    }
  }
</style>