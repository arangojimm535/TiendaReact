import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/Products/ProductsContext";
import ProductCard from "./ProductCard";
export function ProductsList() {
  const { getProducts,products } = useContext(ProductsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="grid sm:mx-4 md:grid-cols-5 md:gap-6 md:mx-20 sm:grid-cols-2 sm:gap-2  mt-4">
      {products.map((product) => (
      <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
