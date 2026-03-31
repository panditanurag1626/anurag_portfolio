import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Exeperience'
function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
    </div>
  )
}
export default Home