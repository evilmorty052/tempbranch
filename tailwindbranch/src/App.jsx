import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet
} from 'react-router-dom';

import ProtectedRoutes from './components/protectedroutes';

import { useAuth } from './contexts/AuthContext'

import './css/style.css';
import './index.css'
import Qkmenu from  "../src/partials/qkmenu"
import Confirmsignin from './pages/confirmsignin';


import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import DashboardAgents from './pages/DashboardAgents';
import Notfound from './pages/notfound';
import Pricing from './pages/Pricing';
import Dashboardsubscribe from './pages/Dashboardsubscribe';
import Home  from './Home'

import Registerpage from './pages/Registerpage'
import Pickagent from './pages/pickagent';
import Investing from './pages/invest/investing';
// import Whoweare from './pages/whoweare';
import Aboutus from './pages/Aboutus';
import Retirement from './pages/invest/retirement'
import Kids from './pages/invest/kids'
import Smart from './pages/invest/smartpofolio'
import Learn from './pages/explore/learn/learn';
import Explore from './pages/explore/explore';
import Products from './pages/explore/products/products';
import Registerpage1 from './pages/Registerpage1';
import Registerpage2 from './pages/Registerpage2';


import Test from './pages/test';

import Welcome from './pages/welcome';
import Newuser from './pages/newuser';
import Log from './pages/log';
import SetPin from './pages/SetPin';
import DashboardPortfolio from './pages/DashboardPortfolio';
import Agents from './pages/Agents/Agents';
import Agentprofile from './pages/Agents/Agentprofile';
import ServicePicker from './pages/ServicePicker';
import Digitalfarming from './pages/Digitalfarming';
import SmallBiz from './pages/SmallBiz';
import Withdrawal from './pages/Withdrawal';
import Coach from './pages/Coach';

function App() {
  const { currentUser } = useAuth()
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
    <Routes>
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Log/>} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/login3" element={<Confirmsignin />} />
        <Route exact path="/setpin" element={<SetPin/>} />
        <Route exact path="/newuser" element={<Newuser/>} />
        <Route exact path="/register/*" element={<Registerpage1/>} />
        <Route exact path="/digital" element={<Digitalfarming/>} />
        <Route exact path="/smallbiz" element={<SmallBiz/>} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/invest" element={<Investing />} />
        <Route exact path="/kids" element={<Kids />} />
        <Route exact path="/retirement" element={<Retirement/>} />
        <Route exact path="/smart" element={<Smart />} />
        <Route exact path="/learn" element={<Learn />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/pick" element={<ServicePicker />} />
        <Route exact path="/withdraw" element={<Withdrawal />} />
        <Route exact path="/coach" element={<Coach />} />
        <Route path="/agents" element={<Agents />} ></Route>
        <Route path="/agentprofile/*"  element={<Outlet/>} >
        <Route path=":agentid" element={<Agentprofile />} ></Route>
        </Route>
        
        {/* <Route element={<ProtectedRoutes/>}>
            <Route path ="/dashboard" element={<Dashboard />} />
            <Route path ="/profile" element={<Dashboardprofile />} />
        </Route> */}
        
        {/* <Route element={currentUser ? <Outlet /> : <Loginpage />}> */}
            <Route path ="/dashboard" element={<Dashboard />} />
            <Route path ="/pricing" element={<Pricing />} />
            {/* <Route path ="/subscribe" element={<Dashboardsubscribe />} /> */}
            {/* <Route exact path ="/dashboard/agents" element={<DashboardAgents />} /> */}
            <Route exact path ="/dashboard/portfolio" element={<DashboardPortfolio />} />
        {/* </Route> */}
      
        {/* <Route path="*" element={<Notfound />} /> */}
      
      {/* <ProtectedRoute exact path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route exact path="/profile" element={ProtectedRoute(<Dashboardprofile />)}/>
      <Route exact path="/dashboard" element={ProtectedRoute(<Dashboard />)}/> */}
   </Routes> 
    </>
  
  );
}

export default App;

// function ProtectedRoute(props) {
//   const { currentUser } = useAuth()
//   const { path } = props
//   console.log('path', path)
//   const location = useLocation()
//   console.log('location state', location.state)

//   if (
//     path === '/login' ||
//     path === '/register' ||
//     path === '/forgot-password' ||
//     path === '/reset-password'
//   ) {
//     return currentUser ? (
//       // <Navigate to={location.state?.from ?? '/dashboard'} />
//       <Outlet />
//     ) : (
//       <Route {...props} />
//     )
//   }
//   return currentUser ? (
//     <Route {...props} />
//   ) : (
//     <Navigate
//       to={{
//         pathname: '/login',
//         state: { from: path },
//       }}
//     />
//   )
// }

