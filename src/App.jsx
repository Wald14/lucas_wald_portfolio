import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Component Imports
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

import "./assets/css/footer.css"

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Header />
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
