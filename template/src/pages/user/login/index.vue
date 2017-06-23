<template>
  <div class="user-login-wrapper">
    <div v-show="isLogin">
      欢迎你，{{userInfo.name}}
    </div>
    <button v-show="!isLogin" @click="doLogin">登录</button>
    <button v-show="isLogin" @click="doLogout">退出</button>
  </div>
</template>
<script>
  import {mapState, mapActions, mapGetters} from 'vuex'
  import api from 'api'
  import utils from 'utils'
  export default {
    name: 'userLogin',
    data(){
      return {}
    },
    computed: {
      ...mapState(['user']),
      ...mapGetters(['isLogin', 'userInfo'])
    },
    methods: {
      ...mapActions(['login', 'logout']),
      doLogin (){
        this.login({
          name: 'taoqili',
          password: '123456'
        }).then(userInfo => {
          utils.localStorage.setItem('userInfo', JSON.stringify(userInfo))
          this.$router.push({path:'/'})
          console.log(userInfo)
        }).catch(errInfo => {
          console.log(errInfo)
        })
      },
      doLogout(){
        this.logout().then(() => {
          this.$router.push({path: '/user/login'})
        });
      }
    },
    mounted: function () {
    }
  }
</script>
<style lang="postcss" scoped>
  .user-login-wrapper {

  }
</style>