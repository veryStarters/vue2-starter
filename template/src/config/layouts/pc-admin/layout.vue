<template>
  <div class="layout-wrapper">
    <div class="topbar-container clearfix" v-if="topbar">
      <sticky v-if="topbar === 2">
        <topbar :show="topbar !== 0" :theme="theme" :navs="navs"></topbar>
      </sticky>
      <topbar v-else="topbar === 1" :show="topbar === 1" :theme="theme" :navs="navs"></topbar>
    </div>
    <div class="sidebar-container scroll-bar fixed" :class="{'top-offset':topbar, 'dark': theme === 'dark'}" :style="{background: theme.bgColor}">
      <sidebar :theme="theme" :menus="menus"></sidebar>
    </div>
    <div class="main-container ml-offset">
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
  import appConfig from 'config'
  import layoutConfig from './default.conf'
  import appMain from './main.vue'
  import topbar from './topbar.vue'
  import sidebar from './sidebar.vue'
  import sticky from 'components/sticky'
  export default {
    name: 'pc-admin-layout',
    props: {
      topbar: {
        type: Number,
        default: layoutConfig.topbar
      },
      theme: {
        type: Object,
        default: layoutConfig.theme
      },
      navs: {
        type: Array,
        default: function() {
          return layoutConfig.navs
        }
      },
      menus: {
        type: Array,
        default: function () {
          return layoutConfig.menus
        }
      }
    },
    beforeMounted() {
      if (!appConfig.isStatic) {
        this.addLoginMonitor()
      }
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
  $width: 230px;   /*sidebar width*/

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
  }
  .main-container {
    min-height: 100%;
    transition: all .28s ease-out;
    &.ml-offset {
      margin-left: $width;
    }
  }
</style>