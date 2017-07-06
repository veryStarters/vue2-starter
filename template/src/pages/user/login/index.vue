<template>
  <div class="user-login-wrapper">
    <button @click="doLogin">登录</button>
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
    },
    methods: {
      ...mapActions(['login']),
      doLogin (){
        this.login({
          name: 'taoqili',
          password: '123456'
        }).then(userInfo => {
          if(!userInfo || utils.isEmpty(userInfo)){
            console.log('登录成功，但用户信息错误或者为空')
            return
          }
          utils.setUserInfoToCache(userInfo)
          this.$router.push({path: '/'})
        }).catch(errInfo => {
          console.log(errInfo)
        })
      }
    },
    mounted: function () {
    }
  }
</script>
<style lang="postcss" scoped>
  .user-login-wrapper {
    margin-top: 20px;
    text-align: center;
  }
</style>