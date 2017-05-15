<template>
  <div class="hello-wrapper">
    <jc-hello></jc-hello>
  </div>
</template>
<script>
  import hello from './index.vue'
  export default {
    name: 'test-hello',
    components: {
      'jc-hello': hello
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="postcss" scoped>
  .hello-wrapper {
  }
</style>