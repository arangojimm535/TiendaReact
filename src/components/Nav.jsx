import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ProductsContext } from '../context/Products/ProductsContext'
import { Search } from './Search'

export function Nav () {
  const { showLogin, register, setShowLogin, changeViewLogin } = useContext(ProductsContext)
  return (
    <>
      <nav
        className='flex flex-row items-center justify-around w-11/12 mx-auto'
      >
        <button className='md:hidden bg-red-100 rounded-full'>
          <img src='./images/burguer.png' alt='' className='w-10 h-10 p-2' />
        </button>
        <div className='flex'>
          <img
            src='./images/descarga.jpg'
            alt='logo'
            className='object-cover h-28 w-28'
          />
        </div>
        <div
          className='md:w-96 sm:hidden'
        >
          <Search />
        </div>
        <motion.div className='sm:hidden'>
          <ul className='flex flex-row'>
            <li>
              <button
                onClick={() =>
                  setShowLogin(showLogin)} className='font-semibold hover:text-red-300'
              >
                Iniciar sesión
              </button>
            </li>
            <span className='font-semibold px-2'>/</span>
            <li>
              <button
                onClick={() => {
                  setShowLogin(showLogin)
                  changeViewLogin(register)
                }} className='font-semibold hover:text-red-300'
              >
                Registrarse
              </button>
            </li>
          </ul>
        </motion.div>

        <div className='flex flex-row'>

          <img
            onClick={() => setShowLogin(showLogin)}
            src='./images/user.png'
            alt=''
            className='object-cover md:hidden sm:mr-5 sm:h-8 sm:w-8'
          />

          <img
            src='./images/bag.png'
            alt=''
            className='object-cover h-10 w-10 sm:h-8 sm:w-8'
          />

        </div>
      </nav>
      <div className='md:hidden flex flex-row gap-4 w-11/12 mx-auto'>
        <div className='w-4/5'>
          <Search />
        </div>
        <div className='w-1/5'>
          <button className='bg-red-100 rounded-full min-w-full py-1'>Tienda</button>
        </div>
      </div>
    </>
  )
}
