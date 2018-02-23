<template>
  <div class="user-login-wrapper">
    <div class="login-box">
      <p class="title">系统登录</p>
      <form v-model="user">
        <p><input type="text" v-model="user.name" placeholder="请输入用户名" v-focus></p>
        <p><input type="password" v-model="user.password" placeholder="请输入密码"></p>
        <p class="tips">PS: 密码请随意输入</p>
      </form>
      <button @click="doLogin" v-loading="loading">登录</button>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import utils from 'utils'

  export default {
    name: 'userLogin',
    data() {
      return {
        user: {
          name: '',
          password: '',
        },
        loading: false
      }
    },
    computed: {},
    methods: {
      ...mapActions(['login']),
      doLogin() {
        if (!this.user.name) {
          this.$message({
            type: 'error',
            message: '敢问英雄尊姓大名？'
          })
          return
        }
        this.loading = true
        this.login(this.user).then(userInfo => {
          this.loading = false
          if (!userInfo || utils.isEmpty(userInfo)) {
            console.log('登录成功，但用户信息错误或者为空')
            return
          }
          utils.setUserInfoToCache(userInfo)
          this.$router.push({name: 'indexHome'})
        }).catch(res => {
          console.log(res)
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
    background: url(../images/bg.png) no-repeat;
    background-size: 100%;
  }

  .tips {
    color: #ddd;
    font-size: 10px;
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
    background: rgba(0, 0, 0, .2);
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
    margin-top: 18px;
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
