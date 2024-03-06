import Navbar from "./components/navbar"
import Hero from './components/hero'
import Experience from './components/experience'
import Education from './components/education'
import Contact from './components/contact'
import Work from './components/work'
import Current from './components/current'
import React from 'react'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Work/>
      <Current/>
      <Experience/>
      <Education/>
      <Contact/>
    </div>
  )
    
}

export default App;

