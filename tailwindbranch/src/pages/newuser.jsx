import React, {useEffect} from 'react'
import MojoAuth from "mojoauth-web-sdk"
import { Button, Spin } from 'antd'
import { FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { client } from '../../lib/client'
// import Newuser from './newuser'
import { useState } from 'react'
import { useQuery } from 'react-query'



const Newuser = (state, check, email, password) => { 
const history = useNavigate()
const [mounteduser, setMountedUser] = useState()
const { currentUser } = useAuth()
//  const mojoauth = new MojoAuth( "ddfa0887-b4ce-43dc-9ec8-5c4c53522387" );

//  const query = 
//  ` *[email match "${currentUser}"]
// `;
// const { data: madLibs } = useQuery('madLibsList', () => client.fetch(query));



  check = localStorage.getItem('san')
  state = JSON.parse(check)
useEffect(() => {
  if(state === null){
    const token = localStorage.setItem('san', 0)
    return
  }

//   if(currentUser !== 0)(
//     client.fetch(query).then((data)=>{setMountedUser(data)})
//   )
  if(currentUser !== null)(
    client.fetch(query).then((data)=>{setMountedUser(data)})
  )
  console.log(mounteduser)
  return () => {
    // client.fetch(query).then((data)=>{setMountedUser(data)})
  }
}, [currentUser])

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
  {
       state? (
<div className='absolute inset-0 min-h-screen bg-plat flex flex-col justify-center'>
        <div className='flex items-center w-full justify-center'>
       
      </div> 
    <div>
        <>
    {
        <div>
            <div className='flex items-center justify-center'>
               
               
                <Link to={'/register'}>
                <h1 className='text-blk text-2xl text-center  gap-4 flex items-center justify-center uppercase'>{'Lets Set Up Your Account'}<FaArrowRight/></h1>
                </Link>
            
            
            </div>
      
        </div>
        }
     </>
       
    
    </div>  
  </div>
       ) : <Spin size={'large'}/>



  }

  {/* {mounteduser ? mounteduser[0].firstname : 'loading'} */}
   
  </>
   
  )
}

  export const mojoauth = new MojoAuth("ddfa0887-b4ce-43dc-9ec8-5c4c53522387",{
    source:[{type:'email', feature:'otp'}],
});
export default Newuser