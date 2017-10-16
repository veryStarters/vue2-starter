/**
 * Created by Webstorm.
 * 全局mixins，尽可能少用；应以局部mixins代替
 * @author taoqili
 * @date 2017/7/11
 */
import Vue from 'vue'
import utils from 'utils'
import config from 'config'
let loginTimer
export default {
  init(){
    Vue.mixin({
      data() {
        return {
          remainingTime: Math.ceil(utils.getLoginRemainingTime() / 60)
        }
      },
      methods: {
        /**
         * 标题修改
         * @param title
         */
        setTitle(title) {
          let meta = this.$route && this.$route.meta ? this.$route.meta : {}
          document.title = title || meta.title || config.appName || ''
        },
        /**
         * 登录状态监控
         */
        addLoginMonitor(){
          if (loginTimer){
            clearInterval(loginTimer)
          }
          if (config.isStatic) {
            return
          }
          loginTimer = setInterval(() => {
            let {auth = config.defaultAuth} = this.$route.meta || {}
            if (!auth) {
              return
            }
            let remainingTime = Math.ceil(utils.getLoginRemainingTime() / 60)
            if (remainingTime < 1) {
              this.$message({type: 'error', message: '登录已经失效，请重新登录！'})
              clearInterval(loginTimer)
              this.$router.push({name: 'userLogin'})
              return
            }
            this.remainingTime = remainingTime
          }, 10000)
        }
      }
    })
  }
}