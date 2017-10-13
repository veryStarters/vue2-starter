<template>
  <div class="test-wrapper">
    <test></test>
  </div>
</template>
<script>
  import test from './index.vue'
  export default {
    name: 'page-test',
    components: {
      'test': test
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="postcss" scoped>
  .test-wrapper {
  }
</style>