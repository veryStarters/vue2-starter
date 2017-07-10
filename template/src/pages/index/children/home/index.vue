<template>
  <div class="home-wrapper">
    <div class="info" v-show="isLogin">
      欢迎你，{{userInfo.name}} | ({{remainingTime}}分钟后登录失效)
    </div>
    <jc-hello></jc-hello>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
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
    methods: {}
  }
</script>
<style scoped>
  .home-wrapper {
    text-align: center;
    padding-top: 60px;
  }

  .info {
    position: absolute;
    top: 100px;
    right: 10px;
  }
</style>