/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 * @desc 重要！本文件为系统自动生成文件，如需使用，请在store/index.js中导入本文件并设置对应的模块，否则不会生效！！
 */
import {doAction} from '../util'
import api from 'api'

// state定义
const state = {
  key: 'value'
}

// mutations定义
const mutations = {}

// actions定义
const actions = {
  getTest({commit}, params) {
    return doAction({
      api: api.getTest,
      params
    })
  }
}

export default {
  state,
  mutations,
  actions
}