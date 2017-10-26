<template>
  <div class="about-wrapper">
    <pc-admin-layout :topbar="1" theme="light" :menus="menus"></pc-admin-layout>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import api from 'api'
  export default {
    name: 'page-about',
    components: {},
    data() {
      return {
        menus: [
          {
            name: 'aboutHome',
            label: '首页'
          },
          {
            name: 'aboutTest1',
            label: '测试1'
          }
        ]
      }
    },
    mounted() {
      api.getAbout().then(res => {
        console.log('服务端返回:' + JSON.stringify(res))
        console.log('config/index.js中定义的envs:' + process.env.SOMETHING)
      })
    }
  }
</script>
<style lang="postcss" scoped>
  .about-wrapper {
  }
</style>