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
  Radio,
  RadioGroup,
  FormHelperText,
  Select,
  useToast,
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
  const [plan, setPlan] = useState('')
  const [service, OptService] = useState('Investment')
  const [wantdemo, setWantDemo] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const mounted = useRef(false)
  const [age, setAge] = useState()
  const [sanitydata, setSanitydata] = useState()
  const [value, setValue] = useState()
  

//   const query = 
//     ` *[firstname match "${firstname}"]
// `;
  

sanityuser ={plan, service, wantdemo }

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  return (
    <div className="absolute inset-0 bg-gray-50 min-h-screen flex flex-col items-center justify-center  ">
      {/* <div className='h-40 bg-green-300'>{`${name}`}</div> */}
      
        <h2 className='text-4xl text-blk text-center mb-5 font-poppins uppercase font-semibold'>Final Info...</h2>
      

      {/* <Card maxW='md' mx='auto' mt={4}> */}
        <form className='bg-plat py-10 px-10 rounded-3xl  min-w-[300px] md:min-w-[500px] shadow-2xl'
          onSubmit={async e => {
            e.preventDefault()
           console.log(sanityuser)&localStorage.setItem('sanityuser3', JSON.stringify(sanityuser));
            // your register logic here
            // setIsSubmitting(true)
              //  getdata()
              // .finally(() => {
              //   mounted.current && setIsSubmitting(false)
              //   console.log(sanityuser)&&setSanitydata([sanityuser])&&console.log({sanitydata})
                history('/setpin')
                
              // })
          }}
        >
          <Stack spacing='6'>
            <FormControl id='plan'>
              <FormLabel>DO YOU WANT A DEMO ?</FormLabel>
              {/* <Input
                name='plan'
                type='input'
                autoComplete='email'
                required
                value={plan}
                onChange={e => setPlan(e.target.value)}
              /> */}
            <Select placeholder='Pick an Option'
            required
            value={wantdemo}
            onChange={e => setWantDemo(e.target.value)}>
              <option>Yes</option>
              <option>No</option>
            </Select>
            </FormControl>
            <FormControl id='wantdemo'>
              <FormLabel>PICK A PLAN BELOW</FormLabel>
              {/* <Input
                name='wantdemo'
                type='input'
                // autoComplete='password'
                required
                value={wantdemo}
                onChange={e => setWantDemo(e.target.value)}
              /> */}
          <FormControl>
            {/* <FormLabel>Pick A Plan</FormLabel> */}
            <Select placeholder='Select plan'
            value={plan}
            onChange={e => setPlan(e.target.value)}>
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
              <option>Diamond</option>
              <option>Platinum</option>
            </Select>
            <FormHelperText>Only for Tailoring Your Demo.</FormHelperText>
          </FormControl>
            </FormControl>
            <FormControl as='fieldset'>
              <FormLabel as='service'>What Service Are You Interested in?</FormLabel>
              <RadioGroup defaultValue={service}
              // value={service}
              onChange={e => {OptService(e)} }>
                <HStack spacing='5px'>
                  <Radio value='DigitalFarming'><span>Digital Farming</span></Radio>
                  <Radio value='Investment'>Investment</Radio>
                  <Radio value='Retailing'>Retailing</Radio>
                  {/* <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio> */}
                </HStack>
              </RadioGroup>
              {/* <FormHelperText>Select only if you're a fan.</FormHelperText> */}
            </FormControl>
           <div className=''>
           {/* <PhoneInput
      placeholder="Enter phone number"
      value={value}
      defaultCountry={'US'}
      onChange={setValue}/> */}
            </div> 
            {/* <Button
              type='submit'
              colorScheme='blue'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
             <span>NEXT</span>
            </Button> */}
               <div className='flex w-full justify-between mt-10'>
              {/* <button className='text-base  bg-sky-300 px-2 rounded-xl py-4 uppercase'>Previous</button> */}
              <Button 
               size='md'
               colorScheme='blue' >
              Back
             </Button>
              {/* <button className='text-base  bg-sky-300 px-2 rounded-xl py-4 uppercase'>Next</button> */}
              <Button 
              size='md'
              colorScheme='blue'
              type='submit'
               >
                Next
              </Button>
            </div>
          </Stack>
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
