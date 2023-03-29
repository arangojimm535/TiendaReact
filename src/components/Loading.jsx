import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Loading () {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 2000)
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='fixed top-0 min-w-full min-h-screen bg-purple-50 z-20 grid place-items-center'
          >
            <img className='sm:w-48 sm:h-48 w-96 h-96 rounded-full' src='./images/descarga.jpg' alt='' />
          </motion.div>)}
      </AnimatePresence>
    </>
  )
}

export default Loading
