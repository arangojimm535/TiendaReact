import React from "react";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  const resumeDescripcion = (descripcion) => {
    return descripcion.substring(0,40).concat("...");
  }
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      className=" rounded-xl bg-slate-50 shadow-2xl min-h-min grid grid-flow-row"
    >
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ delay: 0.4, duration: 1.5 }}
        animate={{ opacity: 1 }}
        className="object-cover rounded-t-xl"
        src={product.images[0]}
      />
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: .6, duration: 1.5 }}
        animate={{ opacity: 1 }}
        className="flex flex-col justify-center"
      >
        <p className="sm:text-sm md:text-xl text-center">
          {product.category.name}
        </p>
        <h2
          onClick={() => getOneProduct(product.id)}
          className="sm:text-sm md:text-3xl font-bold text-center"
        >
          {product.title}
        </h2>
        <p className="sm:text-sm md:text-xl text-center opacity-60">
          {resumeDescripcion(product.description)}
        </p>
        <p className="md:text-4xl font-bold text-center">${product.price}</p>
        <button className="bg-red-200 rounded-full md:p-1 sm:mx-4 sm:my-2 md:mx-10 md:my-2 ">
          Añadir al carrito
        </button>
      </motion.div>
    </motion.div>
  );
}

export default ProductCard;
