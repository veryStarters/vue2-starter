/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}