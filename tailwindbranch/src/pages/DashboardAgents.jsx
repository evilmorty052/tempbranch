import React, { useState } from 'react';
// import {Mymodal, Modalbutton} from '../components/modal'
import MotionCard from './Aboutus';
import Sidebar from '../partials/Sidebar2';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/AgentBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import DashboardCard14 from '../partials/dashboard/DashboardCard14';
import Card from '../partials/dashboard/Card';
import Card2 from '../partials/dashboard/Card2';
import Banner from '../partials/Banner';
import Tabs from './Aboutus';
import Agents from '../partials/dashboard/Agents';
import AgentList from '../partials/dashboard/Card';
// import { getsanityuser } from './Loginpage';
import { useEffect } from 'react';
import {useQuery} from '@tanstack/react-query'
import { client, urlFor } from '../../lib/client';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
// import agentList from '../partials/dashboard/Card';
const query = `*[_type == "agents"]{name , lastname , bio, specialties, likes, followers, avatar, description}`

function DashboardAgents() {
  // const [agents, setAgents] = useState([
  //   {name: 'ZIK Stan', agentBio: ' Meet Our Spotlight Agent Of the week Claire! currently ranked 3rd on our Agents Ranking', specialties:['CBD','STOCKS','COCAINE'], agentDesc:'Claire Mac specializes in Crypto trade and CBD Stocks', id: 1}
  // ])
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: agents } = useQuery(['madLibsList'], () => client.fetch(query));
  const [liked, setLiked] = useState(false)


  useEffect(() => {
    if(agents){
      console.log(agents)
    }
  
    return () => {
      
    }
  }, [])  
if(!agents){
  return(
    <>
    <h1>loading</h1>
    </>
  )
}




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
            <WelcomeBanner />
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
              <div className='w-full mb-8 sm:hidden'>
                <span className='text-blk text-3xl font-poppins font-bold uppercase'>Top Rated Agents</span>
              </div>
           <div className=' w-full flex gap-8 flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 md:items-start'>
          
       <AgentList name={agents[0].name} bio={agents[0].bio} description={agents[0].description} avatar={urlFor(agents[0].avatar)}/>
       <AgentList name={agents[1].name} bio={agents[1].bio} description={agents[1].description} avatar={urlFor(agents[1].avatar)}/>
       <AgentList name={agents[2].name} bio={agents[2].bio} description={agents[2].description} avatar={urlFor(agents[2].avatar)}/>
       <div className='w-full mb-8 md:hidden'>
                <span className='text-blk text-3xl font-poppins font-bold uppercase'>Trending Agents</span>
              </div>
              <AgentList name={agents[3].name} bio={agents[3].bio} description={agents[3].description} avatar={urlFor(agents[3].avatar)}/>
              <AgentList name={agents[4].name} bio={agents[4].bio} description={agents[4].description} avatar={urlFor(agents[4].avatar)}/>
              <AgentList name={agents[5].name} bio={agents[5].bio} description={agents[5].description} avatar={urlFor(agents[5].avatar)}/>
              <AgentList name={agents[6].name} bio={agents[6].bio} description={agents[6].description} avatar={urlFor(agents[6].avatar)}/>
              <AgentList name={agents[7].name} bio={agents[7].bio} description={agents[7].description} avatar={urlFor(agents[7].avatar)}/>
          {/* <Agents/>
          <Agents/>
          <Agents/>
          <Agents/>
          <Agents/>
          <Agents/> */}
           </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {/* <DashboardCard01 />
              <DashboardCard02 />
              <DashboardCard03 />
              <DashboardCard14 />
              <DashboardCard13 /> */}
              
              
              
              
            </div>
          </div>
          
        </main>
        
        {/* <Banner /> */}

      </div>
    </div>
  );
}

export default DashboardAgents;