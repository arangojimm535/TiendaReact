import React from "react";
import { ProductsList } from "./components/ProductsList";
import { Nav } from "./components/Nav";
import { ProductsContextProvider } from "./context/Products/ProductsContext";
import Search from "./components/Search";
import { motion } from "framer-motion";
import {Categories} from "./components/Categories";

export function App() {
  return (
    <ProductsContextProvider>
      <Nav />
      <div className="md:hidden sm:flex sm:justify-evenly sm:mx-auto max-w-full">
        <div className="flex mx-auto">
          <Search />
        </div>
        <div>
          <button className="w-24 py-1 bg-red-200 rounded-full mx-2">
            Tienda
          </button>
        </div>
      </div>
      <div>
        <Categories/>
      </div>
      <div className="mt-6">
        <ProductsList />
      </div>
    </ProductsContextProvider>
  );
}
