import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaArrowRight, FaHandHoldingUsd, FaBriefcase, FaGraduationCap, FaChartLine, FaPowerOff, FaUserTie } from 'react-icons/fa';



import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div className=''>
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div className='bg-inherit relative'>
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-glass2 p-4 transition-all duration-500 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <h2 className='text-3xl font-poppins font-extrabold text-blk'>MEDIK <span className='text-green-400'>420</span> </h2>
          </NavLink>
        </div>

        {/* Links */}
        <div className="">
          {/* Pages group */}
          <div>
            {/* <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
            </h3> */}
            <ul className="mt-3 space-y-8 md:space-y-10">
              {/* Dashboard */}
              <div className='hover:bg-green-400 rounded-3xl'>
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/' && 'bg-slate-900'}`}>
                <NavLink end to="/dashboard" className={`block text-glass hover:text-white truncate transition duration-150 ${pathname === '/' && 'hover:text-slate-200'}`}>
                  <div className="flex items-center">
                    {/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-400 ${pathname === '/' && '!text-indigo-500'}`} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                      <path className={`fill-current text-slate-600 ${pathname === '/' && 'text-indigo-600'}`} d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                      <path className={`fill-current text-slate-400 ${pathname === '/' && 'text-indigo-200'}`} d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                    </svg> */}
                    <span className='text-2xl'><FaChartLine/></span>
                    <span className="flex font-poppins gap-4 justify-center items-center text-lg font-bold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">DASHBOARD  </span>
                  </div>
                </NavLink>
              </li>
              </div>
              <div className='hover:bg-green-400 rounded-3xl'>
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/' && 'bg-slate-900'}`}>
                <NavLink end to="/dashboard/portfolio" className={`block text-glass hover:text-white truncate transition duration-150 ${pathname === '/' && 'hover:text-slate-200'}`}>
                  <div className="flex items-center">
                    {/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-400 ${pathname === '/' && '!text-indigo-500'}`} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                      <path className={`fill-current text-slate-600 ${pathname === '/' && 'text-indigo-600'}`} d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                      <path className={`fill-current text-slate-400 ${pathname === '/' && 'text-indigo-200'}`} d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                    </svg> */}
                    <span className='text-2xl'><FaBriefcase/></span>
                    <span className="font-bold font-poppins flex gap-4 justify-center items-center  text-lg ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">PORTFOLIO </span>
                  </div>
                </NavLink>
              </li>
              </div>
              <div className='hover:bg-green-400 rounded-3xl'>
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/' && 'bg-slate-900'}`}>
                <NavLink end to="/profile" className={`block text-glass hover:text-white truncate transition duration-150 ${pathname === '/profile' && 'hover:text-slate-200'}`}>
                  <div className="flex items-center">
                    {/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-400 ${pathname === '/' && '!text-indigo-500'}`} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                      <path className={`fill-current text-slate-600 ${pathname === '/' && 'text-indigo-600'}`} d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                      <path className={`fill-current text-slate-400 ${pathname === '/' && 'text-indigo-200'}`} d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                    </svg> */}
                    <span className='text-2xl'><FaGraduationCap/></span>
                    <span className=" font-bold font-poppins flex gap-4 justify-center items-center  text-lg  ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">COACH </span>
                  </div>
                </NavLink>
              </li>
              </div>
              <div className='hover:bg-green-400 rounded-3xl'>

              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('inbox') && 'bg-slate-900'}`}>
                <NavLink end to="/profile" className={`block text-glass hover:text-white truncate transition duration-150 ${pathname.includes('inbox') && 'hover:text-slate-200'}`}>
                  <div className="flex items-center ">
                    {/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-600 ${pathname.includes('inbox') && 'text-indigo-500'}`} d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z" />
                      <path className={`fill-current text-slate-400 ${pathname.includes('inbox') && 'text-indigo-300'}`} d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z" />
                    </svg> */}
                    <span className='text-2xl'><FaHandHoldingUsd/></span>
                    <span className=" font-poppins flex gap-4 justify-center items-center  text-lg font-bold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">WITHDRAW </span>
                  </div>
                </NavLink>
              </li>
             
              </div>
              <div className='hover:bg-green-400 rounded-3xl'>

              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('inbox') && 'bg-slate-900'}`}>
                <NavLink end to="/dashboard/agents" className={`block text-glass hover:text-white truncate transition duration-150 ${pathname.includes('inbox') && 'hover:text-slate-200'}`}>
                  <div className="flex items-center ">
                    {/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-600 ${pathname.includes('inbox') && 'text-indigo-500'}`} d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z" />
                      <path className={`fill-current text-slate-400 ${pathname.includes('inbox') && 'text-indigo-300'}`} d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z" />
                    </svg> */}
                    <span className='text-2xl'><FaUserTie/></span>
                    <span className=" font-poppins flex gap-4 justify-center items-center  text-lg font-bold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">AGENTS </span>
                  </div>
                </NavLink>
              </li>
             
              </div>
              <li className='absolute bottom-20 bg-black  text-red-400 flex flex-col items-center justify-center h-16 w-16 rounded-full text-bold text-4xl font-poppins'>
                <button  onClick={async e => {
      e.preventDefault()
      await logout()
    }}><FaPowerOff/></button>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
      </div>
    </div>
      
    </div>
      </div>
      
  );
}

export default Sidebar;