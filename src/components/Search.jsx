import React from 'react'

export function Search () {
  return (
    <form className='w-full relative'>
      <input
        type='text'
        placeholder='Busca tu producto'
        className='w-11/12 pl-3 py-1 border rounded-full focus:outline-none focus:border-red-100 focus:ring-1 focus:ring-red-100'
      />
      <button type='submit' className=' bg-red-100 rounded-full px-6 py-1 absolute right-0'>
        Buscar
      </button>
    </form>

  )
}
