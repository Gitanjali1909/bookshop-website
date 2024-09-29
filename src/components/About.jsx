import React, { useState } from 'react';
import '@fontsource/roboto';

function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className='w-[95vw] py-20 bg-[#8FB056] rounded-3xl p-10 mx-10 my-20'>
      <div className='w-full flex h-[30vw]'>
        <div className='w-1/2 ml-16'>
          <h1 className='text-5xl tracking-tight' style={{fontFamily: 'Roboto, sans-serif', fontWeight: 200,}}>Our approach:</h1>
          <button className='flex items-center gap-6 uppercase mt-3 px-5 py-2 bg-zinc-900 rounded-full text-white'>
            Read More
            <div className='w-2 h-2 bg-zinc-300 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 mr-20'>
          <div style={{ perspective: '1000px', position: 'relative' }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transition: 'transform 1.2s',
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}>
              <img style={{
                position: 'absolute',
                width: '100%',
                height: '60vh',
                backfaceVisibility: 'hidden',
                borderRadius: '1.5rem',
              }}
                src="https://i.pinimg.com/736x/fa/ca/f6/facaf6d4633c4493b3756a80fd1b245a.jpg"
                alt="Front"
              />
              <img style={{
                position: 'absolute',
                width: '100%',
                height: '60vh',
                backfaceVisibility: 'hidden',
                borderRadius: '1.5rem',
                transform: 'rotateY(180deg)',
              }}
                src="https://i.pinimg.com/736x/67/9f/72/679f722b917730c8618323f2178d1e45.jpg"
                alt="Back"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 300 }} className='text-[3vw] mr-10 mt-10 ml-14 leading-[3vw] font-bold tracking-tighter'>
      Dive into stories that ignite your imagination and kindle your passion for reading!
      </h1>
      <div className=' ml-2 mt-10 flex justify-between items-center'>
        <div className='flex flex-col justify-between'>
          <h3 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 200 }} className='text-[1.5vw] ml-12 font-bold mt-[1.5vw]'>What We Offer:</h3>
          <div className='ml-[25vw] -mt-[2.5vw] leading-[1vw]'>
            <p style={{ fontFamily: 'Roboto, sans-serif', lineHeight:'1.2' }} className='text-[1.5vw] ml-10 mt-[1vw]'>
              A curated selection of genres to satisfy every reader's taste. <br />
              Personalized recommendations to help you discover your next favorite book. <br />
              A community space for book lovers to share their thoughts and insights.
            </p>
            <p style={{ fontFamily: 'Roboto, sans-serif', lineHeight:'1.2' }} className='text-[1.5vw] ml-10 mt-[1vw]'>
              Join us in celebrating the magic of reading! <br />
              Whether you're a casual reader or a literary enthusiast, we have something special for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
