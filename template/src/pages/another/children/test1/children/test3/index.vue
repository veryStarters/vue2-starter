<template>
  <div class="another-children-test1-children-test3-wrapper">
    Hello, world!
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-another-children-test1-children-test3',
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
  .another-children-test1-children-test3-wrapper {
    text-align: center;
    line-height: 5;
  }
</style>