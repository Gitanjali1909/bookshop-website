import React from 'react';
import '@fontsource/roboto';
import '@fontsource/montserrat';

function Navbar() {
  const name = "PageTurner";

  return (
    <div
      className='shadow-lg rounded-full fixed z-[999] mx-10 w-[95vw] h-20 mt-2 px-20 py-0 flex font-bold flex-row justify-between items-center bg-[#8FB056] bg-opacity-90 backdrop-blur-lg'
      style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 300, backdropFilter: 'blur(10px)' }}>
      <div className='text-3xl text-white font-semibold tracking-wide flex' style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {name.split("").map((letter, index) => (
          <span
            key={index}
            className="animated-letter"
            style={{
              animation: `bounce 0.5s ease ${index * 0.1}s both`,
              display: 'inline-block'
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className='flex text-white gap-14 links mt-5'>
        {["Explore", "Genres", "Book Club", "New Arrivals", "Contact Us"].map((item, index) => (
          <a key={index} className={`font-light capitalize cursor-pointer text-lg ${index === 4 ? "ml-32" : ""}`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;





