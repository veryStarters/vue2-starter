<template>
  <div class="mobile-wrapper">
    <mobile-layout></mobile-layout>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  // 可以单独引入另外一个布局
  import mobileLayout from 'layouts/mobile/layout'
  import utils from 'utils'
  export default {
    name: 'page-mobile',
    components: {
      mobileLayout
    },
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
  .mobile-wrapper {
  }
</style>