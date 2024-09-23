import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Animate from './components/Animate'


function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Animate/>
    </div>
  )
}

export default App
