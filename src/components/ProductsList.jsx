import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/Products/ProductsContext";
import ProductCard from "./ProductCard";
export function ProductsList() {
  const { getProducts,products } = useContext(ProductsContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products)
  return (
    <div className="grid md:grid-cols-5 md:gap-6 md:mx-20 md:container grid-cols-2 gap-2  mx-4">
      {products.map((product) => (
      <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
