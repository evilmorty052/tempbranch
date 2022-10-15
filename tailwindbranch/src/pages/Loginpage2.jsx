import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate, Navigate,useLocation} from 'react-router-dom'
import { Navbar } from '../components'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import useMounted from '../hooks/useMounted'
import { client } from '../../lib/client'
// import './Loginpage.css'
import beams from "../assets/beams.jpg"

export default function Loginpage2(sanityuser) {
  const history = useNavigate()
  const { signInWithGoogle, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const [sanitydata, setSanitydata] = useState([])
  // const mounted = useRef(false)
  const location = useLocation()
  sanityuser ={email, password}
   
  // useEffect(() => {
  //   mounted.current = true
  //   return () => {
  //     mounted.current = false
  //   }
  // }, [])

  const mounted = useMounted()

  function handleRedirectToOrBack() {
    // console.log(location?.state)
    // <Navigate to='/profile'/>
    // if (location.state) {
    //   history.replace(location.state?.from)
    // } else {
      history('/login2')
    // }
  }
  const query = 
  ` *[email match "${email}"&& password =="${password}"]
`;


  return (
   
    <div className="absolute inset-0 bg-plat min-h-screen flex flex-col items-center justify-center ">
    
       <h2 className='text-4xl text-slate-600 text-center font-bold mb-5 uppercase font-poppins'>Password</h2> 
       
      
      
      
        <form className='bg-white rounded-3xl py-10 px-10 shadow-2xl'
          onSubmit={async e => {
            // setIsSubmitting(true)
            e.preventDefault()
            
            localStorage.setItem('password', JSON.stringify(password))&history('/login3')
       
         
            
          }
       }
        >
          <Stack spacing='6' >
            {/* <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl> */}
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                name='password'
                type='password'
               
                autoComplete='password'
                value={password}
                required
                
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            {/* <PasswordField /> */}
            <Button
              type='submit'
              colorScheme='blue'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
              Sign in
            </Button>
          </Stack>
        </form>
        
        {/* <Button className='w-full bg-blue-gradient py-2 rounded-full'
          variant='outline'
          width='full'
          colorScheme='red'
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then(user => {
                handleRedirectToOrBack()
                console.log(user)
              })
              .catch(e => console.log(e.message))
          }
        >
          Sign in with Google
        </Button> */}
      
        </div>
  
  )
}
