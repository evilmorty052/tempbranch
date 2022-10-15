import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  HStack,
  useToast,
  Select,
  SelectField,
  RadioGroup,
  Radio,
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
    <div className="absolute inset-0 bg-gray-50 min-h-screen flex flex-col items-center justify-center ">
      {/* <div className='h-40 bg-green-300'>{`${name}`}</div> */}
      
        <h2 className='text-4xl text-blk text-center mb-5 font-poppins uppercase font-medium'>Some Basic Info ..</h2>
        
      

      {/* <Card maxW='md' mx='auto' mt={4}> */}
        <form className='bg-plat py-10 px-10 rounded-3xl  min-w-[300px] md:min-w-[500px] shadow-2xl'
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
            {/* <FormControl id='age'>
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
            </FormControl> */}
            <FormControl id='age'>
              <FormLabel>ARE YOU OVER 18?</FormLabel>
              <RadioGroup defaultValue='YES'>
            <HStack spacing='4px'>
              <Radio value='YES'>YES</Radio>
              <Radio value='NO'>NO</Radio>
            </HStack>
          </RadioGroup>
            </FormControl>
            <PhoneInput
      placeholder="Enter phone number"
      value={phone}
      required
      defaultCountry={'US'}
      onChange={setphone}/>
            <Button
              type='submit'
              colorScheme='blue'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
             <span>NEXT</span>
            </Button>
          </Stack>
        </form>
        
        <Center my={4}>
        </Center>
        
        
        
      </div>
      
      
    
  )
}
