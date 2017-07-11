<template>
  <div class="topbar-wrapper">
    <div>topbar</div>
    <navbar></navbar>
  </div>
</template>
<script>
  import navbar from './navbar.vue'
  export default {
    name: 'topbar',
    components: {
      navbar
    }
  }
</script>
<style scoped>
  .topbar-wrapper{
    height: 60px;
    background: #eee;
  }
</style>