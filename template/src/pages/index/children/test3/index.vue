<script>
  import {mapGetters, mapActions} from 'vuex'
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
    render(h){
      return (
        <div class='index-children-test3-wrapper'>
          <div class='content' v-loading={this.loading} element-loading-text='数据加载中'>{this.message}</div>
        </div>
      )
    },
    mounted(){
      api.getTest().then(res => {
        this.loading = false
        setTimeout(_ => {
          this.message = res.data
        }, 200)
      })
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