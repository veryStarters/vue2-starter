<template>
  <div class="index-wrapper">
    <Layout></Layout>
  </div>
</template>
<script>
  import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
  import api from 'api'
  import utils from 'utils'
  import Layout from '../common/layout/index.vue'
  export default {
    name: 'page-index',
    components: {
      Layout
    },
    data() {
      return {}
    },
    computed: {
      ...mapState([]),
      ...mapGetters(['isLogin', 'userInfo'])
    },
    methods: {
      ...mapActions(['logout']),
      doLogout(){
        this.logout().then(() => {
          utils.removeUserInfoFromCache()
          this.$router.push({path: '/user/login'})
        });
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .index-wrapper {
  }
</style>