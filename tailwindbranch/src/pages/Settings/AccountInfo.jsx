import { useState } from 'react';
import styles from '../../style';
import { FaAngleRight, FaArrowLeft, FaUser } from 'react-icons/fa';

const AccountInfo = ({func}) => {

const [account, setaccount] = useState(null)
const [changePassword, setchangePassword] = useState(null)
const [downloadData, setdownloadData] = useState(null)
const [deleteData, setdeleteData] = useState(null)

const AccountSettings = () => {
  return(
    <>
    account settings
    </>
  )
}
const ChangePassword = () => {
  return(
    <>
    Change Password
    </>
  )
}

const DownloadData = () => {
  return(
    <>
    Download Data
    </>
  )
}

const DeactivateAccount = () => {
  return(
    <>
    Delete Account
    </>
  )
}




if (account) {
  return(
    <>
    <AccountSettings/>
    </>
  )
}
else if (changePassword) {
  return(
    <>
    <ChangePassword/>
    </>
  )
}

else if (downloadData) {
  return(
    <>
   <DownloadData/>
    </>
  )
}

else if (deleteData) {
  return(
    <>
   <DeactivateAccount/>
    </>
  )
}





  return (
          <>
            <ul className=" col-span-2 px-2  lg:items-start sm:pl-5  flex flex-col gap-y-5 slide-in-right">
            <div className=' flex items-center gap-x-8 px-4 sm:hidden'>
         <a className={ styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
         <div>
         <span>Your Account</span>
         <p>evilmorty052@proton.me</p>
         </div>
         </div>
                <div className='pl-4 block  sm:hidden  space-y-2'>
               
                <h3
                    className={`text-gray-600 text-[14px] font-semibold font-space hidden lg:block`}
                  >
                    See information about your account, download an archive of
                    your data, or learn about your account investment settings
                  </h3>
                </div>
                <div className="md:block hidden ">
          <div className=" space-y-4  px-4">
            <h3 className={styles.UiHeading}>Your Account</h3>
            <h3 className={`${styles.UiSubHeading} `}>
            See information about your account, download an archive of your data, or learn about your account deactivation options
            </h3>
          </div>
        </div>
              <div className="lg:hidden ">
                <div className="  px-4">
                  <h3 className={`${styles.UiSubHeading} lg:hidden`}>
                    See information about your account, download an archive of
                    your data, or learn about your account investment settings
                  </h3>
                </div>
              </div>
              <li onClick={()=> setaccount(true)} className='relative flex items-center sm:min-w-[80%] '>
                  <div>
                  <a className={styles.SettingsIcon}>
                    <FaUser />
                  </a>
                  </div>
                    <div className='min-w-[80%] ml-8 pr-4'>
                      <p className={styles.UIMenu}>Account Information</p>
                      <p className="text-[14px]">
                        See your account information like your 
                        email address.
                      </p>
                    </div>
                <div className=' absolute right-2 hidden'>
                      <a>
                        <FaAngleRight />
                      </a>
                </div>
              </li>
              <li onClick={()=> setchangePassword(true)} className='relative sm:min-w-[80%] flex items-center  '>
                  <div>
                  <a className={styles.SettingsIcon}>
                    <FaUser />
                  </a>
                  </div>
                    <div className=' ml-8 pr-8'>
                      <p className={styles.UIMenu}>Change Password</p>
                      <p className="text-[14px]">
                        Change Your Password At Any Time
                      </p>
                    </div>
                <div className=' absolute right-2 hidden'>
                      <a>
                        <FaAngleRight />
                      </a>
                </div>
              </li>
              <li onClick={()=> setdownloadData(true)} className='relative sm:min-w-[80%] flex items-center  '>
                  <div>
                  <a className={styles.SettingsIcon}>
                    <FaUser />
                  </a>
                  </div>
                    <div className=' ml-8 pr-8'>
                      <p className={styles.UIMenu}>Download Your Data</p>
                      <p className="text-[14px]">
                        Download A copy Of All your Trading And Investment Activity<br className='hidden sm:block'/> On Medik 420
                      </p>
                    </div>
                <div className=' absolute right-2 hidden'>
                      <a>
                        <FaAngleRight />
                      </a>
                </div>
              </li>
              <li onClick={()=> setdeleteData(true)} className='relative sm:min-w-[80%] flex items-center  '>
                  <div>
                  <a className={styles.SettingsIcon}>
                    <FaUser />
                  </a>
                  </div>
                    <div className=' ml-8 pr-8'>
                      <p className={styles.UIMenu}>Deactivate Your Account</p>
                      <p className="text-[14px]">
                       Find out How you Can Delete Your Account
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

export default AccountInfo