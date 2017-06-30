<template>
  <div class="index-wrapper">
    <div class="info" v-show="isLogin">
      欢迎你，{{userInfo.name}}
      <button v-show="isLogin" @click="doLogout">退出</button>
    </div>
    <jc-hello></jc-hello>
  </div>
</template>
<script>
  import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
  import api from 'api'
  import utils from 'utils'
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
      ...mapState([]),
      ...mapGetters(['isLogin', 'userInfo'])
    },
    methods: {
      ...mapActions(['logout']),
      doLogout(){
        this.logout().then(() => {
          utils.localStorage.removeItem('userInfo')
          utils.localStorage.removeItem('userLoginTime')
          this.$router.push({path: '/user/login'})
        });
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .index-wrapper {
    padding-top: 60px;
    text-align: center;
  }
  .info {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>