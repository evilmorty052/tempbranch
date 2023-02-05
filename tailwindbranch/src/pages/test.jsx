// import React from 'react'
// import robot from '../assets/robot.png'
// import PricingCard from '../components/PricingCard'

// const test = () => {
//   return (
//     <>
//     <div className='min-h-screen py-12'>
//     <div className='container mx-auto flex justify-center font-poppins rounded-3xl bg-slate-500 '>
//     <div className='grid grid-cols-1 sm:grid-cols-2 border  bg-white sm:gap-x-10 '>
//         <div className=' p-2 flex flex-col justify-center '>
//            <h3 className='text-4xl  uppercase tracking-wide font-bold'>A Plan For Everyone</h3>
//            <p className=' uppercase text-lg'>just pick one to start earning</p>
//         </div>
//         <div>
//         <div className=' border sm:relative sm:overflow-y-hidden '>
//          <div className=' w-60 h-60 sm:w-80 sm:h-80 lg:h-96 lg:w-96 bg-white  sm:flex sm:justify-center sm:items-center '>
//             <div className='sm:absolute right-0'>
//                 <img src={robot} className=' w-full '/>
//             </div>
//          </div>
//         </div>

//         </div>

//     </div>
//     </div>

//     <PricingCard/>
//     </div>
   
   
//     </>
   
//   )
// }

// export default test


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
// import Tabs from './Aboutus';
import Agents from '../partials/dashboard/AgentCard';
// import { getsanityuser } from './Loginpage';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { client, urlFor } from '../../lib/client';
import Loader from '../components/Loader';
import cbd from '../assets/airbnb.png'
import { Tabs } from 'antd';
import Registerpage from './Registerpage3';
import Smallcard from '../components/smallcard';
import { Button, Progress } from 'antd';
import AnimatedSidebar from '../components/AnimatedSidebar';
import  Accountcard from '../components/Accountcard'
import { Slider , Col, InputNumber, Row} from 'antd';
import { background } from '@chakra-ui/react';
import {Tour} from 'antd'
import DashboardCard014 from '../partials/dashboard/DashboardCard14';

function DashboardPortfolio() {
  const [text, settext] = useState('')
  const [tip, settip] = useState(false)
  const emailID = localStorage.getItem('email')
  let query = `*[email == "${emailID}"]`
  const { data: user, refetch, isloading, isFetched , isRefetching} = useQuery(['userlist'], () => client.fetch(query))
  ;

  const accounts = user && user[0].accounts?.map((account)=>{
    let child 
    switch (account.type) {
      case 'Personal':
      child = <Personal/>
        
        break;
      case 'Retirement':
      child = <Retirement/>
        
        break;
      case 'Custodial':
      child = <Kids/>
        
        break;
    
      default:
        break;
    }
    return {
      label: isloading ? <span>..loading</span> : account.type,
        key: account.type,
   children: child

    }
  })
  const [active, setactive] = useState(null)
  useEffect(() => {
  user && setactive(accounts)
  
    
  }, [user])
  

const slider = useRef()
 let notifications = user && user[0].notifications 
 let unread = notifications?.filter((msg)=>{
  return(
    msg.read !== true
  )
 })
//  let preview = notifications && notifications.reverse()


const ref1 = useRef(null);
const ref2 = useRef(null);
const ref3 = useRef(null);
const [open, setOpen] = useState(false);



useEffect(() => {
  setOpen(true)

  
}, [])



const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };


