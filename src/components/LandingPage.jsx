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

	useEffect(() => {
		const handleMouseMove = (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			const angle = Math.atan2(deltaY, deltaX) * (360 / Math.PI);
			setRotate(angle - 360);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

  return (
    <div className='w-full h-screen pt-1 flex'>
      <div className='textstruct w-1/2 mt-72 ml-32'>
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

      <div className='w-1/2 flex justify-center items-center overflow-hidden'>
  <div className='w-[30vw] h-[30vw] bg-cover bg-center relative' style={{backgroundImage: `url("https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-bookworm-clipart-cartoon-green-worm-wearing-glasses-is-reading-a-book-vector-png-image_6793593.png")`,}}>
      <div className='absolute top-1/2 left-1/2 -translate-x-[155%] -translate-y-[135%]'>
      <div className='w-[4.5vw] h-[4.5vw] rounded-full bg-zinc-100'>
      <div className='relative w-[3vw] h-[3vw] translate-x-[25%] translate-y-[30%] rounded-full bg-zinc-900'>
      <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-[2.8vw] h-[2.8vw]'>
  <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
</div>

      </div>
      </div>
      </div> 
      <div className='absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-[145%]'>
      <div className='w-[4.5vw] h-[4.5vw] rounded-full bg-zinc-100'>
        <div className='relative w-[3vw] h-[3vw] translate-x-[25%] translate-y-[30%] rounded-full bg-zinc-900'>
        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-[2.8vw] h-[2.8vw]'>
  <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
</div>

      </div>
      </div>
      </div>  
  </div>
</div>


      <div className='border-t-[1px] border-zinc-500 mt-32 flex justify-between items-center py-5 px-20 w-full absolute bottom-0'>
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
