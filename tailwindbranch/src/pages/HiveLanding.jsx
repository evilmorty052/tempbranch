import React,{useState} from 'react'
import Iphone from '../assets/phone.png'
import phone from '../assets/retirementphone.png'
import hemp from '../assets/hemplogo.png'
import { CTA, Navbar } from '../components'
import AnimatedSidebar from '../components/AnimatedSidebar'

const HiveLanding = () => {
    const [searchmode, setsearchmode] = useState(false)
    const [expanded, setexpanded] = useState(false)

    function open(params) {
        expanded ? setexpanded(false) : setexpanded(true)
    }

    function setSearchMode(params) {
    !searchmode ? setsearchmode(true) : setsearchmode(false)
    }

    function func(params) {
        setsearchmode(true)
    }

    if (searchmode) {
        return(
        
            <SearchHive back={()=> setsearchmode(false)}/>
        )
    }

  return (
   <>
   <Navbar open={open}/>
   <AnimatedSidebar isExpanded={expanded} setIsExpanded={setexpanded}/>
   <div onClick={()=> expanded && setexpanded(false)}>
   <HiveHero func={func}/>
   <CTA/>
   <FeatureCard/>
   <CTA/>
   <LeftCard image={phone} setSearchMode={setSearchMode}/>
   </div>
   </>
  )
}



function FeatureCard(params) {
    return(
        <>
        
        <div class="py-16">
  <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
    <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div class="md:5/12 lg:w-1/2">
        <img
          src={Iphone}
          alt="image"
          loading="lazy"
          width=""
          height=""
        />
      </div>
      <div class="md:7/12 lg:w-1/2">
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
        Boost Your Business Earnings
        </h2>
        <p class="my-8 text-gray-600 dark:text-gray-300">
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
        </p>
        <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
          <div class="mt-8 flex gap-4 md:items-center">
            <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400">
                <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd" />
              </svg>        
            </div>
            <div class="w-5/6">
              <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">Crowd Funding</h4>
              <p class="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
            </div> 
          </div> 
          <div class="pt-4 flex gap-4 md:items-center">
            <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">  
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>                                      
            </div>
            <div class="w-5/6">
              <h4 class="font-semibold text-lg text-gray-700 dark:text-teal-300">Capital Assistance</h4>
              <p class="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
            </div> 
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>
                                 
        </>
    )
}

export function LeftCard({setSearchMode, image}) {
    return (
      <>
        <div class="py-16">
          <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
            <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
              <div class="md:5/12 lg:w-1/2">
                <img
                  src={image}
                  alt="image"
                  loading="lazy"
                  width="250px"
                  height="200px"
                />
              </div>
              <div class="md:7/12 lg:w-1/2">
                <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                  Browse Businesses
                </h2>
                <p class="my-8 text-gray-600 dark:text-gray-300">
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>

                <div
                  href=""
                  class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                >
                  <span onClick={setSearchMode} class="relative text-base font-semibold text-sky-600 dark:text-white">
                    Browse now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}


function HiveHero({func}) {
    return (
      <>
        <div class="pt-32 md:py-12 xl:container px-2 md:px-12">
          <div aria-hidden="true" class="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20" ></div>
            
          <div class="relative lg:flex lg:items-center lg:gap-12">
         
            <div class="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <a href="#" class="sm:inline-flex justify-between items-center py-1 px-1 pr-4 mb-2 text-sm text-gray-700 bg-gray-100 rounded-full hidden  hover:bg-gray-200  shadow-md" role="alert">
            <span class="text-xs bg-green-300 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Hive 2.1 is here! See what's new</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
              <h1 class="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
                Welcome To The {" "} <br/>
                <span class="text-primary dark:text-primaryLight">
                  Hive.
                </span>
              </h1>
              <p class="mt-8 text-gray-600 dark:text-gray-300">
                Odio incidunt nam itaque sed eius modi error totam sit illum.
                Voluptas doloribus asperiores quaerat aperiam. Quidem harum
                omnis beatae ipsum soluta!
              </p>
              <div>
                <div className='px-6 my-4'>
                <button onClick={func} className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
              {'Get Started'}
            </button>
                </div>
              
                {/* <form action="" class="w-full mt-12">
                  <div class="relative flex items-center px-2 p-1 rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
                    <div class="pl-6 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 m-auto fill-blue-900/60 dark:fill-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      autocomplete="email"
                      placeholder="Your mail address"
                      class="w-full p-4 rounded-full placeholder-gray-600 dark:placeholder-white bg-transparent"
                      type="email"
                    />
                    <div class="md:pr-1.5 lg:pr-0">
                      <button
                        type="button"
                        title="Start buying"
                        class="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                      >
                        <span class="relative hidden w-max text-white dark:text-gray-900 font-semibold md:block">
                          Get Started
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="relative h-6 w-6 mx-auto text-white dark:text-gray-900 md:hidden"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form> */}
              </div>
              <div class="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0">
                <img
                  src="./images/clients/airbnb.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="./images/clients/ge.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="./images/clients/coty.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="./images/clients/microsoft.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
              </div>
            </div>
            <div class="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
              <img
                src={phone}
                alt="project illustration"
                height=""
                width=""
              />
            </div>
          </div>
        </div>
      </>
    );
}

function SearchHive({back}) {
 
    return(
        <>
        
        <div   className='bg-plat relative  flex flex-1'>
        <Header back={back} />
        <ServiceCard/>
        </div>
        </>
    )
}


function ServiceCard(params) {
    return(
        <>
        
        <div class="relative py-16">
  <div class="container relative m-auto px-[10px] text-gray-500 md:px-12">
    <div className='mt-4 mb-8 px-2'>
        <h3 className='text-center text-2xl text-gray-800 font-semibold'>All Services</h3>
        <p className='text-center text-lg sm:text-xl'>Please Pick from One Of The Services Below To Continue Exploring One Hive</p>
    </div>
    <div class="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
      <div class="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <img
          class="mx-auto w-24"
          src={hemp}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Capital Assistance</h3>
        <p>
          Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
          tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
        </p>
        <a
          href="#"
          class="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
        >
          <span class="text-primary">&rightarrow;</span>
        </a>
      </div>
      <div class="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <img
          class="mx-auto w-24"
          src="https://www.pngrepo.com/png/46221/512/globe.png"
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Crowd Funding</h3>
        <p>
          Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
          tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
        </p>

        <a
          href="#"
          class="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
        >
          <span class="text-primary">&rightarrow;</span>
        </a>
      </div>
      <div class="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <img
          class="mx-auto w-24"
          src="https://www.pngrepo.com/png/401106/512/antenna-bars.png"
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Invest</h3>
        <p>
          Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam
          tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.
        </p>
        <a
          href="#"
          class="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
        >
          <span class="text-primary">&rightarrow;</span>
        </a>
      </div>
    </div>
  </div>
</div>
                                    
        </>
    )
}

function Header({close, back}) {
    return(
        <div className='absolute top-0 left-0 w-full bg-blk px-4 py-2 flex justify-between z-50'>
            <h2   className="uppercase md:hidden text-gray-50 text-2xl  font-poppins font-black tracking-wide  "> MEDIK<span className="text-green-200">420</span>  </h2> 
            <div onClick={back} className='flex justify-end items-center'>
              <p onClick={back} className='text-white text-xl uppercase'>back</p>
            </div>
        </div>
    )
}

export default HiveLanding