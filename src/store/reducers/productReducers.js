import { REGISTER_PRODUCT } from '../constant/constant'

export const productReducer = (state = {}, action) => {
  const product = action.payload
  switch (action.type) {
    case REGISTER_PRODUCT:
      return { loading: product.loading, ...product }
    default:
      return state
  }
}
