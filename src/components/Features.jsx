import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import '@fontsource/roboto';

function Features() {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: '1',
      title: 'Holly Black',
      subtitle: 'POETRY',
      imgSrc: 'https://i.pinimg.com/564x/eb/75/34/eb7534e5b5c022a73f44299762e0a3ae.jpg',
      width: '25vw', 
      height: '65vh' 
    },
    {
      id: '2',
      title: "STANDALONE'S",
      subtitle: 'FICTION',
      imgSrc: 'https://i.pinimg.com/564x/93/b0/a4/93b0a419281c61568dff82f416d955cc.jpg',
      width: '25vw', 
      height: '50vh' 
    },
    {
      id: '3',
      title: '',
      subtitle: '',
      imgSrc: 'https://i.pinimg.com/564x/b7/4e/e8/b74ee8de8d13e159d77c3155ff576c0f.jpg',
      width: '30vw',
      height: '60vh'
    },
    {
      id: '4',
      title: '',
      subtitle: '',
      imgSrc: 'https://i.pinimg.com/564x/0d/1d/96/0d1d96d930e276a1f890d84049ae8814.jpg',
      width: '100%',
      height: '40vh' 
    },
    {
      id: '5',
      title: 'Holly Black',
      subtitle: 'POETRY',
      imgSrc: 'https://i.pinimg.com/736x/f5/40/96/f54096ef47bb2290b2f2355dc47c8a21.jpg',
      width: '25vw', 
      height: '65vh',
    },
    {
      id: '6',
      title: '',
      subtitle: '',
      imgSrc: 'https://i.pinimg.com/564x/64/ba/5d/64ba5dacce70506bedf2a92758e9db85.jpg',
      width: '30vw',
      height: '55vh' 
    },
  ];

  return (
    <div className='bg-[#8FB056] rounded-3xl p-10 mx-10 my-10'>
      <div className='w-full px-10 pb-2'>
        <h1 className='text-6xl tracking-tight text-zinc-900' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Our picks</h1>
      </div>
      <div className='px-10'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mr-10 gap-9 mt-10">
          {items.map(item => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              style={{ width: item.width, height: item.height }} // Apply custom width and height here
              className="card-container relative"
            >
              <div className='card w-full h-full rounded-xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105'>
                <img className='rounded-xl w-full h-full object-cover' src={item.imgSrc} alt={item.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
          >
            {items.find(item => item.id === selectedId) && (
              <>
                <motion.h5>{items.find(item => item.id === selectedId).subtitle}</motion.h5>
                <motion.h2>{items.find(item => item.id === selectedId).title}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Features;
