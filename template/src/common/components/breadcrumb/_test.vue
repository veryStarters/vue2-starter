<template>
  <div class="breadcrumb-wrapper">
    <breadcrumb></breadcrumb>
  </div>
</template>
<script>
  import breadcrumb from './index.vue'
  export default {
    name: 'page-breadcrumb',
    components: {
      'breadcrumb': breadcrumb
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="postcss" scoped>
  .breadcrumb-wrapper {
  }
</style>