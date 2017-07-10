<template>
  <div class="topbar-wrapper">
    <div>topbar</div>
    <Navbar></Navbar>
  </div>
</template>
<script>
  import Navbar from './navbar.vue'
  export default {
    name: 'Topbar',
    components: {
      Navbar
    }
  }
</script>
<style scoped>
  .topbar-wrapper{
    height: 60px;
    background: #eee;
  }
</style>