<template>
  <div class="test-wrapper">
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import topbar from 'layouts/pc-admin/topbar'
  import utils from 'utils'
  export default {
    name: 'page-test',
    data() {
      return {}
    },
    components: {
      topbar
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
  .test-wrapper {}
</style>