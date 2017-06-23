/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */

import {LOGIN, LOGOUT} from '../mutation-types'
import api from 'api'
import doAction from '../do-action'

const state = {
  isLogin: false,
  userInfo: {}
}

const mutations = {
  [LOGIN](state, userInfo) {
    state.isLogin = true
    state.userInfo = userInfo
  },
  [LOGOUT](state){
    state.isLogin = false
    state.userInfo = {}
  }
}

const actions = {
  login({commit}, params) {
    return doAction({
      api: api.login,
      params,
      mutationName: LOGIN
    })
  },
  logout({commit}) {
    return doAction({
      api: api.logout,
      mutationName: LOGOUT
    })
  }

}
export default {
  state,
  actions,
  mutations
}
