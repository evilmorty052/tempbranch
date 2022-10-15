import React from 'react'
import { getAuth } from '../contexts/mojocontext'
import { Spin } from 'antd'
import { useEffect } from 'react'
// import { Spin } from 'antd'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'


const log = () => {
const history = useNavigate()
const {login, fetchuser, handleredirect, userInfo, setUser, user, isAuth, setIsAuth} = getAuth()

useEffect(() => {
 login()


  
}, [])

useEffect(() => {
  if(isAuth){
    console.log(userInfo.user.identifier)
    if(isAuth){
      fetchuser()
    }
  }

  // return () => {
    
  // }
}, [isAuth])



  return (
    <>
    <div className={isAuth?'absolute inset-0 min-h-screen bg-plat items-center flex flex-col justify-center z-50' :'hidden'}>
        <div>
             {/* <h1>{user.length < 1 ? 'user is one' : ''}  </h1> */}
            {/* <h1 className='text-4xl ' onClick={()=> login()}>LOGIN</h1> */}
            <h1 className='text-4xl flex items-center justify-center' >Quick Security Check <FaArrowRight/> </h1>
        </div>
        
    </div>
    <div id={ "mojoauth-passwordless-form" } />
    </>
  )
}

export default log