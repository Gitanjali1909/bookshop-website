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

  const [rotate, setRotate] = useState(0);

  const handleMouseMove = (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let deltaX = mouseX - window.innerWidth / 2;
    let deltaY = mouseY - window.innerHeight / 2;

    const angle = Math.atan2(deltaY, deltaX) * (360 / Math.PI);
    setRotate(angle - 360);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      let touchX = e.touches[0].clientX;
      let touchY = e.touches[0].clientY;

      let deltaX = touchX - window.innerWidth / 2;
      let deltaY = touchY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (360 / Math.PI);
      setRotate(angle - 360);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className='landing-container w-full h-screen pt-1 flex flex-col lg:flex-row bg-[#FFFFFF] relative'>
      <div className='textstruct w-full lg:w-1/2 mt-32 ml-20 lg:mt-72 lg:ml-32'>
        {["discover books", "that open", "new worlds."].map((item, index) => (
          <div className='masker' key={index}>
            <div className='w-fit flex items-end mr-5 overflow-hidden'>
              {index === 1 && (
                <div
                  className='w-[12vw] lg:w-[8.8vw] lg:h-[4.4vw] h-[8.4vw] mr-[1vw] rounded-md bg-cover bg-center'
                  style={{
                    backgroundImage: `url("https://i.pinimg.com/564x/c0/9c/8b/c09c8b227ba2bfeb9290f0e68de90ec4.jpg")`,
                    transform: slideIn ? 'translateX(0)' : 'translateX(-120%)',
                    transition: 'transform 1.5s ease',
                  }}
                ></div>
              )}
              <h1
                className='heading leading-[9.8vw] lg:leading-[4.4vw] uppercase font-bold text-[12vw] lg:text-[5vw]'
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

      <div className='image-container ml-10 w-full lg:w-1/2 flex justify-center items-center overflow-hidden'>
        <div className='lg:w-[30vw] lg:h-[30vw] w-[80vw] h-[80vw] bg-cover bg-center relative' style={{ backgroundImage: `url("https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-bookworm-clipart-cartoon-green-worm-wearing-glasses-is-reading-a-book-vector-png-image_6793593.png")` }}>
          <div className='absolute top-1/2 left-1/2 -translate-x-[155%] -translate-y-[135%]'>
            <div className='lg:w-[4.5vw] lg:h-[4.5vw] w-[12vw] h-[12vw] rounded-full bg-zinc-100'>
              <div className='relative lg:w-[3vw] lg:h-[3vw] w-[8vw] h-[8vw] translate-x-[25%] translate-y-[30%] rounded-full bg-zinc-900'>
                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 lg:w-[2.8vw] lg:h-[2.8vw] w-[8vw] h-[8vw]'>
                  <div className='lg:w-6 lg:h-6 w-[20px] h-[20px] rounded-full bg-zinc-100'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-[145%]'>
            <div className='lg:w-[4.5vw] lg:h-[4.5vw] w-[12vw] h-[12vw] rounded-full bg-zinc-100'>
              <div className='relative lg:w-[3vw] lg:h-[3vw] w-[8vw] h-[8vw] translate-x-[25%] translate-y-[30%] rounded-full bg-zinc-900'>
                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 lg:w-[2.8vw] lg:h-[2.8vw] w-[8vw] h-[8vw]'>
                  <div className='lg:w-6 lg:h-6 w-[20px] h-[20px] rounded-full bg-zinc-100'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer lg:border-t-[1px] border-zinc-500 flex flex-col md:flex-row justify-between items-center lg:py-5 py-8 px-5 md:px-20 w-[120vw] lg:w-[99vw] absolute bottom-0'>
        {["For readers and collectors", "From bestsellers to rare finds"].map((item, index) => (
          <p
            key={index}
            className='text-sm md:text-md text-zinc-900 tracking-tight leading-none text-center md:text-left my-2 md:my-0 hidden md:block' 
          >
            {item}
          </p>
        ))}

        <div className='start flex md:flex-row items-center gap-2 md:mt-0'>
          <div className='px-3 py-1 border-[2px] border-zinc-500 text-zinc-900 rounded-full capitalize block'>
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
