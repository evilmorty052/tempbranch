import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
  Select,
  SelectField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField
  
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
// import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
// import Sidebar from '../partials/Sidebar'
// import Header from '../partials/Header'
import { Router, Routes } from 'react-router-dom'
import { Layout } from '../components/Layout2'
import { FaAnchor } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa'
import 'react-phone-number-input/style.css'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

// const Countertutorial =()=>{
  
//   const [Counter, setcounter] = useState(1);
//   const CounterAdd =()=>{
//     setcounter(Counter + 1)
//   };
//   return(
//     <div >
//       {<div className='flex gap-3'><Button onClick={()=>{ setcounter(Counter + 1)}}>dd</Button>{Counter}</div>}
//     </div>
//   )
// }



export default function Registerpage(sanityuser) {
  const history = useNavigate()
  const { signInWithGoogle, register } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordref, setPasswordref] = useState('')
  const [region, setRegion] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const mounted = useRef(false)
  const [name, nametag] = useState(null)
  const namer = useRef(null)
//   const mojoauth = new MojoAuth( "ddfa0887-b4ce-43dc-9ec8-5c4c53522387" );
//  mojoauth.signInWithStateID()
//  .then( payload => {
//      console.log(payload)
//   })

sanityuser ={email,password,region}

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])
  

  return (
    <div className="absolute inset-0 bg-gray-50 min-h-screen flex flex-col items-center justify-center slide-in-elliptic-top-fwd ">
      {/* {<div className='h-40 bg-green-300'>{`${name}`}</div> } */}
      
        <h2 className='text-xl text-center mb-5 font-poppins uppercase font-semibold rounded-2xl'>Account Info..</h2>
      
      {/* <Card maxW='md' mx='auto' mt={4}> */}
        <form className='bg-plat py-10 px-10 rounded-3xl  min-w-[300px] md:min-w-[500px] shadow-2xl'
          onSubmit={async e => {
            e.preventDefault()
            // if (!email || !password) {
            //   toast({
            //     description: 'Credentials not valid.',
            //     status: 'error',
            //     duration: 9000,
            //     isClosable: true,
            //   })
            //   return
            // }
            // your register logic here
            setIsSubmitting(true)
            register(email, password)
              .then(res => {console.log(sanityuser)&localStorage.setItem('sanityuser1', JSON.stringify(sanityuser));
              history('/register/registerpage2')})
              .catch(error => {
                console.log(error.message)&history('/login')
                toast({
                  description: 'email already in use',
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                })
              return
               
              })
              .finally((error,) => {
                mounted.current && setIsSubmitting(false)
                if(password !== passwordref){
                  (toast({
                    description: 'passwords must match',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  }))
                  return
                }
                  



              
                if(error){
                  console.log(error)
                }
                
                // console.log(sanityuser)&localStorage.setItem('sanityuser1', JSON.stringify(sanityuser));
                // history('/register/registerpage2')

              })
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel><span className='uppercase font-poppins'>email address</span></FormLabel>
              
              
              <Input
               ref={name}
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel><span className='uppercase font-poppins'>password</span></FormLabel>
              <Input
                name='password'
                type='password'
                autoComplete='password'
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id='passwordref'>
              <FormLabel><span className='uppercase font-poppins'>Confirm password</span></FormLabel>
              <Input
                name='password'
                type='password'
                // autoComplete='password'
                required
                value={passwordref}
                onChange={e => setPasswordref(e.target.value)}
              />
             
            </FormControl>
            {/* <FormControl id='phone'>
              <FormLabel>Mobile</FormLabel>
              <div>
              <NumberInput max={80} min={18}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
              </div>
            </FormControl> */}
            <FormControl>
  <FormLabel><span className='uppercase font-poppins'>region</span></FormLabel>
        <Select 
        placeholder='Select Region'
        onChange={e=>{setRegion(e.target.value)}}
        value={region}
        required>
          <option>Europe</option>
          <option>North America</option>
          <option>South America</option>
          <option>Asia</option>
          <option>Africa</option>
        </Select>
   </FormControl>
          
            {/* <Button 
              type='submit'
              colorScheme='pink'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
             NEXT
            </Button> */}
            
            {/* <Button
              type='submit'
              colorScheme='pink'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
             PREVIOUS
            </Button> */}
          </Stack>
          <div className='flex w-full justify-between mt-10'>
              {/* <button className='text-base  bg-sky-300 px-2 rounded-xl py-4 uppercase'>Previous</button> */}
              <Button 
               size='sm'
               colorScheme='blue' >
              Back
             </Button>
              {/* <button className='text-base  bg-sky-300 px-2 rounded-xl py-4 uppercase'>Next</button> */}
              <Button 
              size='sm'
              colorScheme='blue'
              type='submit'
               >
                Next
              </Button>
            </div>
        </form>
        <Center my={4}>
          {/* <Button variant='link' onClick={() => history.push('/login')}>
          <span className='text-gradient text-2xl'>Login</span>  
          </Button> */}
        </Center>
        {/* <DividerWithText my={6}>OR</DividerWithText>
        <Button className='w-full bg-black-gradient' 
          variant='outline'
          width = '100%'
          colorScheme='red'
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then(user => console.log(user))
              .catch(e => console.log(e.message))
          }
        >
         Sign in with Google
        </Button> */}
        {/* <Greeting/> */}
        
        
      
      {/* </Card> */}
      
    </div>
  )
}
