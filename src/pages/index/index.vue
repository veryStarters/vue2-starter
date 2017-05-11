<template>
  <div class="index-wrapper">
    <div class="c b title number-font">hello,world!</div>
    <jc-hello></jc-hello>
  </div>
</template>
<script>
  import hello from 'comps/hello/index.vue'
  export default {
    name: 'index',
    components: {
      'jc-hello': hello
    }
  }
</script>
<style lang="postcss" scoped>
  .index-wrapper {}

</style>