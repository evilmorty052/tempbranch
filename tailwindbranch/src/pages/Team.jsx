import React, {useState} from 'react'
import { urlFor } from '../../lib/client'
import { Navbar } from '../components'
import AnimatedSidebar from '../components/AnimatedSidebar'
import useFetch from '../hooks/useFetch'
import {LogoCloud} from '../components/index'

const Team = () => {
const query = `*[_type == 'executives']`
const data = useFetch(query, 'execs')
const [tab1, settab1] = useState(false)
const [tab2, settab2] = useState(true)

function handleTabs(params) {
  if(tab1){
    settab2(true)
    settab1(false)
  }
  else if (tab2){
    settab1(true)
    settab2(false)
  }
}

  return (
    <>
    <Navbar/>
    <AnimatedSidebar/>
    {/* <section class="text-gray-600 body-font bg-plat">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
            <p class="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Henry Letham</h2>
            <p class="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Oskar Blinde</h2>
            <p class="text-gray-500">Founder</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
            <p class="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Martin Eden</h2>
            <p class="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Boris Kitua</h2>
            <p class="text-gray-500">UX Researcher</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Atticus Finch</h2>
            <p class="text-gray-500">QA Engineer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Alper Kamu</h2>
            <p class="text-gray-500">System</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
            <p class="text-gray-500">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
<MainHero/>
<div>
   <Tabs tab1={tab1} tab2={tab2} setactive={handleTabs}/>
</div>
{!tab1 ? <TeamGrid data={data} /> : <AboutUs/>}
    </>
  )
}


function TeamGrid({data}) {
  return(
    <>
    
    <div class="py-10">
  <div class="xl:container mx-auto px-6 md:px-12">
    <div class="mb-16 ">
      <h2 class="mb-4 text-2xl font-bold text-gray-800  md:text-4xl sm:text-center uppercase">
       Meet Our Executive Team
      </h2>
      {/* <p class="text-gray-600 dark:text-gray-300">
        Tailus prides itself not only on award-winning technology, but also on the talent of its
        people of some of the brightest minds and most experienced executives in business.
      </p> */}
    </div>
    <div class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
     
     {data?.map((item)=>(
      <>
      <ExecCard image={urlFor(item.image)} />
      </>
     ))}
    </div>
    <div class="mb-8 w-full mt-16 border-b-2 border-gray-300 pb-4">
      <h2 class="mb-4 text-[36px] font-bold text-gray-800 md:text-4xl text-center">
      Meet our investors.
      </h2>
    </div>
      <LogoCloud/>
  </div>
</div>
                                    
    </>
  )
}

function ExecCard({image}) {
  return(
    <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
    <img
      class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
      src={image}
      alt="woman"
      loading="lazy"
      width="640"
      height="805"
    />
    <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
      <div>
        <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
        <span class="block text-sm text-gray-500">CEO-Founder</span>
      </div>
      <p class="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
    </div>
    
  </div>
  )
}

function MainHero(params) {
  return(
   <>
   
   <body class="bg-gray-900 md:pt-20 pb-4 ">
     
     <div class="border-b  ">
         <div class="container  m-auto px-6 pt-12 md:px-12  md:pt-[1.8rem] lg:px-7">
             <div class="grid  items-center gap-12 px-2 md:px-0">
                 <div class="relative col-span-1">
                     <h1 class="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white text-center">Our mission <br className='hidden sm:block'/> requires great people</h1>
                     <div class="mt-8 lg:mt-16 space-y-8">
                         <p class="text-gray-300 text-center text-3xl ">Meet the team shaping the future of personal finance.</p>
                     </div>'
                 </div>
             </div>
         </div>
     </div>
 </body>
                                     
   </>
  )
 }

 function Tabs({tab1 ,tab2, setactive}) {
  return (
    <>
      <div className="flex py-8 px-4 ">
        <div className='flex  w-full '>
          <div onClick={setactive} className={!tab1 ? `pb-4 border-b-4 border-gray-300 w-1/2 flex justify-center` : `pb-4 border-b-4 border-gray-500 w-1/2 flex justify-center` }>
            <a className="text-xl font-semibold text-center">About Us</a>
          </div>
          <div onClick={setactive} className={!tab2 ? `pb-4 border-b-4 border-gray-300  w-1/2 flex justify-center` : `pb-4 border-b-4 border-gray-500 w-1/2 flex justify-center` }>
            <a className="text-xl font-semibold text-center">Team</a>
          </div>
        </div>
      </div>
    </>
  );
 }

 function AboutUs(params) {
  return(
    <>
    <div>
      <div>
        <div>
          <h3>We create financial opportunity.</h3>
          <p>We’re here to help everyday Americans invest and build wealth, $5 at a time.</p>
        </div>
        <div>
          <div>
            <ul>
              <li>
                <p>2022</p>
                <p>Medik Launched</p>
              </li>
              <li>
              <p>2022</p>
              <p>Medik Launched</p>
              </li>
              <li>
              <p>2022</p>
              <p>Medik Launched</p>
              </li>
              <li>
              <p>2022</p>
              <p>Medik Launched</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
 }

export default Team