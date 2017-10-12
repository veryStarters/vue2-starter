<template>
  <div class="layout-wrapper">
    <div class="header-container">
      <topbar></topbar>
    </div>
    <div class="main-container">
      <div class="sub-header-container">
        <sub-header></sub-header>
      </div>
      <div class="body-container">
        <app-main></app-main>
      </div>
    </div>
    <div class="footer-container">
      <menubar></menubar>
    </div>
  </div>
</template>
<script>
  import layoutConfig from './config'
  import topbar from './topbar.vue'
  import subHeader from './subheader.vue'
  import menubar from './menubar.vue'
  import appMain from './main.vue'
  export default {
    name: 'Layout',
    components: {
      'app-main': appMain,
      'sub-header': subHeader,
      topbar,
      menubar
    },
    mounted() {
      layoutConfig.layoutInitOnce()
    }
  }
</script>
<style scoped>
  .layout-wrapper {
  }
  .default-body {
    text-align: center;
  }
</style>