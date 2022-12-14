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
import Hero2 from '../../components/hero2'
import Feature4 from './features/feature4'
import Feature5 from './features/feature5'
import Feature6 from './features/feature6'
import Example from '../../components/disclosure/disclosure'
import Agenthero from '../Agents/components/Agenthero'
import Dynamichero from '../Agents/components/Dynamichero'
import Img from '../../assets/Iphone1.png'

const Smart = () => {
  return (
    <>
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Dynamichero 
      headline={'Automated Investment Simplified'}
      sub={'Our State Of the Art Investment AI Trained for years by the best Agents Around Makes Investment decisions a breeze Give it a try today!'}
       action={'Get Started'}
       img={Img}
       />
        
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
    
    <Footer />
  </div>
    </>
  )
}

export default Smart