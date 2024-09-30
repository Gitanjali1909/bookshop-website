import React from 'react';
import '@fontsource/roboto';

function Card() {
  return (
    <div className='lg:w-full w-[110vw] flex flex-col md:flex-row gap-5 items-center px-10' style={{ paddingBottom: '30px' }}>
      <div className='container w-full md:w-1/2 h-[50vh]'>
        <div className='card relative w-full rounded-xl h-full bg-zinc-900 flex items-center justify-center'>
          <h1 className='lg:text-2xl text-xl text-zinc-50 tracking-tight' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Book Store</h1>
          <button className='text-zinc-50 absolute left-10 lg:bottom-10 bottom-5 px-3 py-1 rounded-full border-2'>&copy; 2021-2024</button>
        </div>
      </div>
      <div className='container w-full md:w-1/2 h-[50vh] flex flex-col md:flex-row gap-5'>
        <div className='relative card w-full md:w-1/2 rounded-xl h-full bg-[#8FB056] flex items-center justify-center'>
          <h1 className='lg:text-2xl text-xl text-zinc-900 tracking-tight' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Author Spotlight</h1>
          <button className='text-zinc-50 absolute left-10 lg:bottom-10 bottom-5 px-3 py-1 rounded-full border-2'>&copy; 2022-2024</button>
        </div>
        <div className='relative card w-full md:w-1/2 flex items-center justify-center rounded-xl h-full bg-[#4b6a14]'>
          <h1 className='lg:text-2xl text-xl text-zinc-50 tracking-tight' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Best Sellers</h1>
          <button className='text-zinc-50 absolute left-10 lg:bottom-10 bottom-5 px-3 py-1 rounded-full border-2'>&copy; 2023-2024</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

