<template>
  <div class="another-children-test1-children-home-wrapper">
    Hello, world! another test1 home
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-another-children-test1-children-home',
    components: {},
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
  .another-children-test1-children-home-wrapper {
    text-align: center;
    line-height: 5;
  }
</style>