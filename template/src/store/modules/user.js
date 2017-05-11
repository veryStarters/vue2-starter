/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */

import api from 'api'

//登录
const LOGIN = 'LOGIN'
//登出
const LOGOUT = 'LOGOUT'

const state = {
  isLogin: '',
  userInfo: {}
}

const mutations = {
  [LOGIN](state, userInfo) {
    state.userInfo = userInfo
    state.isLogin = true
  },
  [LOGOUT](state){
    state.userInfo = {}
    state.isLogin = false
  }
}

const actions = {
  async login({commit}, userInfo) {
    commit('LOGIN', userInfo)
  },
  logout({commit}) {
    commit('LOGOUT')
  }

}
export default {
  state,
  actions,
  mutations
}
