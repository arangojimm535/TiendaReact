import React from 'react'
import { motion } from 'framer-motion'

function ProductCard ({ product }) {
  const resumeDescripcion = (descripcion) => {
    return descripcion.substring(0, 40).concat('...')
  }
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className=' rounded-xl bg-slate-50 shadow-2xl min-h-min grid grid-flow-row'
    >
      <motion.img
        whileHover={{ scale: 1.2 }}
        className='object-cover rounded-t-xl overflow-hidden max-w-full'
        src={product.images[0]}
      />
      <div
        className='flex flex-col justify-center'
      >
        <p className='sm:text-sm md:text-xl text-center'>
          {product.category.name}
        </p>
        <h2
          // onClick={() => getOneProduct(product.id)}
          className='sm:text-sm md:text-3xl font-bold text-center'
        >
          {product.title}
        </h2>
        <p className='sm:text-sm md:text-xl text-center opacity-60'>
          {resumeDescripcion(product.description)}
        </p>
        <p className='md:text-4xl font-bold text-center'>${product.price}</p>
        <button className='bg-red-100 rounded-full md:p-1 sm:mx-4 sm:my-2 md:mx-10 md:my-2 '>
          Comprar
        </button>
      </div>
    </motion.div>
  )
}

export default ProductCard
