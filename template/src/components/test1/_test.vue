<template>
  <div class="test1-wrapper">
    <test1></test1>
  </div>
</template>
<script>
  import test1 from './index.vue'
  export default {
    name: 'page-test1',
    components: {
      'test1': test1
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="postcss" scoped>
  .test1-wrapper {
  }
</style>