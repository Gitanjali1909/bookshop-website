import React from 'react'
import '@fontsource/roboto';

function About() {
  return (
	<div className='w-full py-20 bg-[#f79191]'>
		<h1  style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 300 }} className='text-[3vw] mr-20 ml-12 leading-[3vw] font-bold tracking-tight ' >We believe that every book is a journey waiting to be explored. 
			Our mission is to connect readers with the stories that inspire, educate, and entertain.</h1>
			<div className='border-t-[2px] border-[#663718] mb-10 mt-20 flex justify-between items-center '>
				<div className='flex flex-col justify-between '>
					<h3 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 100 }} className='text-[1.3vw] ml-12 font-bold mt-[1.5vw]'>What We Offer:</h3>
					<div className='ml-[25vw] -mt-[2.5vw] leading-[1vw] '><p style={{ fontFamily: 'Roboto, sans-serif', lineHeight:'1.2' }} className='text-[1.2vw] ml-10 mt-[1vw] '>A curated selection of genres to satisfy every reader's taste. <br />Personalized recommendations to help you discover your next favorite book. <br />A community space for book lovers to share their thoughts and insights.</p>
<p style={{ fontFamily: 'Roboto, sans-serif', lineHeight:'1.2' }} className='text-[1.2vw] ml-10 mt-[1vw] '>Join us in celebrating the magic of reading! <br /> Whether you're a casual reader or a literary enthusiast, we have something special for you.</p></div>
				</div>
			</div>
			<div className='w-full border-t-[2px] flex gap-2 border-[#663718] pt-10'>
				<div className='w-1/2 ml-16'>
				<h1 className='text-[3vw]'>Our approach:</h1>
				<button className='flex items-center gap-6 uppercase mt-3 px-5 py-2 bg-zinc-900 rounded-full text-white'>Read More
					<div className='w-2 h-2 bg-zinc-300 rounded-full'></div>
				</button>
				</div>
				<div className='w-1/2 h-[70vh] bg-[#946b4f] rounded-3xl mr-20'>
				<img className='h-[70vh] w-full rounded-3xl mr-20' src="https://i.pinimg.com/564x/3e/3d/be/3e3dbed648f688a59afdc8966b78d75d.jpg" alt="" /></div>
			</div>
	
	</div>
  )
}

export default About
