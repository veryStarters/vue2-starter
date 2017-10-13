<template>
  <div class="sticky-wrapper">
    <sticky></sticky>
  </div>
</template>
<script>
  import sticky from './index.vue'
  export default {
    name: 'page-sticky',
    components: {
      'sticky': sticky
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="postcss" scoped>
  .sticky-wrapper {
  }
</style>