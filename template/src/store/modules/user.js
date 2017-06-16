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
  isLogin: false,
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
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    localStorage.setItem('isLogin', '1')
    commit('LOGIN', userInfo)
  },
  logout({commit}) {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('isLogin')
    commit('LOGOUT')
  }

}
export default {
  state,
  actions,
  mutations
}
