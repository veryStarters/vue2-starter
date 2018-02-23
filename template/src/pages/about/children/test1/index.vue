<template>
  <div class="test-test1-wrapper">
    <breadcrumb :option="breadcrumbOption"></breadcrumb>
    <el-steps :space="100" :active="1">
      <el-step title="步骤 1" icon="edit"></el-step>
      <el-step title="步骤 2" icon="upload"></el-step>
      <el-step title="步骤 3" icon="picture"></el-step>
    </el-steps>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'page-test-test1',
    components: {},
    data() {
      return {
        breadcrumbOption: {
          sep: '>',
          list: [
            {
              name: 'aboutHome',
              label: '关于我'
            },
            {
              name: 'aboutTest1',
              label: '测试1'
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
  .test-test1-wrapper {}
</style>
