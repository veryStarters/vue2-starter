<template>
  <div class="index-children-test3-wrapper">
    <div class="content" v-loading="loading" element-loading-text="数据加载中">{{message}}</div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  import api from 'api'
  export default {
    name: 'page-index-children-test3',
    components: {},
    data() {
      return {
        loading: true,
        message: ''
      }
    },
    mounted(){
      api.getTest().then(res => {
        this.loading = false
        setTimeout(_ => {
          this.message = res.data
        }, 200)
      })
    },
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapActions([])
    }
  }
</script>
<style lang="postcss" scoped>
  .index-children-test3-wrapper {
    text-align: center;
  }
  .content {
    margin-top: 50px;
    padding: 20px;
  }
</style>