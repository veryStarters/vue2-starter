/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/4/24
 */
export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  })
}