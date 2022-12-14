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
import 'react-phone-number-input/style.css'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ListBox from '../components/listbox2'
import Longform from '../components/Longform'
import Dynamicnav from '../partials/Dynamicnav'
import { client } from '../../lib/client'




export default function Registerpage(sanityuser) {
  const history = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

const fname = localStorage.getItem('firstname')
const lname = localStorage.getItem('lastname')
const emailID = localStorage.getItem('email')




// sanityuser ={firstName, lastName}

const doc = { 
  _type: "users",
  lastname:`${fname}`,
  password :`0000`,
  email :`${emailID}`,
  firstname :`${lname}`,
  service :`Investment`,
  region :`Europe`,
  phone :`0000000000`,
  demo : true,
  pin :`0000`,
  investment: 0,
  earnings: 0,
  plan:"Inactive"

}



const handlesubmit = async () => {
  history('/setpin')

}


return(
 <>

 <Longform/>
 </>


)
}
