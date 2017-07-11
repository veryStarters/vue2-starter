import {mapActions, mapGetters} from 'vuex'
import utils from 'utils'
const ceil = Math.ceil
export default {
  data(){
    return {
      remainingTime: ceil(utils.getLoginRemainingTime() / 60)
    }
  },
  mounted(){
    let timer = setInterval(() => {
      let remainingTime = ceil(utils.getLoginRemainingTime() / 60)
      if (remainingTime < 1) {
        console.log('登录已经失效')
        clearInterval(timer)
        this.$router.push({path: '/user/login'})
        return
      }
      this.remainingTime = remainingTime
    }, 10000)
  },
  computed: {
    ...mapGetters(['isLogin', 'userInfo'])
  },
  methods: {
    ...mapActions(['logout']),
    doLogout(){
      this.logout().then(() => {
        utils.removeUserInfoFromCache()
        this.$router.push({path: '/user/login'})
      });
    }
  }
}