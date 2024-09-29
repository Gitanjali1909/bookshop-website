import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  const marqueeVariants = {
    animate: {
      x: ['0%', '-150%'], 
      transition: {
        duration: 20, 
        repeat: Infinity, 
        ease: 'linear', 
      },
    },
  };

  return (
    <div className='w-full bg-[#8FB056] overflow-hidden rounded-sm'>
      <motion.div className='flex whitespace-nowrap' variants={marqueeVariants} animate='animate'>
        <h1 className='text-[10vw] leading-none font-semibold uppercase mb-4'>
          Discover New Releases Every Week! 
          Discover New Releases Every Week! 
          Discover New Releases Every Week!
        </h1>
        <h1 className='text-[10vw] leading-none font-semibold uppercase mb-4'>
          Discover New Releases Every Week! 
          Discover New Releases Every Week! 
          Discover New Releases Every Week!
        </h1>
      </motion.div>
    </div>
  );
}

export default Marquee;



