import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Features from './components/Features'
import Card from './components/Card'


function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Features/>
      <Card/>
    </div>
  )
}

export default App
