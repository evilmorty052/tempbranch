import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react//24/outline'
import { Fragment } from 'react'
import Navlink from '../components/Navlink'
import { useAuth } from '../contexts/AuthContext'
import { useState } from "react";


const solutions = [
  {
    name: 'Investing',
    description: 'Measure actions your users take',
    to: '/login',
    icon: IconOne,
  },
  {
    name: 'Smart Portfolio',
    description: 'Create your own targeted content',
    to: '/login',
    icon: IconTwo,
  },
  {
    name: 'Retirement Account',
    description: 'Keep track of your growth',
    to: 'login',
    icon: IconThree,
  },
  {
    name: 'Kids Portfolios',
    description: 'Keep track of your growth',
    to: 'login',
    icon: IconThree,
  },
]

export default function Invest() {
const [active, setActive] = useState("Home");
const [toggle, setToggle] = useState(false);
const { logout, currentUser } = useAuth()


  return (
    <Popover className="relative">
      <Popover.Button className={` text-base text-green-300  font-poppins font-bold gap-4 mx-2`}><span className='flex items-center bg-transparent px-2 py-1 rounded-lg' >Invest<ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-green-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              /></span>
      
     </Popover.Button>
     <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 bg-black-gradient rounded-lg text-left sidebar">
        <div className="flex px-10 py-5  text-lg font-poppins text-white font-medium">
            <ul className='list-none flex flex-col gap-4'>
           <Navlink to={'/invest'}  name='Investing'/>
           <Navlink to={'/smart'}  name='Smart Portfolio'/>
           <Navlink to={'/retirement'}  name='Retirement Account'/>
           <Navlink to={'/kids'}  name='Kids Portfolio'/>
            </ul>
        </div>
      </Popover.Panel>
            </Transition>
    </Popover>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}

             