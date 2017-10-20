<template>
  <div class="test-home-wrapper">
    这个页面同样采用了pc-admin这个布局，更换了整体风格样式
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-test-home',
    data() {
      return {
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .test-home-wrapper {
    line-height: 2;
  }
</style>