import { useState } from 'react';
import styles from '../../style';
import { FaAngleRight, FaArrowLeft, FaUser } from 'react-icons/fa';
import {MenuCheckBox }from './index'

const AccountInfo = ({func}) => {

const [account, setaccount] = useState(null)
const [changePassword, setchangePassword] = useState(null)
const [downloadData, setdownloadData] = useState(null)
const [deleteData, setdeleteData] = useState(null)

const AccountSettings = () => {
  const [emailchange, setemailchange] = useState(false)
  const [username, setusername] = useState(false)
  const [phone, setphone] = useState(false)
  const [mailing, setmailing] = useState(false)


  if(emailchange){
    return(
      <UpdateScreen  updateText={'Update Email Address'} header={"Change Email Address"} placeholder={'evilmorty052@proton.me'} func={()=> setemailchange(false)}/>
    )
  }

  else if(username){
    return(
      <UpdateScreen updateText={'Update Username'} header={"Change Username"} placeholder={'evilmorty052'} func={()=> setusername(false)}/>
    )
  }

  else if(phone){
    return(
      <UpdateScreen updateText={'Add Phone Number'} header={"Phone Number"} placeholder={'216-788-8899'} func={()=> setphone(false)}/>
    )
  }
  
  else if(mailing){
    return(
      <UpdateScreen updateText={'Update Mailing Address'} header={"Change Mailing Address"} placeholder={'evilmorty052@proton.me'} func={()=> setmailing(false)}/>
    )
  }


  return(
    <>
    <div>
       <div>
           <div className='flex items-center gap-x-5'>
             <a onClick={()=> setaccount(false)}><FaArrowLeft/></a>
            <h3> Account Information</h3>
           </div>
           <div>
             <ul className='flex flex-col gap-y-4 px-2 py-8'>
                 <ListItem func={()=> setusername(true)} itemHeader={'Username'} itemSubtext={'Morty619052'}/>
                 <ListItem func={()=> setemailchange(true)} itemHeader={'email'} itemSubtext={'evilmorty@mail.com'}/>
                 <ListItem func={()=> setphone(true)} itemHeader={'phone'} itemSubtext={'Not Added'}/>
                 <ListItem func={()=> setmailing(true)} itemHeader={'Mailing Address'} itemSubtext={'12 White Hart Lane Michigan 8080  usa'}/>
                 <ListItem func={()=> seteverified(true)}itemHeader={'Verified'} itemSubtext={'No'}/>
             </ul>
           </div>
       </div>
    </div>
    </>
  )
}
const ChangePassword = () => {
  
  return(
    <>
    <div>
      <PasswordUpdateScreen func={()=> setchangePassword(false)} header={'Change Your Password'}/>
      
    </div>
    </>
  )
}

const DownloadData = () => {
  const list =[
    {
      itemHeader: 'Trading History',
      itemSubtext: 'Download An Archive Of All Trading Activity ',
      switch:      <MenuCheckbox/>
    },
    {
      itemHeader: 'Investment Portfolio',
      itemSubtext: 'Download An Archive Of Your Investment Portfolio ',
      switch:      <MenuCheckbox/>
    },
    {
      itemHeader: 'One Hive Activity',
      itemSubtext: 'Download A Visualization Of One Hive Activity',
      switch:      <MenuCheckbox/>
    },
  ]


  return(
    <>
    <div>
    <MenuItem func={()=> setdownloadData(false)} buttonText={'Download'} itemHeader={'Download Your Data'} itemSubtext={'Choose Which datasets You are Interested In downloading Now.'} list={list}/>
    </div>
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



function ListItem({func , itemHeader, itemSubtext}) {
  return (
    <>
      <a
        onClick={func}
        role="tab"
        aria-selected="false"
        data-testid="pivot"
        className="text-sm tap-transparent pointer-events-auto bg-transparent text-inherit font-inherit list-none  align-stretch border-0 box-border flex flex-col flex-shrink-0 mb-0 ml-0 mr-0 mt-0 min-w-0 relative z-0 pl-4 pr-4 pb-3 pt-3 transition duration-200 bg-none shadow-none outline-none cursor-pointer justify-between min-h-[48px]"
      >
        <div className="flex-shrink-0 flex-grow-1 flex min-w-0 min-h-0 p-0 m-0 relative z-0 align-center justify-between">
          <div class="select-none box-border flex flex-col items-stretch justify-start w-auto h-auto p-0 m-0 relative z-0 bg-transparent cursor-pointer text-inherit border-solid border-0 text-left whitespace-pre-wrap align-middle text-base font-normal leading-5 font-sans flex-grow flex-shrink" >
            <div
              dir="ltr"
              class="inline-block  font-normal text-base text-gray-900 leading-normal whitespace-pre-wrap break-words"
            >
              <span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
                {itemHeader}
              </span>
            </div>
            <div
              dir="ltr"
              class="text-xs font-normal leading-4 text-blue-gray-600"
            >
              <span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
                {itemSubtext}
              </span>
            </div>
          </div>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="-webkit-text-size-adjust-100 -webkit-tap-highlight-color-rgba-0-0-0-0 pointer-events-auto font-inherit list-none text-align-inherit cursor-pointer -webkit-box-direction-normal inline-block fill-current h-5 max-w-full relative align-text-bottom select-none flex-shrink-0 text-blue-600 pl-3"          >
            <g>
              <path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"></path>
            </g>
          </svg>
        </div>
      </a>
    </>
  );
}

function MenuItem({func, itemHeader, itemSubtext, list, buttonText}) {
  return (
    <>
    <div className='slide-in-right'>
     <div className=' flex items-center gap-x-8 px-4  pb-6'>
         <a className={ styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
         <div className=''>
         <span>{itemHeader}</span>
         </div>
     </div>
      <div className='py-2 px-2.5'>
      <p className={styles.UiSubHeading}>{itemSubtext}</p>
      </div>
      {
        list?.map((menuItem)=>{
          return(
            <a
        onClick={func}
        role="tab"
        aria-selected="false"
        data-testid="pivot"
        className="text-sm tap-transparent pointer-events-auto bg-transparent text-inherit font-inherit list-none  align-stretch border-0 box-border flex flex-col flex-shrink-0 mb-0 ml-0 mr-0 mt-0 min-w-0 relative z-0 pl-4 pr-4 pb-3 pt-3 transition duration-200 bg-none shadow-none outline-none cursor-pointer justify-between min-h-[48px]"
      >
        <div className="flex-shrink-0 flex-grow-1 flex min-w-0 min-h-0 p-0 m-0 relative z-0 align-center justify-between">
          <div class="select-none box-border flex flex-col items-stretch justify-start w-auto h-auto p-0 m-0 relative z-0 bg-transparent cursor-pointer text-inherit border-solid border-0 text-left whitespace-pre-wrap align-middle text-base font-normal leading-5 font-sans flex-grow flex-shrink" >
            <div
              dir="ltr"
              class="inline-block  font-normal text-base text-gray-900 leading-normal whitespace-pre-wrap break-words"
            >
              <span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
                {menuItem.itemHeader}
              </span>
            </div>
            <div
              dir="ltr"
              class="text-xs font-normal leading-4 text-blue-gray-600"
            >
              <span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
                {menuItem.itemSubtext}
              </span>
            </div>
          </div>
          <a
            
            class="-webkit-text-size-adjust-100 pt-4 -webkit-tap-highlight-color-rgba-0-0-0-0 pointer-events-auto font-inherit list-none text-align-inherit cursor-pointer -webkit-box-direction-normal inline-block fill-current h-5 max-w-full relative align-text-bottom select-none flex-shrink-0 text-blue-600 pl-3" >
           <input className='rounded-md border-gray-400  focus:border-green-300' type="checkbox" />
          </a>
        </div>
      </a>
          )
        })
      }
      <div className='py-12 w-full flex justify-end px-4'>
        <a className='py-2 px-4 bg-green-300 rounded-md  text-gray-600 text-[15px] font-medium hover:bg-green-400 hover:text-gray-800 cursor-pointer outline outline-gray-200 shadow-md'>{buttonText}</a>
      </div>
      </div>
    </>
  );
}

const  UpdateScreen = ({func, header, updateText, placeholder,}) => {
  return(
    <>
    <div>
       <div>
       <div className=' flex items-center gap-x-8 px-4 '>
         <a className={ styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
         <div>
         <span>{header}</span>
         {/* <p>evilmorty052@proton.me</p> */}
         </div>
         </div>
           <div className='py-8 px-8'>
              <input placeholder={placeholder} type="text" className='py-2 rounded-lg w-72' /> 
              <div className='py-8 text-center'>
                  <span>{updateText}</span>
              </div>
           </div>
       </div>
    </div>
    </>
  )
}

const  PasswordUpdateScreen = ({func, header, updateText, placeholder,}) => {
  return(
    <>
    <div>
       <div>
       <div className=' flex items-center gap-x-8 px-4 '>
         <a className={ styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
         <div>
         <span>{header}</span>
         {/* <p>evilmorty052@proton.me</p> */}
         </div>
         </div>
           <div className='py-8 px-8'>
            {/* <label className='ml-2 mb-2'>Current Password</label> */}
              <input placeholder={'Current Password'} type="text" className={styles.Input} /> 
              {/* <div className='py-8 text-center'>
                  <span>{updateText}</span>
              </div> */}
           </div>
           <div className='px-8 flex flex-col gap-y-4'>
           <input placeholder={'New Password'} type="text" className={styles.Input} /> 
           <input placeholder={'Confirm Password'} type="text" className={styles.Input} /> 
           </div>
            <div className='text-center py-8'>
              <p>Update Password</p>
            </div>
       </div>
    </div>
    </>
  )
}