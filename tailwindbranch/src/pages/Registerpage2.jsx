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
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
// import Sidebar from '../partials/Sidebar'
// import Header from '../partials/Header'
import { Router, Routes } from 'react-router-dom'
import { client } from '../../lib/client'


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
  const [sanitydata, setSanitydata] = useState()



  const query = 
    ` *[firstname match "${firstname}"]
`;

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])


sanityuser ={firstname, lastname, age }

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  return (
    <Layout>
      {/* <div className='h-40 bg-green-300'>{`${name}`}</div> */}
      <header className='text-4xl text-gradient text-center my-12 font-poppins font-extrabold'>
        <h2 className='text-4xl text-gradient text-center'>Registerpage2:</h2>
      </header>

      <div className='max-w-md mx-auto mt-4 bg-glass2 rounded-lg px-8 py-8 mb-8' >
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
            <FormControl id='age'>
              <FormLabel>AGE</FormLabel>
              <Input
                name='password'
                type='number'
                // autoComplete='password'
                required
                value={age}
                onChange={e => setAge(e.target.value)}
              />
            </FormControl>
            {/* <FormControl id='phone'>
              <FormLabel>Phone Number</FormLabel>
              <Input
                name='password'
                type='tel'
                autoComplete='password'
                required
                value={passwordref}
                onChange={e => setPassword(e.target.value)}
              />
              <input type={'tel'} className='bg-transparent text-white w-full rounded-md'/>
            </FormControl> */}
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
