import React from 'react'
import robot from '../assets/robot.png'
import PricingCard from '../components/PricingCard'

const test = () => {
  return (
    <>
    <div className='min-h-screen py-12'>
    <div className='container mx-auto flex justify-center font-poppins rounded-3xl bg-slate-500 '>
    <div className='grid grid-cols-1 sm:grid-cols-2 border  bg-white sm:gap-x-10 '>
        <div className=' p-2 flex flex-col justify-center '>
           <h3 className='text-4xl  uppercase tracking-wide font-bold'>A Plan For Everyone</h3>
           <p className=' uppercase text-lg'>just pick one to start earning</p>
        </div>
        <div>
        <div className=' border sm:relative sm:overflow-y-hidden '>
         <div className=' w-60 h-60 sm:w-80 sm:h-80 lg:h-96 lg:w-96 bg-white  sm:flex sm:justify-center sm:items-center '>
            <div className='sm:absolute right-0'>
                <img src={robot} className=' w-full '/>
            </div>
         </div>
        </div>

        </div>

    </div>
    </div>

    <PricingCard/>
    </div>
   
   
    </>
   
  )
}

export default test