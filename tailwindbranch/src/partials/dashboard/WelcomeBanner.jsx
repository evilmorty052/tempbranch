import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function WelcomeBanner({name}) {
  // const sanityuser = localStorage.getItem('sanityuser');
  // const person = JSON.parse(sanityuser);
  
 
  
  // useEffect(() => {
  //   if(sanityuser != null)
  //   console.log(person[0].firstname)
  
  //   return () => {
      
  //   }
  // }, [])
  
  return (
   
    <motion.div  className="relative  bg-gray-800 p-4 sm:p-6 rounded-xl overflow-hidden mb-8 shadow-2xl md:max-w-md">


      {/* Content */}
      <div className="relative text-center  md:text-center">
        {/* <h1 className="text-2xl md:text-3xl text-gray-100 font-bold mb-1 uppercase">{person[0].firstname?`${'Hi, '} ${person[0].firstname} 👋 `: 'welcome'}</h1> */}
        <h1 className="text-2xl md:text-3xl text-gray-100 font-bold mb-1 uppercase font-poppins">{`HI ${name} 👋` }</h1>
        <p class='text-gray-100 uppercase font-poppins tracking-wide'>See a Breakdown Of your Earnings</p>
      </div>

    </motion.div>
  );
}

export default WelcomeBanner;
