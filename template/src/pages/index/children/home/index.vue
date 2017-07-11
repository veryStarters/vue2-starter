<template>
  <div class="home-wrapper">
    <div class="info" v-show="isLogin">
      欢迎你，{{userInfo.name}} | ({{remainingTime}}分钟后登录失效)
    </div>
    <p class="logout">
      <button @click="doLogout">退出系统</button>
    </p>
    <jc-hello></jc-hello>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import utils from 'utils'
  const ceil = Math.ceil
  export default {
    data(){
      return {
        remainingTime: ceil(utils.getLoginRemainingTime() / 60)
      }
    },
    mounted(){
      let timer = setInterval(() => {
        let remainingTime = ceil(utils.getLoginRemainingTime() / 60)
        if (remainingTime < 1) {
          console.log('登录已经失效')
          clearInterval(timer)
          this.$router.push({path: '/user/login'})
          return
        }
        this.remainingTime = remainingTime
      }, 10000)
    },
    computed: {
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
<style scoped>
  .home-wrapper {
    text-align: center;
    line-height: 1.5;
  }
  .info {
    margin: 50px 0;
  }
  .logout{
    margin: 20px;
  }
  .logout button {
    border: 1px solid #eee;
    border-radius: 5px;
    color: #42b983;
    cursor: pointer;
    &:hover {
      color: green;
    }
  }

</style>