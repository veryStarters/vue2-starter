<template>
  <div class="user-login-wrapper">
    login in
    <ul>
      <li v-for="item in list">
        {{item}}
      </li>
    </ul>
    <button @click="doLogin">登录</button>
  </div>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
  import api from 'api'
  export default {
    name: 'userLogin',
    data(){
      return {
        list: []
      }
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      ...mapActions(['login']),
      async doLogin (){
        let ret = await api.login({
          name: 'taoqili',
          password: '123456'
        })
        if (ret.code === 0) {
          this.login({name: 'taoqili'})
          console.log(ret.msg)
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