<template>
  <div class="about-wrapper">
    <pc-admin-layout :topbar="1" theme="light" :menus="menus"></pc-admin-layout>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
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
    }
  }
</script>
<style lang="postcss" scoped>
  .about-wrapper {
  }
</style>