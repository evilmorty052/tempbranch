import React, { useState , useRef} from 'react';
// import {Mymodal, Modalbutton} from '../components/modal'
import MotionCard from './Aboutus';
import Sidebar from '../partials/Sidebar2';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import DashboardCard14 from '../partials/dashboard/DashboardCard14';
import Tabs from './Aboutus';
import Agents from '../partials/dashboard/AgentCard';
// import { getsanityuser } from './Loginpage';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { client, urlFor } from '../../lib/client';
import Loader from '../components/Loader';
import cbd from '../assets/airbnb.png'
import { FaPlusCircle } from 'react-icons/fa';
import AnimatedSidebar from '../components/AnimatedSidebar'


function Dashboard() {
  const emailID = localStorage.getItem('email')
  let query = `*[email == "${emailID}"]`
  const { data: user } = useQuery(['userlist'], () => client.fetch(query))
  ;

  


  


 let notifications = user && user[0].notifications 
//  let preview = notifications && notifications.reverse()



  const [sidebarOpen, setSidebarOpen] = useState(false);
if(!user){
  return (
    <Loader/>
  )
}
  return (
<>
{ 
  <div className="flex h-screen overflow-hidden bg-plat">

  {/* Sidebar */}
  <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} avatar={user[0].avatar && urlFor(user[0].avatar)}/>
   
  {/* Content area */}
  <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">

    {/*  Site header */}
    <div >
    <Header 
    
    sidebarOpen={sidebarOpen}
   setSidebarOpen={setSidebarOpen}
    name={user[0].firstname}
    notifications={user[0].notifications && notifications}
    avatar={user[0].avatar ? `${urlFor(user[0].avatar)}` : cbd} />
    </div>

    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto element-1">

        {/* Welcome banner */}
        <div className='hidden sm:w-full px-5  sm:flex gap-x-4 justify-center' >
         <div className='self-center flex justify-items-start pr-5 py-2'><WelcomeBanner name={user[0].firstname} text="Here's Your Daily Breakdown" /></div>
         <div className='flex self-end pl-5'><Tabs/></div>
        </div>
        <div className='sm:hidden' >
        <WelcomeBanner name={user[0].firstname} text="Here's Your Daily Breakdown" />
        </div>
        {/* Dashboard actions */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          {/* Left: Avatars */}
          {/* <DashboardAvatars /> */}

          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          </div>
       <div className=' w-full flex gap-8 flex-col sm:flex sm:flex-row sm:items-start'>
     <div className=' sm:self-center sm:hidden md:hidden'><Tabs/></div> 
     <div className="max-w-sm step-2 sm:hidden md:hidden">
     
      </div> 
     <div className="hidden sm:hidden md:hidden">
     <Agents/>
      </div> 
       </div>
        </div>
        <div  className="grid grid-cols-12 gap-6">
          <DashboardCard01 earnings={user[0].earnings} />
          <DashboardCard02 investment={user[0].investment}/>
          <DashboardCard03 plan={user[0].plan}/>
          <DashboardCard14 text='Total Bonus' amount='100' icon={<FaPlusCircle/>}/>
          <DashboardCard13 />
        </div>
      </div>
      
    </main>

    {/* <Banner /> */}
  
  </div>
</div>
}
</>
    
  );
}

export default Dashboard;