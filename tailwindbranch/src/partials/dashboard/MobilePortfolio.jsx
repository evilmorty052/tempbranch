import { FaChild, FaClock, FaDollarSign, FaSearch } from "react-icons/fa"
import styles from "../../style"
import { useState } from "react"
import { Progress } from 'antd'
import {PortfolioScreen, Cryptoinvestments} from "./index"


const MobilePortfolio = ({portfolios}) => {
const [activePortfolio, setactivePortfolio] = useState(false)
const [crypto, setcrypto] = useState(true)
const SearchInvestments = () => {
    return(
        <div className="space-y-8">
        <div className="flex justify-between px-2">
            <h3 className="text-[20px] font-bold">Investing</h3>
            <span>explore investments</span>
        </div>
        <div className="px-4">
        <div className="flex items-center space-x-2 p-2 bg-gray-200 rounded-xl">
             <FaSearch/>
             <hr className="w-px  h-6 bg-slate-200 mx-4" />
             <input placeholder="Search all investments" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
        </div>
        </div>
     </div>
    )
}

const PortfolioCard = ({header, buttontext, func, description}) => {
    return(
        <>
         <div className="flex items-center space-x-4 bg-gray-200 max-w-[350px] px-2 py-4 rounded-xl">
             <div className="p-2 bg-white rounded-xl">
                <FaChild/>
             </div>
             <div className="flex items-center space-x-2">
                 <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{header}</h3>
                     <p className=" text-sm leading-normal" >{description} </p>
                 </div>
                 <button onClick={func} className="w-20  bg-green-300 py-1  rounded-3xl">{buttontext}</button>
             </div>
         </div>
        </>
    )
}

const ReturnsCard = () => {
    return(
        <>
        <div>
             <div>

             </div>
        </div>
        </>
    )
}



if(activePortfolio){
    return(
        <PortfolioScreen ActivePortfolio={activePortfolio}/>
    )
}

if(crypto){
    return(
       <Cryptoinvestments activecoin={'bitcoin'}/>
    )
}
  return (
    <div className="pt-8 pb-[73px]">
         <div>
          <SearchInvestments/>
           <div className="px-2 py-8">
               <div className="space-y-8 ">
                  <h3>new features</h3>
                <div className="flex justify-center">
                <PortfolioCard header={'Shared Portfolio now available'} description={'find out how easy it is to share a portfolio with another user.'} buttontext={'Explore'}/>
                </div>
               </div>
               <div className="space-y-8 py-4 ">
                  <h3>Your Portfolios</h3>
                <div className="flex justify-center">
                <PortfolioCard func={()=> setactivePortfolio(true)} header={'Personal Portfolio'} description={'Explore stocks startups and crypto and invest as you see fit '} buttontext={'View'}/>
                </div>
               </div>
               <div className="space-y-8 py-4 ">
                  <h3>Available Portfolios</h3>
                {/* <div className="flex flex-col gap-y-8 items-center">
                <PortfolioCard header={'Smart Portfolio'} buttontext={'Set up'} description={'Get an automatically balanced portfolio in a few clicks'}/>
                <PortfolioCard header={'Retirement Portfolio'} buttontext={'Set up'} description={'Setup a retirement account with tax benefits and deposit bonuses'}/>
                <PortfolioCard header={'Kids Portfolio'} buttontext={'Set up'} description='Setup a custodial account for dependents'/>
                </div> */}
                <div className="flex flex-col gap-y-8 items-center">
                {portfolios?.map((portfolio)=>{
                    return(
                        <>
                        <PortfolioCard func={()=> setactivePortfolio(portfolio)} header={`${portfolio.type} portfolio`} description={portfolio.description} buttontext={'view'}/>
                        </>
                    )
                })}
                </div>
               
               </div>
           </div>
         </div>
    </div>
  )
}

export default MobilePortfolio