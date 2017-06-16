<template>
  <div class="common-wrapper">
    Hello, common!
  </div>
</template>
<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
  import api from 'api'
  export default {
    name: 'page-common',
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
  .common-wrapper {}
</style>