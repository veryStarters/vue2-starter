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
  import Vue from 'vue'
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import appConfig from 'config'
  import appMain from './main.vue'
  import topbar from './topbar.vue'
  import sidebar from './sidebar.vue'
  import sticky from 'components/sticky'
  Vue.use(ElementUI)
  export default {
    name: 'pc-admin-layout',
    props: {
      topbar: {
        type: Number,
        'default': 2  // 0 hidden; 1 show; 2 fixed
      },
      theme: {
        type: Object,
        'default': function () {
          return {
            bgColor: '#334257',
            textColor: '#fff',
            activateTextColor: '#2ca2fc'
          }
        }
      },
      navs: {
        type: Array,
        'default': function() {
          return [
            {
              name: 'indexHome',
              label: '布局一'
            },
            {
              name: 'aboutHome',
              label: '布局一主题二'
            },
            {
              name: 'mobileHome',
              label: '布局二'
            }
          ]
        }
      },
      menus: {
        type: Array,
        'default': function () {
          return [
            // {
            //   name: 'name1',
            //   label: '菜单一',
            //   icon: 'el-icon-menu',
            //   children: [
            //     {
            //       name: 'indexHome',
            //       label: '首页',
            //       icon: 'el-icon-star-on'
            //     },
            //     {
            //       name: 'submenu1',
            //       label: '子菜单1',
            //       icon: 'el-icon-menu',
            //       children: [
            //         {
            //           name: 'indexTest14',
            //           label: '测试4',
            //           icon: 'el-icon-edit'
            //         }
            //       ]
            //     }
            //   ]
            // }
          ]
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
<style lang="postcss" src="./layout.pcss" scoped></style>
