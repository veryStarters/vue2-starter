/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

import common from './modules/common'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    common,
    user
  }
})
