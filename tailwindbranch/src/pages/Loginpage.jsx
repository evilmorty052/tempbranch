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
   
    <Layout className="bg-glass">
       
      <header className='text-4xl text-gradient text-center my-12 font-poppins font-extrabold'>
      <h2 className='text-4xl text-gradient text-center'>Welcome Back</h2>
      </header>
      
      <div className="max-w-md mx-auto mt-4 bg-glass2 rounded-lg px-8 py-8 mb-8">
      {/* <Card maxW='md' mx='auto' mt={4} > */}
      
        <form
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
              colorScheme='pink'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
              Sign in
            </Button>
          </Stack>
        </form>
        <HStack justifyContent='space-between' my={4}>
          <Button variant='link'>
            <Link to='/register'><span className='text-gradient text-md'>Forgot Password?</span></Link>
          </Button>
          <Button variant='link' onClick={() => history('/login2')}>
          <span className='text-gradient text-md'>Register</span>
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        {/* </Card> */}
        </div>
    </Layout>
  )
}
