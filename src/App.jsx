import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Features from './components/Features'
import About from './components/About'
import Card from './components/Card'

function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <Features/>
      <About/>
      <Card/>
    </div>
  )
}

export default App
