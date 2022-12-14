import React, { useState } from 'react';
import SearchModal from './header/SearchModal';
import Notifications from './header/Notifications';
import Help from './header/Help';
import UserMenu from './header/UserMenu';
import { useLocation } from 'react-router-dom';

function Header({
  notifications,
  name,
  sidebarOpen,
  setSidebarOpen,
  avatar
}) {


  let path = useLocation().pathname
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
  
    default:
      break;
  }
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <header className=" top-0 bg-blk shadow-2xl border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-white  lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <h3 className='hidden sm:block uppercase text-xl text-white font-poppins tracking-widest font-bold ml-5'>{pathid}</h3>
          </div>
       

          {/* Header: Right side */}
          <div className="flex items-center">

          
            {/* <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} /> */}
            <Notifications msg={notifications}/>
            <Help />
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu name={name} avatar={avatar && avatar} />

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;