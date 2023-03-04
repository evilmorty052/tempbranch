import { FaUser,  FaArrowLeft,  FaAngleRight } from "react-icons/fa";
import styles from "../../style";
import { useState } from "react";


const PrivacySettings = ({func}) => {
  return (
    <>
      <ul className=" col-span-2 px-2  lg:items-start sm:pl-5  flex flex-col gap-y-5 slide-in-right">
      <div className=' flex items-center gap-x-8 px-4 sm:hidden'>
         <a className={ styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
         <div>
         <span>Privacy Settings</span>
         <p>evilmorty052@proton.me</p>
         </div>
         </div>
          {/* <div className='pl-4 hidden sm:block  space-y-2'>
          <h3 className={styles.UiHeading}><FaArrowLeft/></h3>
          <h3
              className={`text-gray-600 text-[14px] font-semibold font-space hidden lg:block`}
            >
              Manage What Information you Share
            </h3>
          </div> */}
          <div className='pl-4 block  sm:hidden  space-y-2'>
         
          <h3
              className={styles.UiSubHeading}
            >
                           Manage What Information you Share
            </h3>
          </div>
          <div className="md:block hidden ">
          <div className=" space-y-4  px-4">
            <h3 className={styles.UiHeading}>Privacy And Safety</h3>
            <h3 className={`${styles.UiSubHeading} `}>
            Manage What Information you Share
            </h3>
          </div>
        </div>
        <li  className='relative flex items-center sm:min-w-[80%] '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className='min-w-[80%] ml-8 pr-4'>
                <p className={styles.UIMenu}>Trading Information</p>
                <p className="text-[14px]">
                  choose what trading information you share
                </p>
              </div>
          <div className=' absolute right-2 hidden'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
        <li  className='relative sm:min-w-[80%] flex items-center  '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className=' ml-8 pr-4'>
                <p className={styles.UIMenu}>Investment Information</p>
                <p className="text-[14px]">
                  Choose how You share Your Information
                </p>
              </div>
          <div className=' absolute right-2 hidden'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
        <li  className='relative sm:min-w-[80%] flex items-center  '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className=' ml-8 pr-8'>
                <p className={styles.UIMenu}>Location Information</p>
                <p className="text-[14px]">
                  Choose what data we collect about your location<br className='hidden sm:block'/> On Medik 420
                </p>
              </div>
          <div className=' absolute right-2 hidden'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
        <li  className='relative sm:min-w-[80%] flex items-center  '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className=' ml-8 pr-8'>
                <p className={styles.UIMenu}>Profile Information</p>
                <p className="text-[14px]">
                 Choose What Information About Your Profile We Share And Collect
                </p>
              </div>
          <div className=' absolute right-2 hidden'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
       
      
      </ul>
    </>
  );
}

export default PrivacySettings