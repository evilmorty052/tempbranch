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
    <Layout>
      {/* {<div className='h-40 bg-green-300'>{`${name}`}</div> } */}
      
        {/* <h2 className='text-xl bg-red-300 text-center mb-5 font-poppins uppercase font-semibold rounded-2xl'><FaCircle/></h2> */}
      <div className='max-w-2xl w-full mx-auto mt-4 rounded-lg px-8 py-8 mb-8 bg-wyt  shadow-2xl  ' >
      {/* <Card maxW='md' mx='auto' mt={4}> */}
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            if (!email || !password) {
              toast({
                description: 'Credentials not valid.',
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              return
            }
            // your register logic here
            setIsSubmitting(true)
            register(email, password)
              .then(res => {})
              .catch(error => {
                console.log(error.message)
                toast({
                  description: error.message,
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                })
              })
              .finally(() => {
                mounted.current && setIsSubmitting(false)
                if(password !== passwordref)
                (toast({
                  description: 'passwords must match',
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                }))
                

                console.log(sanityuser)&localStorage.setItem('sanityuser1', JSON.stringify(sanityuser));
                history('/register/registerpage2')

              })
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              {/* <input ref={namer}></input><button onClick={Greeting()}></button> */}
              
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
              <FormLabel>Password</FormLabel>
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
              <FormLabel>Confirm Password</FormLabel>
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
  <FormLabel>Region</FormLabel>
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
              <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Back
             </button>
              {/* <button className='text-base  bg-sky-300 px-2 rounded-xl py-4 uppercase'>Next</button> */}
              <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Next
              </button>
            </div>
        </chakra.form>
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
        
        
      </div>
      {/* </Card> */}
      
    </Layout>
  )
}
