import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
  <Navbar/>
    <div className='h-[h-100vh-400px]'>
      {children}
    </div>
      </>
  )
}

export default Layout