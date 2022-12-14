// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const AnimatedSidebar = ({links}) => {
//   const [isExpanded, setIsExpanded] = useState(true);

//   return (
//     <motion.div
//       initial={{ width: '64px' }}
//       animate={{ width: isExpanded ? '256px' : '64px' }}
//       whileHover={{ width: '320px' }}
//       transition={{ duration: 0.3 }}
//       className="bg-gray-200 p-4 h-full fixed left-0 top-0 pl-4 pt-4"
//     >
//       <button onClick={() => {isExpanded? setIsExpanded(false): setIsExpanded(true)}}>
//         {isExpanded ? 'Close' : 'Open'}
//       </button>
//       <AnimatePresence initial={true}>
//         {isExpanded && (
//           <motion.ul
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3, delayChildren: 0.3 }}
//           >
//             {links.map((link, i) => (
//               <motion.li
//                 key={link.title}
//                 initial={{ y: -10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: 10, opacity: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <a href={link.url}>{link.title}</a>
//               </motion.li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// export default AnimatedSidebar;

import React, {useState, useRef} from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function AnimatedSidebar({}) {
  const [isOpen, setIsOpen] = useState(false)
  const controls = useAnimation()
 
 

  return (
    <>
      <button  onClick={() => setIsOpen(true)}>
        {isOpen ? (
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        )}
      </button>
      <motion.aside
        initial={{ x: '-100%' }}
        animate={controls}
        transition={{ ease: 'easeOut' }}
        className="sidebar fixed left-0 top-0"
      >
        <button onClick={() => setIsOpen(false)}>Close Sidebar</button>
        <nav
          animate={{
            y: 0,
            transition: { staggerChildren: 0.1 }
          }}
        >
          <a href="#">Dashboard</a>
          <a href="#">Portfolio</a>
          <a href="#">Coach</a>
          <a href="#">Withdraw</a>
          <a href="#">Agents</a>
        </nav>
        {isOpen &&
          controls.start({
            x: 0,
            transition: { duration: 0.5 }
          })}
      </motion.aside>
    </>
  )
}