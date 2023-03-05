import { createContext, useReducer, useState, useEffect } from "react";
import ProductReducer from "./ProductReducer";
import {categorias} from './listcategories'

export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
  const [prodcarrousel, setProdcarrousel]= useState([])
  const initialstate = {
    products: [],
    selectedProduct: null,
  };



  
  const [state, dispatch] = useReducer(ProductReducer, initialstate);

  const getProducts = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    setProdcarrousel(data.slice(1, 10));
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  const getOneProduct = async (id) => {
    const res = await fetch("https://fakestoreapi.com/products/" + id);
    const data = await res.json();
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        getOneProduct,
        prodcarrousel,
        products: state.products,
        selectedProduct: state.selectedProduct,
        categorias,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
