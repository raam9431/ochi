import React from 'react'
import About from './components/About'
import Cards from './components/Cards'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
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
      <Featured />
      <Cards />
    </div>

  )
}

export default App