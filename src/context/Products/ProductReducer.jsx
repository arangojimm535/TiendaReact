import { GET_ONE_PRODUCT, GET_PRODUCTS } from "../types";

export default (state, action)=> {
    const { payload, type } = action;
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case GET_ONE_PRODUCT:
            return {
                ...state,
                selectedProduct: payload
            }
        default:
            return state;
    }
}
