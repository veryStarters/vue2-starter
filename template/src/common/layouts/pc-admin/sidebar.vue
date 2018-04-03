<template>
  <div class="sidebar-wrapper">
    <menubar :theme="theme" :menus="menus"></menubar>
  </div>
</template>
<script>
  import menubar from './menus.vue'
  export default {
    name: 'sidebar',
    props: ['theme', 'menus'],
    components: {
      menubar
    }
  }
</script>
<style scoped>
  .sidebar-wrapper {
  }
</style>