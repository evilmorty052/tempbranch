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
import { Layout } from '../components/Layout2'
import { useAuth } from '../contexts/AuthContext'
// import Sidebar from '../partials/Sidebar'
// import Header from '../partials/Header'
import { Router, Routes } from 'react-router-dom'
import { client } from '../../lib/client'
import { FaCircle } from 'react-icons/fa'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


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



export default function Registerpage2(sanityuser) {
  const history = useNavigate()
  const { signInWithGoogle, register } = useAuth()
  const [firstname, setFirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [passwordref, setPasswordref] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const mounted = useRef(false)
  const [age, setAge] = useState('')
  const [phone, setphone] = useState('')
  const [sanitydata, setSanitydata] = useState()
  const [value, setValue] = useState()


  const query = 
    ` *[firstname match "${firstname}"]
`;

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])


sanityuser ={firstname, lastname, age,phone }

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  return (
    <Layout>
      {/* <div className='h-40 bg-green-300'>{`${name}`}</div> */}
      
        <h2 className='text-4xl text-blk text-center mb-5 font-poppins uppercase font-medium'>Some Basic Info ..</h2>
        
      

      <div className='max-w-2xl w-full mx-auto mt-4 rounded-lg px-8 py-8 mb-8 bg-wyt  shadow-2xl border border-blk' >
      {/* <Card maxW='md' mx='auto' mt={4}> */}
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
           console.log(sanityuser)&localStorage.setItem('sanityuser2', JSON.stringify(sanityuser));
            // your register logic here
            // setIsSubmitting(true)
              //  getdata()
              // .finally(() => {
              //   mounted.current && setIsSubmitting(false)
              //   console.log(sanityuser)&&setSanitydata([sanityuser])&&console.log({sanitydata})
                history('/register/registerpage3')
                
              // })
          }}
        >
          <Stack spacing='6'>
            <FormControl id='firstname'>
              <FormLabel><h1>FIRST NAME</h1></FormLabel>
              {/* <input ref={namer}></input><button onClick={Greeting()}></button> */}
              
              <Input
              //  ref={name}
                name='firstname'
                type='input'
                // autoComplete='email'
                required
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
              />
            </FormControl>
            <FormControl id='lastname'>
              <FormLabel><h1>LAST NAME</h1></FormLabel>
              <Input
                name='lastname'
                type='input'
                // autoComplete='password'
                required
                value={lastname}
                onChange={e => setlastname(e.target.value)}
              />
            </FormControl>
            {/* <FormControl id='age'>
              <FormLabel>AGE</FormLabel>
              <Input
                name='password'
                type='number'
                // autoComplete='password'
                required
                value={age}
                onChange={e => setAge(e.target.value)}
              />
            </FormControl> */}
            <FormControl id='age'>
              <FormLabel>Age</FormLabel>
              <div>
              <NumberInput max={80} min={18}
              value={age}
              onChange={value => setAge(value)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
              </div>
            </FormControl>
            <PhoneInput
      placeholder="Enter phone number"
      value={phone}
      defaultCountry={'US'}
      onChange={setphone}/>
            <Button
              type='submit'
              colorScheme='pink'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
             <span>NEXT</span>
            </Button>
          </Stack>
        </chakra.form>
        
        <Center my={4}>
        </Center>
        
        
        
      </div>
      
      
    </Layout>
  )
}
