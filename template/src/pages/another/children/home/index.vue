<template>
  <div class="test-children-home-wrapper">
    ddddd
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-test-children-home',
    data() {
      return {}
    },
    mounted(){},
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapActions([])
    }
  }
</script>
<style lang="postcss" scoped>
  .test-children-home-wrapper {
    /*text-align: center;*/
    /*line-height: 2;*/
  }
</style>