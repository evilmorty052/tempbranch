import React,{useEffect, useState} from 'react'
import AnimatedSidebar from '../components/AnimatedSidebar'
import { Navbar } from '../components'


const Jobs = () => {
const [expanded, setexpanded] = useState(false)
const [jobs, setjobs] = useState([])
const [where, setwhere] = useState()
const [what, setwhat] = useState()

function opensidebar(params) {
  expanded?  setexpanded(false) : setexpanded(true)
  // console.log('clicked')
  }

function searchJobs() {

  fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bfee341a&app_key=23eb09b8e7790b77ae33fa66b0557778&what=${what}&where=${where}`,{
        method:'GET'
      }).then((res)=> res.json()).then((res)=> {
       res && setjobs(res.results)
        res && console.log(jobs)
        
      })
  
}





  // useEffect(() => {
  //   //  fetch("https://api.adzuna.com/v1/api/jobs/us/search/5?app_id=bfee341a&app_key=23eb09b8e7790b77ae33fa66b0557778%09&what=delivery%20driver&where=75001").then((res)=>{
  //   // console.log(res)
  //   //  })
  // fetch('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bfee341a&app_key=23eb09b8e7790b77ae33fa66b0557778&what=nurse&where=75001',{
  //       method:'GET'
  //     }).then((res)=> res.json()).then((res)=> {
  //      res && setjobs(res.results)
  //       res && console.log(jobs)
        
  //     })
  
  // }, [])
  

  return (
    <> 
    <AnimatedSidebar setIsExpanded={setexpanded} isExpanded={expanded}/>
    <Navbar open={opensidebar} />
    <div onClick={()=> expanded && setexpanded(false)} className='flex min-h-screen pb-24 max-w-7xl justify-center  overflow-scroll  bg-plat '>
        <div className=' flex flex-col '>
            <Hero/>
       <div className='flex items-center flex-col gap-y-4 mb-8 md:flex-row md:justify-center md:gap-5 '>
      <JobSearchInput placeholder={'What'} onChange={(e)=> setwhat(e.target.value)} value={what} />
      <JobSearchInput placeholder={'Zip Code'} onChange={(e)=> setwhere(e.target.value)} value={where}/>
      <a onClick={searchJobs}  className='md:hidden w-72 py-2 px-4 flex justify-center rounded-xl bg-green-300 shadow-2xl'>Search</a>
      </div>
      <div className='w-full md:flex justify-center px-10 hidden'>
      <a onClick={searchJobs}  className='flex justify-center w-1/2 py-2 px-4 rounded-xl bg-green-300 shadow-2xl'>Search</a>
      </div>
      
            <div className='flex flex-1  p-2 flex-col gap-y-4 mb-8'>
             {
              jobs.length > 1 && jobs.map((job)=>{
                return(
                  <>
                  <JobCard salary={job.salary_min.toLocaleString('us')} company={job.company.display_name} title={job.title} contract={job.contract_type ? job.contract_type : 'N/A'  } location={job.location.display_name} />
                  </>
                )
              })
             }
            </div>
        </div>
    </div>
    </>
  )
}

export default Jobs


function Hero(params) {
  return(
    <>
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-2 pt-20 mb-8 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-8 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    <div class="text-center lg:w-2/3 w-full">
      <div class="flex flex-col items-center justify-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900 text-center">Search Open Positions  Available In Your Area</h1>
      <p class="mb-4 text-center leading-relaxed">Click the Boxes Below To begin Searching Open Positions  in your area by typing or slecting from the available options</p>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

function JobCard({salary, company, title, description, contract, location}){
  return(
    <>
    <a href="#" class="block bg-white rounded-lg p-4 shadow-sm shadow-indigo-100">
  {/* <img
    alt="Home"
    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full rounded-md object-cover"
  /> */}
  <p>
    {description}
  </p>

  <div class="mt-2">
    <dl>
      <div>
        <dt class="sr-only">Price</dt>

        {/* <dd class="text-sm text-gray-500">Annual salary: {`${'$'}${salary}`}</dd> */}
        <dd class="text-sm text-gray-500">{`${title}`}</dd>
      </div>

      <div>
        <dt class="sr-only">Address</dt>

        <dd class="font-medium">{company}</dd>
      </div>
    </dl>

    <div class="mt-6 flex items-center gap-8 text-xs">
      <div class="sm:inline-flex sm:shrink-0 sm:items-center">
        <svg
          class="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div class="mt-1.5 sm:ml-3 sm:mt-0">
          <p class="text-gray-500">Salary</p>

          <p class="font-medium">{`${'$'}${salary}`}</p>
        </div>
      </div>

      <div class="sm:inline-flex sm:shrink-0 sm:items-center">
        <svg
          class="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div class="mt-1.5 sm:ml-3 sm:mt-0">
          <p class="text-gray-500">Contract Type</p>

          <p class="font-medium">{contract}</p>
        </div>
      </div>

      <div class="sm:inline-flex sm:shrink-0 sm:items-center">
        <svg
          class="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div class="mt-1.5 sm:ml-3 sm:mt-0">
          <p class="text-gray-500">location</p>

          <p class="font-medium">{location}</p>
        </div>
      </div>
    </div>
  </div>
</a>

    </>
  )
}

function JobSearchInput({placeholder, onChange, value}) {
  return(
    <>
    <div className=''>
      <input value={value} onChange={onChange} className='w-72 py-2 px-2 text-gray-400 rounded-lg' placeholder={placeholder}></input>
    </div>
    </>
  )
}