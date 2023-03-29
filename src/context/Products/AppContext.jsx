import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import { categorias } from './listcategories'

export const AppContext = createContext()
export function AppContextProvider (props) {
  const useVariants = () => {
    const initialstate = { products: [], selectedProduct: null, showLogin: false, register: false }
    const [state, dispatch] = useReducer(AppReducer, initialstate)
    const { showLogin, register, products, selectedProduct } = state
    return {
      showLogin,
      register,
      products,
      selectedProduct,
      setAllProducts: (data) => dispatch({
        type: 'SET_PRODUCTS',
        payload: data
      }),
      setOneProduct: (data) => dispatch({
        type: 'SET_ONE_PRODUCT',
        payload: data
      }),
      setShowLogin: (showLogin) => dispatch({
        type: 'SET_VIEW_LOGIN',
        payload: !showLogin
      }),
      changeViewLogin: (register) => dispatch({
        type: 'CHANGE_VIEW_LOGIN',
        payload: !register
      })
    }
  }
  const { setAllProducts, setOneProduct, setShowLogin, changeViewLogin, showLogin, register, products, selectedProduct } = useVariants()
  const getProducts = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await res.json()
    setAllProducts(data)
  }
  const getProduct = async (id) => {
    const res = await fetch('https://fakestoreapi.com/products/' + id)
    const data = await res.json()
    setOneProduct(data)
  }

  return (
    <AppContext.Provider
      value={{
        getProducts,
        getProduct,
        setShowLogin,
        changeViewLogin,
        showLogin,
        register,
        products,
        selectedProduct,
        categorias
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
