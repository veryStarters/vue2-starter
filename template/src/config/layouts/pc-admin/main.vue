<template>
  <section class="app-main-wrapper" style="min-height: 100%">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>
<script>
  export default {
    name: 'app-main',
  }
</script>
<style lang="postcss" scoped>
  .app-main-wrapper {
    margin: 10px;
  }
</style>