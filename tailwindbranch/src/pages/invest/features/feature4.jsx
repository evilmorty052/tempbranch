import React from 'react'
import Iphone from '../../../assets/iphone1.png'
import styles, { layout } from '../../../style'



const Feature4 = () => (
    <>
    <div className='mx-auto max-w-screen-md'>
  <section id="product" className={`${layout.sectionReverse} `}>
    <div className={layout.sectionImgReverse}>
      <img src={Iphone} alt="phone" className="w-[70%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} px-4 text-blk `}>
      Investing but make it . <span className='text-green-300'>Personal</span> <br className="sm:block hidden" /> 
      </h2>
      {/* <span className="text-red-400">DISCRIMINATION</span> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-blk px-4`}>
      Build wealth your way with Smart Portfolio, our robo-advisor that invests for you based on your goals. Just add cash and we’ll do the rest.
        
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
    </div>
    </>
);

export default Feature4;