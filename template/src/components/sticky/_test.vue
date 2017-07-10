<template>
  <div class="sticky-wrapper">
    <jc-sticky></jc-sticky>
  </div>
</template>
<script>
  import sticky from './index.vue'
  export default {
    name: 'test-sticky',
    components: {
      'jc-sticky': sticky
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="postcss" scoped>
  .sticky-wrapper {
  }
</style>