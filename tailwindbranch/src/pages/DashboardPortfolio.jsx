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
  const { data: user } = useQuery(['userlist'], () => client.fetch(query))
  ;
const slider = useRef()
 let notifications = user && user[0].notifications 
//  let preview = notifications && notifications.reverse()

const exampleLinks = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Contact',
    url: '/contact'
  },
  {
    title: 'Blog',
    url: '/blog'
  },
  {
    title: 'FAQ',
    url: '/faq'
  }
];
const ref1 = useRef(null);
const ref2 = useRef(null);
const ref3 = useRef(null);
const [open, setOpen] = useState(false);
const steps = [
  {
    title: 'Upload File',
    description: 'Put your files here.',
    cover: (
      <img
        alt="tour.png"
        src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
      />
    ),
    target: () => ref1.current,
  },
  {
    title: 'Save',
    description: 'Save your changes.',
    target: () => ref2.current,
  },
  {
    title: 'Other Actions',
    description: 'Click to see other actions.',
    target: () => ref3.current,
  },
];

useEffect(() => {
  setOpen(true)

  
}, [])

const exampleProps = {
  title: 'Sidebar',
  links: exampleLinks,
  isExpanded: false
};

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
      <div className='my-4'><DashboardCard014/></div>
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
  {/* <AnimatedSidebar links={exampleLinks}/> */}

  {/* Content area */}
  <div className="relative bg-gray-100 flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">

    {/*  Site header */}
    <Header 
    sidebarOpen={sidebarOpen}
   setSidebarOpen={setSidebarOpen}
    name={user[0].firstname}
    notifications={user[0].notifications && notifications}
    avatar={user[0].avatar ? `${urlFor(user[0].avatar)}` : cbd} />
     <div className='p-2 sm:p-4'>
     <div className='text-center mb-4'>
          <h3 className='text-3xl font-poppins font-bold'> MEDIK 420 STASH</h3>
     </div>
     <Tabs
     centered
    tabBarStyle={{ fontWeight:'bold' , textDecoration: 'uppercase', }}
    animated
    size='large'
    defaultActiveKey="1"
    items={items}
  />
  {/* <Tour open={open} onClose={() => setOpen(false)} steps={steps} /> */}
      </div>  
    
    {/* <Banner /> */}

  </div>
</div>
}
</>
    
  );
}

export default DashboardPortfolio;