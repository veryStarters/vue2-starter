<template>
  <div class="hello-wrapper">
    <hello></hello>
  </div>
</template>
<script>
  import hello from './index.vue'
  export default {
    name: 'page-hello',
    components: {
      'hello': hello
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="postcss" scoped>
  .hello-wrapper {
  }
</style>