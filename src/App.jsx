import { React } from 'react'
import { ProductsList } from './components/ProductsList'
import { Nav } from './components/Nav'
import { ProductsContextProvider } from './context/Products/ProductsContext'
import { Categories } from './components/Categories'
import { Carrousel } from './components/Carousel'
import { InicioSesion } from './components/Login'
import { mainslider, shippingslider } from './context/imgslider'
import Loading from './components/Loading'

export function App () {
  return (
    <ProductsContextProvider>
      <Loading />
      <Nav />
      <div className='relative'>
        <InicioSesion />
      </div>
      <div className='w-full sm:mt-4'>
        <Carrousel
          images={mainslider}
          measures={window.screen.width < 767
            ? { width: '95%', height: '400px' }
            : { width: '95%', height: '500px' }}
        />
      </div>
      <div className='w-11/12 mx-auto sm:hidden'>
        <img src='../src/static/seccion-envioseguro.png' alt='seccion-envioseguro' />
      </div>
      <div className='md:hidden sm:mt-2 mt-5'>
        <Carrousel
          images={shippingslider} measures={window.screen.width < 767
            ? { width: '95%', height: '130px' }
            : { width: '95%', height: '200px' }}
        />
      </div>
      <div className='max-w-full mx-auto mt-3'>
        <Categories />
      </div>
      <div className='mt-6 max-w-full'>
        <h2 className='sm:text-4xl md:text-5xl text-6xl mt-2 sm:pt-2 text-center font-semibold text-red-300 border-red-300 border-2 rounded-3xl max-w-fit px-5 mx-auto pb-2.5'>
          Productos Nuevos
        </h2>
        <ProductsList />
      </div>
    </ProductsContextProvider>
  )
}
