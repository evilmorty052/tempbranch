import React from 'react'
import Dynamicnav from '../partials/Dynamicnav'
import { LandingPage, Hero } from './SmallBiz'
const Digitalfarming = () => {
  return (
    <div className='bg-plat relative flex flex-col'>
    <Dynamicnav/>
     <div className='mt-10'>
     <LandingPage/>
    </div>
    </div>
  )
}

export default Digitalfarming