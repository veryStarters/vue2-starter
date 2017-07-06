<template>
  <div class="topbar-wrapper">
    <div></div>
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