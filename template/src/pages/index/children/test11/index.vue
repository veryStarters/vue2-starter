<template>
  <div class="index-test11-wrapper">
    <breadcrumb :option="breadcrumbOption"></breadcrumb>
    <p>订单到底是什么东西？</p>
    <p><button @click="gotoTest2">test11</button></p>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'page-index-test11',
    data() {
      return {
        breadcrumbOption: {
          list: [
            {
              name: 'indexHome',
              label: '首页'
            },
            {
              name: 'indexTest13',
              label: '测试13'
            },
            {
              name: 'indexTest11',
              label: '测试11'
            }
          ]
        }
      }
    },
    computed: {
      ...mapGetters([])
    },
    mounted(){
    },
    methods: {
      ...mapActions([]),
      gotoTest2(){
        this.$router.push({name: 'indexTest12'})
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .index-test11-wrapper {
  }
</style>