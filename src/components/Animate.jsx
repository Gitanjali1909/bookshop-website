import React, { useState, useEffect } from 'react';

function Animate() {
	const [rotate, setRotate] = useState(0);

	useEffect(() => {
		const handleMouseMove = (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setRotate(angle - 180);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className='eyes w-full h-screen overflow-hidden'>
			<div className='relative w-[60vw] h-[50vw] ml-80 bg-cover bg-center bg-[url("https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-bookworm-clipart-cartoon-green-worm-wearing-glasses-is-reading-a-book-vector-png-image_6793593.png")]'>
				<div className='absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-[145%]'>
					<div className='w-[9vw] h-[9vw] rounded-full bg-zinc-100'>
						<div className='relative w-[6vw] h-[6vw] translate-x-[25%] translate-y-[30%] rounded-full bg-zinc-900'>
							<div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 translate-x-[8%] translate-y-[8%] w-[5vw] h-[5vw]'>
								<div className='w-10 h-10 rounded-full bg-zinc-100'></div>
							</div>
						</div>
					</div>
				</div>
				<div className='absolute top-1/2 left-1/2 -translate-x-[155%] -translate-y-[136%]'>
					<div className='w-[9vw] h-[9vw] rounded-full bg-zinc-100'>
						<div className='relative w-[6vw] h-[6vw] translate-x-[20%] translate-y-[35%] rounded-full bg-zinc-900'>
							<div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 translate-x-[8%] translate-y-[8%] w-[5vw] h-[5vw]'>
								<div className='w-10 h-10 rounded-full bg-zinc-100'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Animate;

