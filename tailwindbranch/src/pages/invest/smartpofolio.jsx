import React, {useState} from 'react'
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
import Feature4 from './features/feature4'
import Feature5 from './features/feature5'
import Feature6 from './features/feature6'
import Example from '../../components/disclosure/disclosure'
import Img from '../../assets/phone.png'
import {Hero }from '../../components'
import AnimatedSidebar from '../../components/AnimatedSidebar'

const Smart = () => {
  const [expanded, setexpanded] = useState(false)
  function opensidebar(params) {
    expanded?  setexpanded(false) : setexpanded(true)
    // console.log('clicked')
    }
  return (
    <>
    <AnimatedSidebar isExpanded={expanded} setIsExpanded={setexpanded}/>
    <div onClick={()=> expanded && setexpanded(false)} className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar open={opensidebar} />
        </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Hero/>
        
        {/* <Stats /> */}
      </div>
    </div>
    
    <div className={`bg-plat ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Feature4 />
        <CTA1 />
        <div className='hidden md:flex'><Feature5 /></div>
        <div className='ss:hidden'></div>
        <Feature6/>

        {/* <Example/> */}
        
        
        {/* <Section/>
        
        <Business />
        <CardDeal />
        <Billing />
        <Medicplants />
        <Testimonials />
        <Clients />
        <CTA />
        <Example/>
        <Footer /> */}
        
        
        
        
      </div>
    </div>
    
  
  </div>
    </>
  )
}

export default Smart



function DynamicHero(params) {
  return(
    <>
    <section class="text-gray-600 body-font bg-primary">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={Img}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white uppercase"> Try <br/> Smart<br/> Portfolio</h1>
      <p class="mb-8 leading-relaxed text-white">Ever Wanted To Own A Small Business ? Make Your Dreams Come True With Medik 420 In Just A Few Clicks</p>
      {/* <div class="flex w-full md:justify-start justify-center items-end">
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label for="hero-field" class="leading-7 text-sm text-white">Email</label>
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="inline-flex text-white bg-green-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Apply</button>
      </div>
      <p class="text-sm mt-2 text-white mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p> */}
    </div>
  </div>
</section>
    </>
  )
  
}