/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
import * as types from './mutation-types'

export const test = ({commit}, product) => {
  commit(types.TEST, {
    id: product.id
  })
}