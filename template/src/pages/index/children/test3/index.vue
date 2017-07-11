<template>
  <div class="index-children-test3-wrapper">
    Hello, world!
  </div>
</template>
<script>
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-index-children-test3',
    components: {},
    data() {
      return {}
    },
    mounted(){},
    computed: {
      ...mapState([]),
      ...mapGetters([])
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([])
    }
  }
</script>
<style lang="postcss" scoped>
  .index-children-test3-wrapper {}
</style>