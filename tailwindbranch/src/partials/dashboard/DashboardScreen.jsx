import { Route, Routes } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { urlFor } from "../../../lib/client"
import {BottomNavigation, MobileDashboard, MobilePortfolio, MessageScreen, MobileHub} from "./index"
import { Settings } from "../../pages"
import Header from "../Header"
import cbd from '../../assets/stashlogo.png'
import Loader from "../../components/Loader"

const DashboardScreen = () => {
const emailID = localStorage.getItem('email')
let query = `*[email == "${emailID}"]`
const user = useFetch(query,'[currentuser]')
const userdetails = {...user?.[0]}
// console.log(userdetails)

const {avatar, firstname, lastname, transactions, accounts} = userdetails

// if(!user){
//     return(
//         <>
//         <Loader/>
//         </>
//     )
// }
 

  return (
    <>
    <Header avatar={avatar ? `${urlFor(avatar)}` : ''} name={firstname} 
    />
     {/* <div className="">
   { !user ? 
   <div className=" h-screen">
      <div className="">
      <Loader/>
      </div>
   </div>
     :
    <Routes>
        <Route path="dashboard" element={<MobileDashboard transactions={transactions} firstname={firstname} lastname={lastname}/>} />
        <Route path="/" element={<MobileDashboard transactions={transactions} firstname={firstname} lastname={lastname}/>} />
        <Route path="/portfolio" element={<MobilePortfolio/>} />
    </Routes>
    }
     </div> */}
     <div>
     <Routes>
        <Route path="dashboard" element={<MobileDashboard transactions={transactions} firstname={firstname} lastname={lastname}/>} />
        <Route path="/" element={<MobileDashboard transactions={transactions} firstname={firstname} lastname={lastname}/>} />
        <Route path="/portfolio" element={<MobilePortfolio portfolios={accounts}/>} />
        <Route path="/messages" element={<MessageScreen/>} />
        <Route path="/hub" element={<MobileHub/>} />
    </Routes>
     </div>
    <BottomNavigation/>
    </>
  )
}




export default DashboardScreen