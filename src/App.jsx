import React from "react";
import { ProductsList } from "./components/ProductsList";
import { Nav } from "./components/Nav";
import { ProductsContextProvider } from "./context/Products/ProductsContext";
import Search from "./components/Search";
import { Categories } from "./components/Categories";
import { Carrousel } from "./components/carrousel";

export function App() {
  return (
    <ProductsContextProvider>
      <Nav />
      <div className="md:hidden sm:flex sm:justify-evenly sm:mx-auto max-w-full">
        <div className="flex flex-row justify-evenly max-w-full">
          <div className="w-64">
            <Search />
          </div>
          <button className="w-24 bg-red-200 rounded-full ">Tienda</button>
        </div>
      </div>
      <div
        style={
          window.screen.width < 767
            ? { width: "100%", height: "400px" }
            : { width: "100%", height: "500px" }
        }
      >
        <Carrousel />
      </div>
      <div className="max-w-full mx-auto mt-2">
        <Categories />
      </div>
      <div className="mt-6 max-w-full">
        <h2 className="sm:text-4xl md:text-5xl text-6xl mt-2 sm:pt-2 text-center font-semibold text-red-300 border-red-300 border-2 rounded-3xl max-w-fit px-5 mx-auto pb-2.5">
          Productos Nuevos
        </h2>
        <ProductsList />
      </div>
    </ProductsContextProvider>
  );
}
