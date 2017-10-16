<script>
  import {mapGetters, mapActions} from 'vuex'
  import utils from 'utils'
  import api from 'api'
  export default {
    name: 'page-index-test13',
    components: {},
    data() {
      return {
        loading: true,
        message: '',
        breadcrumbOption: {
          list: [
            {
              name: 'indexHome',
              label: '首页'
            },
            {
              name: 'indexTest13',
              label: '测试13'
            }
          ]
        }
      }
    },
    render(h){
      return (
        <div class='index-test13-wrapper'>
          <breadcrumb option={this.breadcrumbOption}></breadcrumb>
          <div class='content' v-loading={this.loading} element-loading-text='数据加载中'>{this.message}</div>
        </div>
      )
    },
    mounted(){
      api.getTest().then(res => {
        this.loading = false
        if(res.code === 0 && res.data) {
          this.message = res.data
        }else {
          this.message = '数据获取失败'
        }
      }).catch(res => {
        this.message = '数据获取失败'
      })
    }
  }
</script>
<style lang="postcss" scoped>
  .index-test13-wrapper {
    text-align: center;
  }

  .content {
    margin-top: 50px;
    padding: 20px;
  }
</style>