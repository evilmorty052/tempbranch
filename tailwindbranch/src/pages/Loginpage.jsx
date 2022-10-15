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
import { actionCodeSettings } from '../utils/init-firebase'


// import './Loginpage.css'

export default function Loginpage(sanityuser) {
  const history = useNavigate()
  const { signInWithGoogle, login, sendSignInLink } = useAuth()
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
   
    <>
    <div className='absolute inset-0 bg-plat min-h-screen flex flex-col items-center justify-center  '>

      <h2 className='text-4xl text-slate-600 text-center font-bold mb-5 font-poppins uppercase '>Welcome</h2>
      
      {/* <Card maxW='md' mx='auto' mt={4} > */}
      
        <form className='bg-white rounded-3xl py-10 px-10 shadow-2xl '
          onSubmit={async e => {
            // setIsSubmitting(true)
            e.preventDefault()
         
            localStorage.setItem('email', JSON.stringify(email))&history('/login2')
          }
       }
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            {/* <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                name='password'
                type='password'
                autoComplete='password'
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl> */}
            {/* <PasswordField /> */}
            <Button
              type='submit'
              colorScheme='blue'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
              NEXT
            </Button>
            
          </Stack>
        </form>
        {/* <HStack justifyContent='space-between' my={4}>
          <Button variant='link'>
            <Link to='/register'><span className='text-slate-600 text-md'>Forgot Password?</span></Link>
          </Button>
          <Button variant='link' onClick={() => history('/login2')}>
          <span className='text-slate-600 text-md'>Register</span>
          </Button>
        </HStack> */}
        {/* <DividerWithText my={6}>OR</DividerWithText> */}
        {/* </Card> */}
        </div>
  
    </>
       
    
  )
}
