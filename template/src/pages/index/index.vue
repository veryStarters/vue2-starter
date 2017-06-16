<template>
  <div class="index-wrapper">
    <div>hello,world!</div>
    <jc-hello></jc-hello>
  </div>
</template>
<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
  import api from 'api'
  import hello from 'comps/hello/index.vue'
  export default {
    name: 'page-index',
    components: {
      'jc-hello': hello
    },
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
  .index-wrapper {}

</style>