import React, { useState } from 'react';
import '@fontsource/roboto';
import '@fontsource/montserrat';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const name = "PageTurner";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='shadow-lg rounded-full fixed z-[999] mx-12 sm:mx-10 w-[100vw] sm:w-[95vw] h-16 sm:h-20 mt-2 px-5 sm:px-20 py-0 flex font-bold justify-between items-center bg-[#8FB056] bg-opacity-90 backdrop-blur-lg'
      style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 300, backdropFilter: 'blur(10px)' }}>
      
      <div className='text-2xl sm:text-3xl text-white font-semibold tracking-wide flex' style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
      <div className='hidden sm:flex lg:mb-4 text-white gap-14 links mt-5'>
        {["Explore", "Genres", "Book Club", "New Arrivals", "Contact Us"].map((item, index) => (
          <a 
            key={index} 
            className={`font-light capitalize cursor-pointer text-lg ${index === 4 ? "ml-32" : ""}`}>
            {item}
          </a>
        ))}
      </div>

      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className='absolute top-16 right-5 w-[85vw] bg-[#8FB056] bg-opacity-90 backdrop-blur-lg rounded-lg flex flex-col items-center text-white py-4'>
          {["Explore", "Genres", "Book Club", "New Arrivals", "Contact Us"].map((item, index) => (
            <a 
              key={index} 
              className="font-light capitalize cursor-pointer text-lg py-2 w-full text-center"
              onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
