import React from 'react'; 
import '@fontsource/roboto';

function Features() {
  return (
    <div className='w-full py-[20%]'>
      <div className='w-full px-20 border-b-[1px] border-zinc-900 pb-2'>
        <h1 className='text-6xl tracking-tight' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>Our picks</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-40 mt-10">
          <div  className="card-container relative w-1/2 h-[60vh]">
            <h1 className='absolute text-[#8FB056] overflow-hidden z-[9] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl leading-none tracking-tighter' style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>
            {"POETRY".split('').map((item, index) => <span key={index}>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105'>
              <img className='rounded-xl w-full h-full' src="https://i.pinimg.com/564x/34/64/80/346480a17775da28fbba649ff315bc68.jpg" alt="Holly Black" />
            </div>
          </div>
          <div className="card-container relative w-1/2 h-[60vh] ">
            <h1 className='absolute text-[#8FB056] z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl leading-none tracking-tighter' style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>
              {"FICTION".split('').map((item, index) => <span key={index}>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105'>
              <img className='rounded-xl w-full h-full' src="https://i.pinimg.com/564x/b1/a9/4d/b1a94d3923032884636aea5413fd5e7b.jpg" alt="STANDALONE'S" />
            </div>
          </div>
        </div>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-40 mt-10">
          <div className="card-container relative w-1/2 h-[60vh]">
            <h1 className='absolute text-[#8FB056] z-[9] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl leading-none tracking-tighter' style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>
              {"CLASSICS".split('').map((item, index) => <span key={index}>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105'>
              <img className='rounded-xl w-full h-full' src="https://i.pinimg.com/564x/d1/46/83/d146834994d67ce47af910d1a94906ae.jpg" alt="Holly Black" />
            </div>
          </div>
          <div className="card-container relative w-1/2 h-[60vh] ">
            <h1 className='absolute text-[#8FB056] z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl leading-none tracking-tighter' style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>
              {"NON-FICTION".split('').map((item, index) => <span key={index}>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105'>
              <img className='rounded-xl w-full h-full' src="https://i.pinimg.com/564x/91/17/a2/9117a23c1f520387e701f6e23905acfa.jpg" alt="STANDALONE'S" />
            </div>
          </div>
        </div>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-40 mt-10">
          <div className="card-container relative w-1/2 h-[60vh]">
            <h1 className='absolute text-[#8FB056] z-[9] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl leading-none tracking-tighter' style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>
              {"MYSTERY".split('').map((item, index) => <span key={index}>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105'>
              <img className='rounded-xl w-full h-full' src="https://i.pinimg.com/564x/8d/f3/9e/8df39e32595772f740e06931f186fdd6.jpg" alt="Mystery" />
            </div>
          </div>
          <div className="card-container relative w-1/2 h-[60vh] ">
            <h1 className='absolute text-[#8FB056] z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl leading-none tracking-tighter' style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>
              {"SHORT STORIES".split('').map((item, index) => <span key={index}>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105'>
              <img className='rounded-xl w-full h-full' src="https://i.pinimg.com/564x/f6/35/8d/f6358df3cdfac776c07eaa2f8cc8c977.jpg" alt="Fantasy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
