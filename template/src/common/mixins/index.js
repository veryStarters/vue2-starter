/**
 * Created by Webstorm.
 * 全局mixins，尽可能少用；应以局部mixins代替
 * @author taoqili
 * @date 2017/7/11
 */
import Vue from 'vue'
export default {
  init(){
    Vue.mixin({
      mounted: function () {
        this.setTitle()
      },
      methods: {
        setTitle(title){
          document.title = title || this.$route.meta.title || ''
        }
      }
    })
  }
}