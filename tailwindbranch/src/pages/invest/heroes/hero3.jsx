import React from 'react'
import Cbd from '../../../assets/retirementphone.png'
import styles from '../../../style'
import { discount } from '../../../assets'
import GetStarted from '../../../components/GetStarted'
import Button from '../../../components/Button'

const Hero3 = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} bounce-in-bottom`} >
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className=" ss:hidden flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 vibrate-1">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full text-center ">
        <h1 className=" bounce-in-bottom  flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          Control Your <br className="sm:block hidden" />{" "}
          <span className="text-gradient text-center"> Tommorow</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          
          <GetStarted />
          
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        
      <p className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins text-center ml-0 md:ml-8`}>
      Kick-start your financial future with Medic 420
      </p>
      </h1>
      
      {/* <div className="mt-8">
      <Button/>
      </div> */}
      
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
      <img src={Cbd} alt="billing" className="w-[80%] h-[100%] relative z-[5] pr-5" />

      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      {/* <GetStarted /> */}
      <Button/>
    </div>
  </section>
  )
}

export default Hero3