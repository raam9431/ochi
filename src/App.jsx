import React from 'react'
import About from './components/About'
import Eyes from './components/Eyes'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'

function App() {
  return (

    <div className='w-full min-h-screen bg-zinc-900 text-white'>App
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
    </div>

  )
}

export default App