function Personal(params) {
  return(
    <>
    <>
    <div className='container flex flex-col space-y-2 font-poppins'>
      <div className='p-2 my-2 space-y-3 text-sm text-gray-600'>
      <h3 ref={ref1}  className='text-xl text-left font-bold'>Personal Portfolio</h3>
      <p className='text-left'>This Tab Displays Earnings From Your Personal Account <br className='hidden sm:block' /> Switch Tabs to View Other Data </p>
      </div>
      <div className='flex flex-col justify-center gap-y-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='flex justify-center lg:justify-start' ref={ref2}>
     <Accountcard earnings={1000} show text={'PERSONAL ACCOUNT'}/>
      </div>
      <div className='border border-emerald-400 lg:grid grid-rows-1 items-center hidden'>
        <div className=''>
        {/* <IntegerStep/> */}
        <div className='flex flex-col gap-y-3 px-5   ' ref={ref3}>
      <Button  style={{ background:"#86efac", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Set Withdrawal Date
        </Button>
      <Button style={{ background:"#1a1a1a", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Automate Investments
        </Button>
      </div>
        </div>
      </div>
      </div>
      <div className='flex lg:hidden '>
            
      <div className='flex flex-col gap-y-3 lg:hidden w-full   '>
      <Button style={{ background:"#86efac", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Set Withdrawal Date
        </Button>
      <Button style={{ background:"#1a1a1a", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Automate Investments
        </Button>
      </div>
      </div>
      <div className='my-4'><DashboardCard01 earnings={user?.[0].earnings} /></div>
      <div className='my-4'><DashboardCard02 investment={user?.[0].investment} /></div>
      <div>
      <h3 onClick={()=>setOpen(true)} className='text-xl text-blk font-bold'>Recent Transactions</h3>
     </div>
      </div>
    </div>
    </>
    </>
  )
  
}
function Retirement(params) {
  return(
    <>
   <div className='container flex flex-col space-y-2 font-poppins'>
      <div className='p-2 my-2 space-y-3 text-sm text-gray-600'>
      <h3 ref={ref1}  className='text-xl text-left font-bold'>Retirement Portfolio</h3>
      <p className='text-left'>This Tab Displays Earnings From Your Retirement Account <br className='hidden sm:block' /> Switch Tabs to View Other Data </p>
      </div>
      <div className='flex flex-col justify-center gap-y-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='flex justify-center lg:justify-start' ref={ref2}>
     <Accountcard earnings={1000} show text={'RETIREMENT ACCOUNT'}/>
      </div>
      <div className='border border-emerald-400 lg:grid grid-rows-1 items-center hidden'>
        <div className=''>
        {/* <IntegerStep/> */}
        <div className='flex flex-col gap-y-3 px-5   ' ref={ref3}>
      <Button  style={{ background:"#86efac", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Set Withdrawal Date
        </Button>
      <Button style={{ background:"#1a1a1a", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Automate Investments
        </Button>
      </div>
        </div>
      </div>
      </div>
      <div className='flex lg:hidden '>
            
      <div className='flex flex-col gap-y-3 lg:hidden w-full   '>
      <Button style={{ background:"#86efac", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Set Withdrawal Date
        </Button>
      <Button style={{ background:"#1a1a1a", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Automate Investments
        </Button>
      </div>
      </div>
      <div className='my-4'><DashboardCard014/></div>
      <div>
      <h3 onClick={()=>setOpen(true)} className='text-xl text-blk font-bold'>Recent Transactions</h3>
     </div>
      </div>
    </div>
    </>
  )
  
}
function Kids(params) {
  return(
    <>
    <div className='container flex flex-col space-y-2 font-poppins'>
      <div className='p-2 my-2 space-y-3 text-sm text-gray-600'>
      <h3 ref={ref1}  className='text-xl text-left font-bold'>Custodial Portfolio</h3>
      <p className='text-left'>This Tab Displays Earnings From Your Custodial Account <br className='hidden sm:block' /> Switch Tabs to View Other Data </p>
      </div>
      <div className='flex flex-col justify-center gap-y-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
     
      <div className='flex justify-center lg:justify-start' ref={ref2}>
     <Accountcard earnings={1000} show text={'CUSTODIAL ACCOUNT'}/>
      </div>
      <div className='border border-emerald-400 lg:grid grid-rows-1 items-center hidden'>
        <div className=''>
        {/* <IntegerStep/> */}
        <div className='flex flex-col gap-y-3 px-5   ' >
      <Button ref={ref3}  style={{ background:"#86efac", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Set Withdrawal Date
        </Button>
      <Button style={{ background:"#1a1a1a", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Automate Investments
        </Button>
      </div>
        </div>
      </div>
      </div>
      <div className='flex lg:hidden '>
            
      <div className='flex flex-col gap-y-3 lg:hidden w-full   '>
      <Button style={{ background:"#86efac", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Set Withdrawal Date
        </Button>
      <Button style={{ background:"#1a1a1a", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Automate Investments
        </Button>
      </div>
      </div>
      <div className='my-4'><DashboardCard014/></div>
      <div>
      <h3 onClick={()=>setOpen(true)} className='text-xl text-blk font-bold'>Recent Transactions</h3>
     </div>
      </div>
    </div>
    </>
  )
  
}
const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={100}
          style={{
            margin: '0 16px',
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
let  items=[
  {
    label: `Personal`,
    key: '1',
    children: <Personal/>,
  },
  {
    label: `Retirement`,
    key: '2',
    children: <Retirement/>,
  },
  {
    label: `Kids`,
    key: '3',
    children: <Kids/>,
  },
]

function handlechange(params) {
  setTimeout(() => {
    refetch().then((res)=> {
      res && setactive(accounts)
      console.log('fetched')}) 
  }, 1000 );
  
  
}

  const [sidebarOpen, setSidebarOpen] = useState(false);
if(isloading){
  return (
    <Loader/>
  )
}
  return (
<>
{ isFetched &&
  <div className="flex h-screen overflow-hidden bg-plat">

  {/* Sidebar */}
  <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} avatar={user[0].avatar && urlFor(user[0].avatar)}/>
  {/* <AnimatedSidebar links={exampleLinks}/> */}

  {/* Content area */}
  <div className="relative bg-gray-100 flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">

    {/*  Site header */}
    <Header 
    sidebarOpen={sidebarOpen}
   setSidebarOpen={setSidebarOpen}
    name={user[0].firstname}
    notifications={user[0].notifications && notifications}
    // unread={unread}
    avatar={user[0].avatar ? `${urlFor(user[0].avatar)}` : cbd} />
     <div className='p-2 sm:p-4'>
     <div className='text-center mb-4'>
          <h3 onClick={handlechange}  className='text-3xl font-poppins font-bold'> MEDIK 420 STASH</h3>
     </div>
     <Tabs
     centered
    tabBarStyle={{ fontWeight:'bold' , textDecoration: 'uppercase', }}
    animated
    size='large'
    defaultActiveKey="Investment"
    items={active}
  />

      </div>  
    


  </div>
</div>
}
</>
    
  );
}

export default DashboardPortfolio;


export function Cascade(params) {
  return (
    <div class=" copper-c-PJLV copper-c-dhzjXW copper-c-PJLV-idZwvW-mx-auto copper-c-PJLV-cRMwiu-px-10 copper-c-PJLV-eEFDZx-pt-10 copper-c-PJLV-dlehqJ-gap-8 copper-c-dhzjXW-ejCoEP-direction-row copper-c-dhzjXW-jroWjL-align-center copper-c-dhzjXW-kbQFBT-direction-column copper-c-PJLV-icFkhyL-css">
      <div class="copper-c-PJLV copper-c-dhzjXW copper-c-dhzjXW-iTKOFX-direction-column copper-c-PJLV-ibPNjhd-css">
        <span class="copper-c-PJLV copper-c-ijQgyN copper-c-PJLV-bYCBRm-text-titleSmall">
          Introducing Yield: Earn up to 8% APR
        </span>
        <div class="copper-c-lkBwmR copper-c-lkBwmR-kDGcqX-y-4"></div>
        <span class="copper-c-PJLV copper-c-ijQgyN copper-c-PJLV-czFoWF-color-staticContentWeak copper-c-PJLV-jJMQOd-text-paragraphDefaultRegular">
          You can now earn up to 8% APR on your idle cash with Pipe! Choose from
          6, 9, or 12-month lockup periods.
        </span>
        <div class="copper-c-lkBwmR copper-c-lkBwmR-kQxywJ-y-8"></div>
        <div class="copper-c-PJLV copper-c-PJLV-gVreXC-mx-auto">
          <button
            type="button"
            aria-haspopup="false"
            class="copper-c-PJLV copper-c-kxBdpf copper-c-kxBdpf-hjOlmU-size-comfortable copper-c-kxBdpf-eMQLgW-cv copper-c-PJLV-iikdOZK-css"
          >
            <span class="copper-c-jPeAMC copper-c-jPeAMC-iftAOXD-css">
              Get started
            </span>
          </button>
        </div>
      </div>
      <div class="copper-c-PJLV copper-c-PJLV-jWxSah-width-120 copper-c-PJLV-iuQCmY-minWidth-0 copper-c-PJLV-kNZXiF-width-full copper-c-PJLV-ibPNjhd-css">
        <video
          playsinline=""
          loop=""
          autoplay=""
          style={{width: "100%", borderRadius: '5px'}}
        >
          <source src="https://storage.googleapis.com/production-assets/website-assets/treasury.mp4" />
        </video>
      </div>
    </div>
  );
}

