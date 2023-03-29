import { SET_ONE_PRODUCT, SET_PRODUCTS, SET_VIEW_LOGIN, CHANGE_VIEW_LOGIN } from '../types'

export default (state, action) => {
  const { payload, type } = action
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload
      }
    case SET_ONE_PRODUCT:
      return {
        ...state,
        selectedProduct: payload
      }
    case SET_VIEW_LOGIN:
      return {
        ...state,
        showLogin: payload
      }
    case CHANGE_VIEW_LOGIN:
      return {
        ...state,
        register: payload
      }
    default:
      return state
  }
}
