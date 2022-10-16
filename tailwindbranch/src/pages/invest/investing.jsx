import React from 'react'
import { Navbar } from '../../components'
import styles from '../../style'
import Hero1 from './heroes/hero1'
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
      <div className={`${styles.boxWidth}`}>
        <Hero1 />
        {/* <Stats /> */}
      </div>
    </div>
    
    <div className={`bg-plat ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Feature2 />
        <CTA1 />
        <div className='hidden sm:flex md:flex'><Feature3 /></div>
        <div className='ss:hidden'><Feature1/></div>

        <div className=' hidden sm: mt-10 sm:flex sm:justify-between mb-10'>
        <div><PricingCard/></div>
        <div><PricingCard/></div>
        <div className='sm:hidden md:flex'><PricingCard/></div>
        </div>
        <div className='sm:hidden flex flex-col space-y-10 mb-10'>
          <PricingCard/>
          <PricingCard/>
          <PricingCard/>
        </div>
       <div className=' mb-10 text-center space-x-3 flex items-center justify-center font-poppins font-bold '><h3 className='text-white text-4xl tracking-wide'>VIEW ALL PLANS</h3> <span className='text-lg text-green-300'><FaChevronRight/></span> </div>
        
      
        
        
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
    <Example/>
    <Footer />
  </div>
    </>
  )
}

export default investing