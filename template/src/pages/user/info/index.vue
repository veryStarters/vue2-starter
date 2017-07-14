<template>
  <div class="user-info-wrapper">
    你好，{{userInfo.name}}!
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-user-info',
    components: {},
    computed: {
      ...mapGetters(['userInfo'])
    }
  }
</script>
<style lang="postcss" scoped>
  .user-info-wrapper {
    text-align: center;
  }
</style>