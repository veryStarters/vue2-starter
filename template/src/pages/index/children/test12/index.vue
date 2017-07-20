<template>
  <div class="index-children-test2-wrapper">
    Hello, world! test2
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import api from 'api'
  export default {
    name: 'page-index-children-test2',
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapActions([])
    }
  }
</script>
<style lang="postcss" scoped>
  .index-children-test2-wrapper {
    text-align: center;
  }
</style>