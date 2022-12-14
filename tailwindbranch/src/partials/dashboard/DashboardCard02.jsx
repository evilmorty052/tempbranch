import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-02.svg';
import EditMenu from '../EditMenu';
import { useEffect, useState } from 'react';
import { FaPercent, FaPercentage, FaPiggyBank, FaArrowRight , FaEye , FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';
import Toggle from '../../pages/Aboutus';
import { Switch } from '@headlessui/react'


function DashboardCard02({investment}) {
  const [enabled, setEnabled] = useState(true)

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
      '06-01-2021', '07-01-2021', '08-01-2021',
      '09-01-2021', '10-01-2021', '11-01-2021',
      '12-01-2021', '01-01-2022', '02-01-2022',
      '03-01-2022', '04-01-2022', '05-01-2022',
      '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022',
      '12-01-2022', '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          622, 622, 426, 471, 365, 365, 238,
          324, 288, 206, 324, 324, 500, 409,
          409, 273, 232, 273, 500, 570, 767,
          808, 685, 767, 685, 685,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // Gray line
      {
        data: [
          732, 610, 610, 504, 504, 504, 349,
          349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349,
          252, 423, 622, 470, 532,
        ],
        borderColor: tailwindConfig().theme.colors.slate[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20,
      },
    ],
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}    className=" shadow-2xl rounded-3xl flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-glass2    pl h-max relative border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <span className='text-4xl text-green-400'><FaPiggyBank/></span> 
          {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
          {/* Menu button */}
          {/* <EditMenu className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 1</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 2</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </EditMenu> */}
        </header>
        <h2 className="text-2xl  uppercase font-bold text-slate-800 mb-0 text-start font-poppins">Investment</h2>
        {/* <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div> */}
        <div className="flex items-end text-end pb-4">
          <div className="text-3xl font-bold text-glass mr-2 text-center">{ enabled?`${'$ '}${investment}`: ''}</div>
          <div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div> */}
          </div>
          
        </div>
        <div class=" absolute bottom-2 right-2 border-b-yellow-600 flex items-center justify-center">
        {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
         {/* <FaPercent/> */}
         <div className='flex items-center justify-center '>
          {/* <span className=' text-lg '>show </span> */}
          {/* <span className='text-base'>show</span> */}
          <motion.span whileTap={{ scale: 1.5 }}  className='text-xl mr-4 self-center '>
            {
            <>
         {enabled ? <FaEyeSlash onClick={()=>{setEnabled(false)}} /> : <FaEye onClick={()=>{setEnabled(true)}}/>} 
          </>} 
          </motion.span>
          </div>
         <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-teal-700' : 'bg-red-300'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        {/* <LineChart data={chartData} width={389} height={128} /> */}
      </div>
      <div>
      </div>
    </motion.div>
  );
}

export default DashboardCard02;
