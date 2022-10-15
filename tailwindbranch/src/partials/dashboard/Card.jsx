import { motion } from "framer-motion";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const agentList = ({bio,name,description,avatar}) => {
  const [liked, setLiked] = useState(false)
  

  return ( 
    <>
    
 <motion.div  initial={{ opacity: 0, scale: 0.1 }}  animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
 <div className='shadow-3xl font-poppins relative'>
  <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
<div class="flex items-center">
<img
alt="Developer"
src={avatar}
class="h-16 w-16 rounded-full object-cover"
/>

<div class="ml-3"><h5 class="text-lg font-medium text-white">{name}</h5>


<div class="flow-root">
  {/* <ul class="-m-1 flex flex-wrap">
    <li class="p-1 leading-none">
      <a href="#" class="text-xs font-medium text-gray-300"> Crypto </a>
    </li>

    <li class="p-1 leading-none">
      <a href="#" class="text-xs font-medium text-gray-300"> Stocks </a>
    </li>

    <li class="p-1 leading-none">
      <a href="#" class="text-xs font-medium text-gray-300">CBD</a>
    </li>
  </ul> */}
</div>
</div>
</div>

<ul class="mt-4 space-y-2">
<li>
<a
  href="#"
  class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
>
  {/* <h5 class="font-medium text-white">Weekly Recommendation</h5> */}

  <p class="mt-1 text-xs font-medium text-gray-300">
   {description}
  </p>
</a>
</li>

<li>
<a
  href="#"
  class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
>
  <h5 class="font-medium text-white">{name}</h5>

  <p class="mt-1 text-xs font-medium text-gray-300">
   {bio}
  </p>
</a>
</li>
</ul>
<div className='w-full flex justify-center mt-2'>
<div className='flex  w-[80%] justify-between items-center '>
<span className='text-white font-poppins font-medium'>FOLLOW</span>
<motion.span whileTap={{ scale: 4.0 }} onClick={()=>{liked == true? setLiked(false) : setLiked(true)}} className={liked? 'text-2xl text-red-600 ': 'text-red-300 text-xl'}><FaHeart/></motion.span>
</div>
</div>

</article>

</div>
</motion.div>
   
  
    </>
   );
}
 
export default agentList;