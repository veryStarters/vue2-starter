<template>
  <div class="test-home-wrapper">
    这个页面同样采用了pc-admin这个布局，更换了整体风格样式
    <p>{{res}}</p>
    <p>{{env}}</p>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import api from 'api'
  export default {
    name: 'page-test-home',
    data() {
      return {
        res: '',
        env: ''
      }
    },
    mounted() {
      api.getAbout().then(res => {
        this.res = 'getAbout接口返回:' + JSON.stringify(res)
        this.env = 'config/index.js中定义的envs:' + process.env.SOMETHING
      })
    }
  }
</script>
<style lang="postcss" scoped>
  .test-home-wrapper {
    line-height: 2;
  }
</style>