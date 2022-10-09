import React, {useEffect} from 'react'
import MojoAuth from "mojoauth-web-sdk"
import { Button, Spin } from 'antd'
import { FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'



const welcome = (state, check) => {
 const mojoauth = new MojoAuth( "ddfa0887-b4ce-43dc-9ec8-5c4c53522387" );
 mojoauth.signInWithStateID()
 .then( payload => {
     console.log(payload)
  })
  check = localStorage.getItem('san')
  state = JSON.parse(check)
useEffect(() => {
  if(state === null){
    const token = localStorage.setItem('san', 0)
    return
  }
  console.log(state)
  return () => {
    
  }
}, [state])

const Redirect = () => {
    return(
        <>
        <Link to={state.authenticated === true ? '/dashboard' :  '/register'}>
        <i ><FaArrowRight /></i>
        </Link>
        </>
    )
}

  
  return (
  <>
   <div className='absolute inset-0 min-h-screen bg-plat flex flex-col justify-center'>
        <div className='flex items-center w-full justify-center'>
       <Spin size={'large'}/>
      </div> 
    <div>
        <>
    {
        <div>
            <div className='flex items-center justify-center'>
            <h1 className='text-blk text-2xl text-center mt-10 gap-4 flex items-center justify-center uppercase'>{state === 0 ? 'Lets get you set up' : 'getting things ready'}<Redirect/></h1>
            
            </div>
         {/* <div className='w-full flex justify-center'>
            <button>{state === 0 ? 'Register' : 'Continue' }</button>
            </div> */}
        </div>
        }
     </>
       
    
    </div>  
  </div>
  </>
   
  )
}

export default welcome