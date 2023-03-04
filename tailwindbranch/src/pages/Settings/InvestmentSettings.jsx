import { useState } from "react";
import { FaAngleRight, FaArrowLeft, FaUser } from "react-icons/fa";
import styles from "../../style";


const InvestmentSettings = ({func}) => {
  return (
    <>
      <ul className=" col-span-2 px-2  lg:items-start sm:pl-5  flex flex-col gap-y-5 slide-in-right">
      <div className=' flex items-center gap-x-8 px-4 sm:hidden'>
         <a className={styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
         <div>
         <span>Investment Settings</span>
         <p>evilmorty052@proton.me</p>
         </div>
         </div>
          <div className='pl-4 block  sm:hidden  space-y-2'>
         
          <h3
              className={styles.UiSubHeading}
            >
                           Manage Your Investment Account Settings
            </h3>
          </div>
        <div className="md:block hidden ">
          <div className=" space-y-4  px-4">
            <h3 className={styles.UiHeading}>Investment And Banking</h3>
            <h3 className={`${styles.UiSubHeading} `}>
            Manage Your Investment Or Banking Settings  At Any Time
            </h3>
          </div>
        </div>
        <li  className='relative sm:min-w-[80%] flex items-center  '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className=' ml-8 pr-8'>
                <p className={styles.UIMenu}>Auto Invest</p>
                <p className="text-[14px]">
                 Turn On Auto Invest
                </p>
              </div>
          <div className=' absolute right-2 hidden'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
        <li  className='relative flex items-center sm:min-w-[80%] '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className='min-w-[80%] ml-8 pr-4'>
                <p className={styles.UIMenu}>Smart Portfolio</p>
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
                <p className={styles.UIMenu}>Debit Card Setiings</p>
                <p className="text-[14px]">
                 Lock Your Debit Card Or Adjust Settings
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
                <p className={styles.UIMenu}>Checking Account</p>
                <p className="text-[14px]">
                 Adjust Checking Account Settings
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
                <p className={styles.UIMenu}>Medik Coach</p>
                <p className="text-[14px]">
                 Turn On Medik Coach
                </p>
              </div>
          <div className='hidden absolute right-2'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
       
      
      </ul>
    </>
  );
}

export default InvestmentSettings