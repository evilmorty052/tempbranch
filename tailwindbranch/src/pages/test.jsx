import React, { Children } from 'react'
import { Navbar } from '../components'

const test = ({children}) => {
  return (
    <>
    <Lay>
      <div className='h-[100vh] bg-white  fixed inset-0'>

      </div>
    </Lay>
      </>
  )
}


function Lay({Children}) {
  return(
<>
<Navbar/>
    <div className=' bg-slate-400   flex h-[100vh] '>
{Children}
    </div>
</>
  )
}
export default test