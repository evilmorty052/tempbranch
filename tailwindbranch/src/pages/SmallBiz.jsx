import React from 'react'
import AnimatedSidebar from '../components/AnimatedSidebar'
import AnimatedCard from '../components/AnimatedCard';
import ProfileSettingsPage from './ProfilePage';
import Dynamicnav from '../partials/Dynamicnav';



export function Hero({ title, subtext, buttonText, image, bg ,span, color}) {
  return (
    <section className={`${bg} relative px-4 py-20 font-poppins rounded-3xl`}>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 sm:px-4">
            <h1 className="text-4xl font-bold leading-tight mb-4 text-center sm:text-left uppercase">{`${title} `}<span className={`ml-1 ${color}`}>{span}</span></h1>
            <p className="text-xl leading-normal mb-8 text-center sm:text-left ">{subtext}</p>
            <button className="bg-green-300 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              {buttonText}
            </button>
          </div>
          <img
            className="w-full md:w-1/2 rounded-lg shadow-2xl"
            src={image}
            alt={title}
          />
        {/* <div className="absolute inset-0 bg-gray-400 bg-opacity-75"></div> */}
        </div>
      </div>
    </section>
  );
}


export function LandingPage(Children) {
  return (
    <main className="mx-auto px-4 py-8 max-w-7xl">
       <Hero
       bg={'bg-slate-200'}
        title="Digital Farming"
        subtext="The Future of Passive Income. experience all the benefits and utilities of owning a sophisticated hemp farm right from the comfort of your home"
        buttonText="Learn More"
        image="https://via.placeholder.com/800x600"
      />
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
        <Feature
          title="Digital Expansion"
          description="Boost Your Earnings By Acquiring More Land."
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Automatic Auction"
          description="Put Up Any Digital Land You Already Own For Sale To the Highest Bidder"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Self Sustaining"
          description="Deduct All Maintainance And Service Fees From Your Total Earnings"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Total Control"
          description="Choose From a Variety Of Strains To Be Planted and Harvested By Proffesionals"
          image="https://via.placeholder.com/200x200"
        />
      </div>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button> */}
    </main>
  );
}
function SmallLandingPage(Children) {
  return (
    <main className="mx-auto px-4 py-8 max-w-7xl">
       <Hero
        bg={'bg-slate-200'}
        title="One Hive Initiative"
        subtext="Ever Wanted To Own A Small Business ? Make Your Dreams Come True With Medik 420 In Just A Few Clicks "
        buttonText="Learn More"
        image="https://via.placeholder.com/800x600"
      />
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
        <Feature
          title="Delivery Made Easy"
          description="Every Tier Of the One Sales programme includes at least One Delivery Vehicle to get you up and running "
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Time to Grow"
          description="We believe Every Venture Needs Ample time to truly Acheive their full Potential!, Get up to 9 months Of Growth Time Before Making your First Payment to Medik 420"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Full Control"
          description="Pick And Choose Between A Wide Range Of Medik 420 Products To stock Up Your Inventory You only Sell What You Want To With Medik 420"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="ONE HIVE"
          description="Get exclusive Access to the One Hive AI to get game changing Insights And Compare Sales Data With Other One Sales Programme Participants"
          image="https://via.placeholder.com/200x200"
        />
      </div>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button> */}
    </main>
  );
}









export function Feature({ title, description, image }) {
  return (
    <div className="flex items-center md:flex-row flex-col mb-10">
      <img
        className="w-full md:w-1/3 rounded-lg shadow-lg"
        src={image}
        alt={title}
      />
      <div className="md:ml-4 mt-4 md:mt-0">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg leading-relaxed mb-4">{description}</p>
      </div>
    </div>
  );
}

const SmallBiz = () => {
  
  return (
  <>
  
  <div className='bg-plat relative flex flex-col'>
  <Dynamicnav/>
   <div className='mt-10'>
   <SmallLandingPage/>
  </div>
  
  </div>
  </>


  )
}

export default SmallBiz
