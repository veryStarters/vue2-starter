<template>
  <div class="index-children-test2-wrapper">
    Hello, world!
  </div>
</template>
<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
  import api from 'api'
  export default {
    name: 'page-index-children-test2',
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapState([])
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([])
    }
  }
</script>
<style lang="postcss" scoped>
  .index-children-test2-wrapper {}
</style>