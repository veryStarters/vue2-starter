/**
 * Created by Webstorm.
 * 全局指令，尽可能少用；应以局部指令代替
 * @author taoqili
 * @date 2017/7/11
 */
import Vue from 'vue'
export default {
  init(){
    /**
     * 聚焦指令v-focus
     */
    Vue.directive('focus', {
      bind(){
      },
      inserted(el) {
        el.focus()
      },
      update(){
      },
      componentUpdated(){
      },
      unbind(){
      }
    })
  }
}
