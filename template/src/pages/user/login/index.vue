<template>
  <div class="user-login-wrapper">
    <div class="login-box">
      <p class="title">系统登录</p>
      <form v-model="user">
        <p><input type="text" v-model="user.name" placeholder="请输入用户名" v-focus></p>
        <p><input type="password" v-model="user.password" placeholder="请输入密码"></p>
      </form>
      <button @click="doLogin">登录</button>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions, mapGetters} from 'vuex'
  import utils from 'utils'
  export default {
    name: 'userLogin',
    data(){
      return {
        user: {
          name: '',
          password: ''
        }
      }
    },
    computed: {},
    methods: {
      ...mapActions(['login']),
      doLogin (){
        this.login(this.user).then(userInfo => {
          if (!userInfo || utils.isEmpty(userInfo)) {
            console.log('登录成功，但用户信息错误或者为空')
            return
          }
          utils.setUserInfoToCache(userInfo)
          this.$router.push({path: '/'})
        }).catch(errInfo => {
          console.log(errInfo)
        })
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .user-login-wrapper {
    position: relative;
    width: 100%;
    height: 700px;
    background: url(~images/bg.png) no-repeat;
    background-size: 100%;
  }
  .login-box {
    position: relative;
    width: 400px;
    height: 300px;
    top: 200px;
    text-align: center;
    left: calc(50% - 200px);
    /*border: 1px solid;*/
    border-radius: 4px;
    background: rgba(0,0,0,.2);
  }
  .title {
    height: 76px;
    line-height: 76px;
    font-size: 24px;
    color: #fff;
    text-shadow: 2px 2px 2px #333;
  }
  input {
    width: 300px;
    height: 36px;
    margin: 10px;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    color: #1f2d3d;
    padding: 3px 10px;
  }
  button {
    margin-top: 26px;
    width: 100px;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    background: #fff;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
  }
</style>