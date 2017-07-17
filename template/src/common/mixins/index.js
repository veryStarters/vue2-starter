/**
 * Created by Webstorm.
 * 全局mixins，尽可能少用；应以局部mixins代替
 * @author taoqili
 * @date 2017/7/11
 */
import Vue from 'vue'
import utils from 'utils'
export default {
  init(){
    Vue.mixin({
      data() {
        return {
          remainingTime: Math.ceil(utils.getLoginRemainingTime() / 60)
        }
      },
      mounted: function () {
        this.setTitle()
      },
      methods: {
        /**
         * 标题修改
         * @param title
         */
        setTitle(title){
          document.title = title || this.$route.meta.title || ''
        },
        /**
         * 登录状态监控
         */
        loginMonitor(){
          let timer = setInterval(() => {
            let remainingTime = Math.ceil(utils.getLoginRemainingTime() / 60)
            if (remainingTime < 1) {
              console.log('登录已经失效，请重新登录！')
              clearInterval(timer)
              this.$router.push({path: '/user/login'})
              return
            }
            this.remainingTime = remainingTime
          }, 10000)
        }
      }
    })
  }
}