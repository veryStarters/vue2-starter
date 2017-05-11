/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'


import user from './modules/user'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    user
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
