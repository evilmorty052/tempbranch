import React from 'react'
import { Navbar } from '../../components'
import styles from '../../style'
import Hero1 from './heroes/hero1'
import {Hero} from '../SmallBiz'
import Feature1 from './features/feature1'
import Feature2 from './features/feature2'
import Feature3 from './features/feature3'
import {CTA} from '../../components'
import Pricing from './pricing/pricing'
import {Footer} from '../../components'
import CTA1 from './cta/cta1'
import Example from '../../components/disclosure/disclosure2'
import PricingCard from '../../components/PricingCard'
import Plan1 from '../../components/plans/plan1' 
import { FaChevronRight } from 'react-icons/fa'
import investmentphone from '../../assets/phone.png'
import Banner from '../../partials/Banner'

const investing = () => {
  return (
    <>
    <div className="bg-blk w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
    </div>

    <div className={`bg-plat ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} my-10 px-4`}>
        <Hero 
        color={'text-green-300'}
        span={'EASY'}
         bg={'bg-slate-200'}
        image={investmentphone} 
        title={'INVESTMENT MADE'}
         subtext="Invest In just a few clicks, Without the hassle of day trading. We help you build long-term wealth your way—$5 at a time."
         buttonText={'Learn More'}/>
        {/* <Stats /> */}
      </div>
    </div>
    
    <div className={`bg-plat ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Feature2 />
        <CTA1 />
        <div className='hidden sm:flex md:flex'><Feature3 /></div>
        <div className='ss:hidden'><Feature1/></div>
          
          <div className='my-5 '>
          <h3 className='text-center text-blk text-4xl font-poppins font-medium'>Start Earning Today!</h3></div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 justify-center w-full '>
          <div className='flex justify-center'>
          <PricingCard/>
          </div>
          <div className='flex justify-center'>
          <PricingCard/>
          </div>
        

        </div>
       <div className=' my-10 text-center space-x-3 flex items-center justify-center font-poppins font-bold '><h3 className='text-blk text-4xl tracking-wide'>VIEW ALL PLANS</h3> <span className='text-lg text-green-300'><FaChevronRight/></span> </div>
        
      
        
        
        {/* <Section/>
        
        <Business />
        <CardDeal />
        <Billing />
        <Medicplants />
        <Testimonials />
        <Clients />
        <CTA />
        
        <Footer /> */}
        
        
        
        
        
      </div>
    </div>
    {/* <Example/> */}
 
  </div>
 <div className='bg-plat px-3'><Footer /></div> 
 <Banner/>
    </>
  )
}

export default investing