import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Component Imports
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

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

          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
