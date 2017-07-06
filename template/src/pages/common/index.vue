<script>
  import utils from 'utils'
  // jsx 写法
  export default {
    name: 'page-common',
    render(h){
      return (
        <div class='common-wrapper'>
          Hello, common!
        </div>
      )
    },
    mounted(){
      let cookie = utils.cookie
      console.log(cookie.get('Admin-Name'))
    }
  }
</script>