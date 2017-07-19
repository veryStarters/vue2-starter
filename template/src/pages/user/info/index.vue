<template>
  <div class="user-info-wrapper">
    你好，{{userInfo.name}}!
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-user-info',
    components: {},
    computed: {
      ...mapGetters(['userInfo', 'menuInfo'])
    },
    methods: {
      ...mapActions(['getUserInfo'])
    },
    mounted() {
      this.getUserInfo().then((res) => {
        console.log(res.name)
      })
    }
  }
</script>
<style lang="postcss" scoped>
  .user-info-wrapper {
    text-align: center;
  }
</style>