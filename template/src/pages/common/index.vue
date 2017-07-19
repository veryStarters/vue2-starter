<script>
  // jsx 写法演示
  import {mapGetters} from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-common',
    render(h){
      return (
        <div class='common-wrapper'>
          Hello, common! {this.userInfo.name}
        </div>
      )
    },
    computed: {
      ...mapGetters(['userInfo'])
    }
  }
</script>