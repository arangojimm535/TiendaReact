import { useContext } from 'react'
import { AppContext } from '../context/Products/AppContext'
import { AnimatePresence, motion } from 'framer-motion'

export function InicioSesion () {
  const { showLogin, register, setShowLogin, changeViewLogin } = useContext(AppContext)
  return (
    <>
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ y: '-150%' }}
            animate={{ y: '0' }}
            exit={{ y: '-150%' }}
            transition={{ duration: 0.8 }}
            className='w-full min-h-screen fixed top-0 flex backdrop-blur-sm z-20 overflow-y-hidden'
          >
            <div
              className='m-auto relative bg-gray-200 bg-opacity-80 w-5/6 h-5/6 rounded-3xl sm:flex sm:flex-col grid grid-cols-2 z-30'
            >
              <motion.img layout className={`${register ? 'rounded-r-xl order-2' : 'rounded-l-xl'} object-center w-full min-h-full sm:max-h-44 sm:rounded-t-xl`} src='../src/static/login.jpg' alt='login' />
              <motion.div layout className='flex flex-col content-center justify-center relative sm:py-2 py-5 '>
                <span onClick={() => { setShowLogin(showLogin); if (register) changeViewLogin(register) }} className={`${register ? '-right-full pr-5' : 'right-7'} absolute sm:right-7 sm:-top-40 sm:text-gray-50  top-4 font-bold text-2xl cursor-pointer`}>X</span>
                <form className='flex flex-col content-center justify-center'>
                  <h3 className='text-center sm:text-2xl text-4xl font-bold sm:mb-2 mb-4'>{register ? 'Registrarse' : 'Inicio de Sesión'}</h3>
                  <div className='flex flex-col mx-auto w-3/4'>
                    <label>Usuario o Email</label>
                    <input placeholder='Usuario o Email' className='rounded-xl py-1 pl-2 focus:outline-none focus:border-red-100 focus:ring-1 focus:ring-red-100 mb-4 bg-gray-100 ' type='text' />
                  </div>
                  <div className='flex flex-col mx-auto w-3/4'>
                    <label>Contraseña</label>
                    <input placeholder='Contraseña' className='rounded-xl py-1 pl-2 focus:outline-none focus:border-red-100 focus:ring-1 focus:ring-red-100 bg-gray-100 ' type='password' />
                  </div>
                  <div className='mx-auto mt-4'>
                    <input value={register ? 'Registrarse' : 'Iniciar Sesión'} className='rounded-xl text-xl font-bold bg-red-200 opacity-80 max-w-fit px-4 my-2 cursor-pointer hover:bg-red-300 hover:opacity-100' type='submit' />
                  </div>
                </form>
                <hr className='w-3/4 mx-auto my-2 border-gray-500 ' />
                <p className='text-center'>o Ingresa con tu cuenta de:</p>
                <div className='flex flex-row gap-10 mx-auto mt-3'>
                  <img className='w-12 h-12 cursor-pointer' src='../src/static/facebook-logo.png' alt='facebook-logo' />
                  <img className='w-12 h-12 cursor-pointer' src='../src/static/google-logo.png' alt='google-logo' />
                </div>
                <hr className='w-3/4 mx-auto my-2 border-gray-500 ' />
                <button>Haga click para <span onClick={() => changeViewLogin(register)} className='text-red-300 font-bold'>{register ? 'Iniciar Sesión' : 'Registrarse'}</span></button>
              </motion.div>
            </div>
          </motion.div>)}
      </AnimatePresence>

    </>

  )
}
