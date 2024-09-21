import React from 'react';
import '@fontsource/roboto';
import '@fontsource/montserrat';

function Navbar() {
  return (
    <div className='z-[999] w-full px-20 py-8 flex flex-row justify-between items-center' style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className='text-lg font-bold'>PageTurner</div>
      <div className='links flex gap-12'>
        {["Explore", "Genres", "Book Club", "New Arrivals", "Contact Us"].map((item, index) => (
          <a key={index} className='text-md capitalize font-light cursor-pointer'>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;



