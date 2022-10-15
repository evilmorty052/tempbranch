import React, {useEffect} from 'react'
import MojoAuth from "mojoauth-web-sdk"
import { Button, Spin } from 'antd'
import { FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { getAuth } from '../contexts/mojocontext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { client } from '../../lib/client'
import { useQuery } from 'react-query'
import MotionCard from './Aboutus'


const welcome = () => {
const history = useNavigate()
const {user, setUser, userInfo, fetchuser, handleredirect, test2} = getAuth()
const [ready, setReady] = useState(false)


  
useEffect(() => {
  const getReady = () => {
    setTimeout(()=>{setReady(true)},10000)
  }
 
  getReady()
  
}, [ready])

if(ready){
  return(
    <>
    <div className='flex flex-col absolute inset-0 min-h-screen justify-center items-center bg-plat'>
     <div className='flex w-full items-center justify-center'>
       <div className='flex flex-col items-center justify-center'>
         {/* <Spin size='large' spinning={true}/> */}
         <div className='flex flex-col gap-5'>
         <h2 onClick={()=>{history('/dashboard')}} className='text-2xl md:text-4xl gap-5 flex items-center justify-center uppercase font-poppins text-blk tracking-wide'><span className='tracking-wide'>Dashboard</span> <span className='text-2xl jello-horizontal'><FaArrowRight/></span> </h2>
         </div>
       </div>
     </div>
   </div>
   </>
  )
 
}

else if (!ready){

  return( 

    <>
    <div className='flex flex-col absolute inset-0 min-h-screen justify-center items-center bg-plat'>
      <div className='flex w-full items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <Spin size='large' spinning={true}/>
          <div className='flex'>
          <h2 className='text-2xl' onClick={()=>{setReady(true)}}>Quick Background Check  </h2>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}




  
 
}

export default welcome