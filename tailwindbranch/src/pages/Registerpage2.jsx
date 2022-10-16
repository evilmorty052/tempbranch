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
import { useAuth } from '../contexts/AuthContext'
import { Router, Routes } from 'react-router-dom'
import { Layout } from '../components/Layout2'
import { FaAnchor } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa'
// import 'react-phone-number-input/style.css'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
import ListBox from '../components/listbox'
import RadioGroups from '../components/radiogroup'
import { client } from '../../lib/client'




export default function Registerpage(firstname, lastname, email) {
  const history = useNavigate()
  const { signInWithGoogle, register } = useAuth()
  // const [email, setEmail] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [firstName, setFirstName] = useState('')
  const toast = useToast()
  
const fname = localStorage.getItem('firstname')
const lname = localStorage.getItem('lastname')
const emailID = localStorage.getItem('email')
firstname = JSON.parse(fname)
lastname = JSON.parse(lname)
email = JSON.parse(emailID)



// sanityuser ={firstName, lastName}

const doc = { 
  _type: "users",
  lastname:`${lastname}`,
  password :`0000`,
  email :`${email}`,
  firstname :`${firstname}`,
  service :`Investment`,
  region :`Europe`,
  phone :`0000000000`,
  demo :'yes',
  pin :`0000`,
  investment: 0,
  earnings: 0,
  plan:"Inactive"

}

const handlesubmit = async () => {
  // localStorage.setItem('service',JSON.stringify(sanityuser))
  client.create(doc)
  
  
  // console.log(sanityuser)
}

  
  
   
  return (
    <div className="absolute inset-0 bg-plat min-h-screen flex flex-col slide-in-elliptic-top-fwd py-5  ">
      {/* <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
--> */}

<div  className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div  className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl text-blk uppercase">Pick A Service</h1>

    <p className="mt-4 text-gray-500 uppercase font-poppins">
      We use this info to tailor your onboarding experience
    </p>
  </div>

  <form onSubmit={(e)=>{ e.preventDefault()
    handlesubmit()}}  className="mx-auto mt-8 mb-0 max-w-md space-y-4">
    <div>
      {/* <label for="email" class="sr-only">Email</label> */}

      <div className="relative">
        {/* <input
          type="text"
           className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder="FIRST NAME"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        /> */}
         <RadioGroups/>

      </div>
    </div>

    <div>
      {/* <label for="password" class="sr-only">Password</label> */}
      <div  className="relative">
        {/* <input
          type="text"
          class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder={'LAST NAME'}
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        /> */}
      </div>
    </div>
         {/* <div>
          <label htmlFor="PICK A REGION">PICK A REGION:</label>
          <ListBox/>
         </div> */}
   
  </form>
  <div className=" ">
      <div className='mt-10 flex items-center justify-between'>
      <button onClick={()=>{history('/register')}} className='text-base bg-green-300 px-4 py-2 rounded-md w-20 h-10 text-white uppercase shadow-2xl font-poppins font-medium'>Back</button>
     <button onClick={()=>{handlesubmit()&history('/register/registerpage3')}}  className='text-base bg-green-300 px-4 py-2 rounded-md w-20 h-10 text-white uppercase shadow-2xl font-poppins font-medium'>Next</button>
      </div>
    </div>
</div>

      
    </div>
  )
}
