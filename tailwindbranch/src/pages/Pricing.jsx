import React, { useState } from 'react';
import PricingCard from '../components/PricingCard';
import Navbar from '../components/Navbar'
import image from '../assets/Dman1.png'
import Hero from '../components/hero3';
import styles from '../style';
import CTA from '../components/CTA2';
import Plan2 from '../components/plans/plan2';
import Plan3 from '../components/plans/plan3';




function Dashboardprofile() {

  const available = [
    {
    name: 'Dedicated Agent',
  
  },
    {
    name: 'Daily Payout',

  },
    {
    name: 'Daily Payout',

  },
    {
    name: 'Daily Payout',

  },
    {
    name: 'Daily Payout',

  },
]
  const unavailable = [
    {
    name: 'Video Call',
  
  },
    {
    name: 'Another Thing',

  },
    {
    name: 'Another Thing',

  },
    {
    name: 'Another Thing',

  },
    {
    name: 'Another Thing',

  },
    {
    name: 'Another Thing',

  },
]

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <div className='flex flex-col bg-plat'>
         <div className='bg-blk px-5 py-2'>
            <Navbar/>
         </div>
         {/* <section className='mt-10 w-full flex px-5 flex-col items-center'>
            <div className=' bg-blk py-10 px-10 rounded-3xl  max-w-4xl'>
                  <div className='md:flex md:flex-row flex flex-col md:space-x-10'>
                      <div className=' md:space-y-5  flex-2'>
                            <h3 className='text-white text-4xl self-center uppercase md:tracking-wide'>We Have A Plan For Everyone</h3>
                            <p className='text-xl uppercase text-white'>Just pick one to start earning with medik 420 <br />its that simple!</p>
                      </div>
                      <div className=' bg-white rounded-3xl max-w-md'>
                        <img src={image} alt="" className=" relative z-[5] "/>

                      </div>
                  </div> 
 
            </div>
         </section> */}
         <div className='px-5'>
         <Hero/>
         </div>
         
         <div  className='hidden md:flex w-full justify-center my-10 '>
           <h3  className='text-4xl uppercase  font poppins text-bold'>Plans and pricing</h3>
         </div>
         <div className='w-full flex-col px-4  flex mt-10 md:hidden'>
             <h1 className='sm:text-2xl sm:text-center font-poppins text-blk text-left text-xl font-bold tracking-wider md:text-4xl uppercase '>Starter PLANS to get you up and running.</h1>
             <p className=' sm:text-center sm:text-xl font-poppins font-medium text-lg'>invest withdraw or cancel anytime on all plans.</p>
         </div>
         <div className=' w-full h-full  flex flex-col px-4 py-10 md:px-10'>
              <div className=' space-y-5 flex flex-col sm:flex-row sm:flex sm:space-x-10 sm:space-y-0 md:items-center md:justify-center'>
                <div className='hidden md:flex md:flex-col'>
                  <h1 className='text-2xl uppercase font-poppins font-bold'>
                  Starter PLANS to get you up and running.
                  </h1>
                  <p className='  font-poppins font-medium text-xl uppercase'>invest withdraw or cancel anytime on all plans.</p>
                </div>
                <PricingCard available={available} unavailable={unavailable}/>
                <Plan2/>
              </div>
         </div>
         <div className='px-4 md:px-20'>
            <CTA stext={'TRY'} btext={'MEDIK 420 STASH'} paragraph={'BUILD WEALTH YOUR OWN WAY'}/>
         </div>
         <div className='w-full flex-col px-4  flex mt-10 md:hidden'>
             <h1 className='sm:text-2xl sm:text-center font-poppins text-blk text-left text-xl font-bold tracking-wider md:text-4xl uppercase'>average PLANS to begin maximizing your returns.</h1>
             <p className='sm:text-center sm:text-xl text-lg font-poppins font-medium'>comfortable returns on all plans in this tier</p>
         </div>
         <div className=' w-full h-full  flex flex-col px-4 py-10 md:px-10'>
              <div className=' space-y-5 flex flex-col sm:flex-row sm:flex sm:space-x-10 sm:space-y-0 md:items-center md:justify-center'>
              <div className='hidden md:flex md:flex-col'>
                  <h1 className='text-2xl uppercase font-poppins font-bold'>
                  average PLANS to begin maximizing your returns.
                  </h1>
                  <p className='  font-poppins font-medium text-xl uppercase'>comfortable returns on all plans in this tier</p>
                </div>
                <Plan3/>
                <PricingCard/>
              </div>
         </div>
         <div className='px-4 md:px-20'>
            <CTA stext={'TRY'} btext={'MEDIK 420 STASH'} paragraph={'BUILD WEALTH YOUR OWN WAY'}/>
         </div>
         <div className='w-full flex-col px-4  flex mt-10 md:hidden'>
             <h1 className='sm:text-2xl sm:text-center font-poppins text-blk text-left text-xl font-bold tracking-wider md:text-4xl uppercase'>Maximized PLANS for optimum returns.</h1>
             <p className='sm:text-center sm:text-xl text-lg font-poppins font-medium'>Daily returns are included on all plans in this tier</p>
         </div>
         <div className=' w-full h-full  flex flex-col px-4 py-10 md:px-10'>
              <div className=' space-y-5 flex flex-col sm:flex-row sm:flex sm:space-x-10 sm:space-y-0 md:items-center md:justify-center'>
              <div className='hidden md:flex md:flex-col'>
                  <h1 className='text-2xl uppercase font-poppins font-bold'>
                  Maximized PLANS for optimum returns.
                  </h1>
                  <p className='  font-poppins font-medium text-xl uppercase'>Daily returns are included on all plans in this tier</p>
                </div>  
                <PricingCard/>
                <PricingCard/>
              </div>
         </div>
    </div>
    </>
  );
}

export default Dashboardprofile;