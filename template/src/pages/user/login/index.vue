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
      async doLogin (){
        let res = await api.login({
          name: 'taoqili',
          password: '123456'
        })
        if (res.code === 0) {
          this.login(res.data)
          console.log(res.msg)
        }
      },
      async doLogout(){
        let res = await api.logout()
        if (res.code === 0) {
          this.logout()
          this.$router.push({path: '/user/login'})
        }
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