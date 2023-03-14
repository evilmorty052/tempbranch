import React, { useState } from 'react';
import SearchModal from './header/SearchModal';
import { useNavigate } from 'react-router-dom';
import Notifications from './header/DynamicNotifications';
import Help from './header/Help';
import UserMenu from './header/UserMenu';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import { HomeOutlined, PlusCircleFilled, UserOutlined } from '@ant-design/icons';

function Header({
  setisExpanded,
  isExpanded,
  notifications,
  unread,
  name,
  sidebarOpen,
  setSidebarOpen,
  avatar
}) {

  let dashboardpaths
  let path = useLocation().pathname

  switch (path) {
    case '/dashboard/settings':
      dashboardpaths = true
      break;
    case '/dashboard/Dashboard':
      dashboardpaths = true
      break;
    case '/dashboard/portfolio':
      dashboardpaths = true
      break;
   
      case '/coach':
      dashboardpaths = true
      break;
     
    
  
    default:
      break;
  }

  
  let pathid
  console.log(path)

  switch (path) {
    case '/dashboard/portfolio':
    pathid = 'Portfolio'
      break;
    case '/dashboard':
    pathid = 'Dashboard'
      break;
    case '/coach':
    pathid = 'HIVE COACH'
      break;
    
    case '/smallbiz':
    pathid = 'One Hive'
      break;
    case '/digital':
    pathid = 'Digital Farming'
      break;
    case '/hiveai':
    pathid = 'Hive Mind'
      break;
    case '/invest':
    pathid = 'Investments'
      break;
    case '/profile':
    pathid = 'Settings'
      break;
  
    default:
      break;
  }
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  const history = useNavigate()

  return (
    <header className=" top-0 sticky bg-gray-800 shadow-2xl border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 -mb-px">

          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-white  lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => {
               sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true) ;
              //  setisExpanded(true)
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            {/* <hr className="w-px h-6 bg-white mx-3" /> */}
            
            <h3 className='hidden sm:block uppercase text-xl text-white font-poppins tracking-widest font-bold ml-5'>{pathid}</h3>
          </div>
       

          {/* Header: Right side */}
         {dashboardpaths &&
           <div className="flex items-center">

          
            
            {path ==  '/dashboard' && <Notifications unread={unread} msg={notifications} />}
            {
              path == '/dashboard/portfolio' && <Add/>
            }
            {path ==  '/dashboard' && <Help />}
            
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu name={name} avatar={avatar && avatar} />

          </div>
          }
         {/* {path = '/dashboard/portfolio' &&
         <div className="flex items-center">

          
            
            {path ==  '/dashboard' && <Notifications unread={unread} msg={notifications} />}
            <Help />
            
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu name={name} avatar={avatar && avatar} />

          </div>} */}
          {
            !dashboardpaths && 
            <div className='flex items-start font-poppins '>
              <div className='flex items-end'>
              <span className='text-white text-xl sm:hidden'>
                {pathid}
              </span>
              </div>
              <hr className="w-px h-6 bg-white mx-3" />
               
               <div className='flex items-end gap-x-4'>
              {/* <UserOutlined/> */}
              <span onClick={()=> history(-1)}  className=' text-slate-400 mr-2 text-xl' href="">Back</span>
               </div>
              {/* <a className='text-sm uppercase bg-green-300 rounded-xl px-2 py-1'>Sign Up</a> */}
            </div>
          }

        </div>
      </div>
    </header>
  );
}

export default Header;


function Add(params) {
  return(
    <>
    <div className='flex items-center gap-x-2'>
      <p className='text-white text-[18px] font-space uppercase'>Add Account</p>
       <PlusCircleFilled style={{color: '#86efac'}}/>
    </div>
    </>
  )
}