<template>
  <div class="about-test2-wrapper">
    Hello, world!
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-about-test2',
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
  .about-test2-wrapper {
    text-align: center;
    line-height: 5;
  }
</style>