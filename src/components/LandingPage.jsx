import React, { useEffect, useState } from 'react';
import '@fontsource/roboto';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSlideIn(true); 
    }, 400); 
  }, []);

  return (
    <div className='w-full h-screen pt-1'>
      <div className='textstruct mt-72 ml-32'>
        {["discover books", "that open", "new worlds."].map((item, index) => (
          <div className='masker' key={index}>
            <div className='w-fit flex items-end overflow-hidden'>
              {index === 1 && (
                <div
                  className='w-[8.8vw] h-[4.4vw] mr-[1vw] rounded-md bg-cover bg-center'
                  style={{
                    backgroundImage: `url("https://i.pinimg.com/736x/39/29/2c/39292ccc9f4a8dc5e70b232686a4109f.jpg")`,
                    transform: slideIn ? 'translateX(0)' : 'translateX(-120%)',
                    transition: 'transform 1.5s ease', 
                  }}
                ></div>
              )}
              <h1
                className='leading-[4.8vw] uppercase font-bold text-[5vw]'
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 900,
                  transform: slideIn ? 'translateX(0)' : 'translateX(-120%)',
                  transition: 'transform 1.5s ease', 
                }}
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className='border-t-[1px] border-zinc-500 mt-32 flex justify-between items-center py-5 px-20'>
        {["For readers and collectors", "From bestsellers to rare finds"].map((item, index) => (
          <p key={index} className='text-md text-zinc-900 tracking-tight leading-none'>
            {item}
          </p>
        ))}
        <div className='start flex items-center gap-1'>
          <div className='px-3 py-1 border-[2px] border-zinc-500 text-zinc-900 rounded-full capitalize'>
            Explore Now
          </div>
          <div className='w-6 h-6 border-[2.5px] flex items-center justify-center border-zinc-500 rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
