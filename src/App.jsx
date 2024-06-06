import { useState } from 'react'
import './App.css'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Sidenav />
      <Main />
      <About />
      <Gallery />
      <Projects />
      <Contact />
    </>
  )
}

export default App
