import React, {useState} from 'react'
import {Header} from '../hive/index'
import styles from '../../style'
import { FaAngleRight, FaUser } from 'react-icons/fa'
import {AnimatedSidebar, LaptopDisplay} from '../../components/index'
import Sidebar from '../../partials/Sidebar2'
import { SettingPage, switchSettings } from '../../Redux/slices/settingsSlice'
import {useDispatch} from 'react-redux'
import {AccountInfo, SecuritySettings,MainSettings, MobileSettings, LaptopSettings} from './index'



const Settings = () => {

   
const [expanded, setexpanded] = useState(true)
function handleSideBar(params) {
    !expanded ? setexpanded(true) : setexpanded(false)
}
  return (
    <>
    {/* <AnimatedSidebar isExpanded={expanded} /> */}
    <div className='relative hidden sm:block'>
       <Header back={handleSideBar}/>
    </div>
    <AllSettings/>
    </>
  )
}

function AllSettings(params) {
    const dispatch = useDispatch()
    
    return(
        <>
        <div className='flex '>
            <div className='pt-2.5 sm:pt-20 lg:pt-20 container mx-auto  '>
                  <div>
                    <div className='hidden sm:block'>
                 <LaptopSettings/>
                    </div>
                  </div>
                <div className='sm:hidden'>
                  {/* <Header/> */}
                    <div className=''>
                    <MobileSettings/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}





export default Settings