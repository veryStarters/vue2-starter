<template>
  <div class="index-test14-wrapper">
    <breadcrumb :option="breadcrumbOption"></breadcrumb>
    Hello, world! test14
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'page-index-test14',
    components: {},
    data() {
      return {
        breadcrumbOption: {
          list: [
            {
              name: 'indexHome',
              label: '首页'
            },
            {
              name: 'indexTest14',
              label: '测试14'
            }
          ]
        }
      }
    },
    mounted(){},
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapActions([])
    }
  }
</script>
<style lang="postcss" scoped>
  .index-test14-wrapper {}
</style>
