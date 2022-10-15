import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../EditMenu';
import { motion, animate, } from 'framer-motion';
import { FaMoneyBillWave, FaArrowUp , FaChevronUp, FaPlus, FaPlusCircle } from 'react-icons/fa';
// import {Mymodal, Modalbutton} from '../../components/modal'

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard014() {

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
          732, 610, 610, 504, 504, 504, 349,
          349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349,
          252, 423, 622, 470, 532,
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
          532, 532, 532, 404, 404, 314, 314,
          314, 314, 314, 234, 314, 234, 234,
          314, 314, 314, 388, 314, 202, 202,
          202, 202, 314, 720, 642,
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
    <motion.div   whileTap={{ scale: 1.1 }}  className="rounded-3xl shadow-2xl flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-gray-50    pl h-max relative border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
          <span className='text-4xl text-green-400'><FaPlusCircle /></span> 
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
        <motion.h2 initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }}
  viewport={{ once: true }} className="text-3xl font-black text-green-300 mb-0 text-start font-poppins uppercase">Bonus</motion.h2>
        {/* <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div> */}
        <div className="flex items-end text-end pb-4">
          <div className="text-2xl font-bold text-green-300 mr-2 text-center font-poppins"> <span>$</span><span >450</span></div>
          <div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div> */}
          
          </div>
          
        </div>
        <div class=" absolute bottom-5 right-10 border-b-yellow-600">
        {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
        
        <div className='flex  gap-0'>
        
        <span className='text-xl text-green-300'><FaPlusCircle /></span> 
        <span className='text-xl text-green-300'><FaPlusCircle /></span> 
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

export default DashboardCard014;