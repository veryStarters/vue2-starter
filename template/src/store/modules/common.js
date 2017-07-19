/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
import * as types from '../mutation-types'
import {doAction} from '../util'
import api from 'api'

const state = {
  menuInfo: {},
}

const mutations = {
  [types.MENUS](state, menuInfo) {
    state.menuInfo = menuInfo
  }
}

const actions = {
  getMenus({commit}, params) {
    return doAction({
      api: api.getMenus,
      params,
      mutationName: types.MENUS
    })
  }
}
export default {
  state,
  actions,
  mutations
}
