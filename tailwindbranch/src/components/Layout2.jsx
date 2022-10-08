import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import  Navbar  from './Navbar'
// import  Avbar  from '../components/navbar/Navbar'
// import './Layout.css'
import beams from '../assets/beams.jpg'

export function Layout({ children }) {
  return (
  //  <div >
  //    <Box mb={0}>
  //     <div className='bg-transparent z-50 mb-4 px-4'>
  //     <Navbar />
  //     </div>
  //     <div>
  //     <Container maxW='container.lg'>{children}</Container> 
  //     </div>
  //   </Box>
  //  </div>

            // <div className='mb-16 bg-black-gradient fixed top-0 right-0 left-0'>
            //     <div className='px-4'>
            //       <Navbar />
            //     </div>
            //     <div className='mx-auto h-screen w-full '>
            //       <div className='h-full flex w-full mb-10 pb-10 border border-red-600 '>
            //         <div className='mx-auto flex-1 max-w-4xl mb-0 px-0 border border-red-600 pb-10'>
            //         {children}
            //         </div>
            //     </div>
                    
            //     </div>
            // </div> 
          //   <div className='min-h-screen bg-gray-gradient border border-transparent'>
          //     <div className='px-4'>
          //       <Navbar/>
          //     </div >
          //  <div className='px-2 min-w-md min-w-4xl'>  {children}  </div>
               
          //   </div> 
          // <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 px-5   "  style={{
          //   backgroundImage: `url(${beams})`,
          //   backgroundSize: "contain",
          // }}>
          <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 px-5 bg-plat sidebar "  >
  {/* <img src={beams} alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" /> */}
  {/* <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}
  
  
  
  <div className=' flex flex-col w-full '>
  {children}
  </div>
    
</div>



    
  )
}


