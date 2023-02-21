import { createContext, useReducer, useState, useEffect } from "react";
import ProductReducer from "./ProductReducer";
import {categorias} from './listcategories'

export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
  
  const [width, setWidth] = useState("");
  const [heigth, setHeigth] = useState("");
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeigth(window.innerHeight);
  };

  const initialstate = {
    products: [],
    selectedProduct: null,
  };
  const [state, dispatch] = useReducer(ProductReducer, initialstate);

  const getProducts = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
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
        products: state.products,
        selectedProduct: state.selectedProduct,
        width,
        heigth,
        categorias,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
