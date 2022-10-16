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
import PricingCard from '../components/PricingCard';

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

            <div className="sm:flex sm:justify-between sm:items-center mb-8">
            <Tabs/>
            
           <div className=' w-full flex gap-8 flex-col sm:flex sm:flex-row sm:items-center justify-center max-w-lg'>
           <PricingCard/>
           </div>
            </div>
          </div>
          
        </main>
        
        {/* <Banner /> */}

      </div>
    </div>
  );
}

export default DashboardPortfolio;