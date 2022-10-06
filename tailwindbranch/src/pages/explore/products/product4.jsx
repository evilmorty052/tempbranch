import React from 'react'
import Gum from '../../../assets/cbdhoney.png'
import styles,{layout} from '../../../style'
import Button from './buttons/buynow'

const product4 = () => {
  return (
    <div>
<section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={Gum} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        CBD-Infused  <br className="sm:block hidden" /> <span className="text-slate-100">Honey</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-slate-100`}>
        Our CBD Honey mix helps you grow your appetite, while maintaining the natural taste of Honey. just consume like regular honey.
        
      </p>

      

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button/>
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
    </div>
  )
}

export default product4