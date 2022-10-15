import React, { useState } from 'react';
// import {Mymodal, Modalbutton} from '../components/modal'
import MotionCard from './Aboutus';
import Sidebar from '../partials/Sidebar2';
import Header from '../partials/Header';
import PortfolioBanner from '../partials/dashboard/PortfolioBanner';
import Card from '../partials/dashboard/Card';
import Card2 from '../partials/dashboard/Card2';
import Banner from '../partials/Banner';
import Tabs from './Aboutus';
import Agents from '../partials/dashboard/AgentCard';
// import { getsanityuser } from './Loginpage';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Dashboardsubscribe from './Dashboardsubscribe';

function DashboardPortfolio() {
 
  
   
 
  


  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <div className="flex h-screen overflow-hidden bg-plat">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <PortfolioBanner />
                 {/* <div><h1>{sanityuser.username}</h1></div> */}
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                {/* <FilterButton /> */}
                {/* Datepicker built with flatpickr */}
                {/* <Datepicker /> */}
                {/* Add view button */}
                {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                </button>                 */}
              </div>
           <div className=' w-full flex gap-8 flex-col sm:flex sm:flex-row sm:items-center justify-center max-w-lg'>
          <Tabs/>
          {/* <Dashboardsubscribe/> */}
          {/* <Agents/> */}
           </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              
            </div>
          </div>
          
        </main>
        
        {/* <Banner /> */}

      </div>
    </div>
  );
}

export default DashboardPortfolio;