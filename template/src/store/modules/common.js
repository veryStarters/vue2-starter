/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
import {doAction} from '../util'
import api from 'api'

const state = {
  hasPermission: false
}

const mutations = {}

const actions = {
  getMenus({commit}, params) {
    return doAction({
      api: api.getMenus,
      params
    })
  }
}
export default {
  state,
  actions,
  mutations
}
