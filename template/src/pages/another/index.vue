<template>
  <div class="test-wrapper">
    <div class="topbar-container clearfix">
      <sticky v-if="topbar===2">
        <topbar></topbar>
      </sticky>
      <topbar v-else="topbar===1"></topbar>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import sticky from 'components/sticky'
  import layoutConfig from 'layouts/pc-admin/config'
  import topbar from 'layouts/pc-admin/topbar'
  import utils from 'utils'
  export default {
    name: 'page-test',
    data() {
      return {
        topbar: layoutConfig.topbar || 0
      }
    },
    components: {
      topbar,
      sticky
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