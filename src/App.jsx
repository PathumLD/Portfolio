import { useState } from 'react'
import './App.css'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Sidenav />
      <Main />
      <About />
      <Gallery />
      <Contact />
    </>
  )
}

export default App
