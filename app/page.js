import React from 'react'
import Hero from './components/Hero'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactUs from './components/Contact'
import Auto from './components/Auto'
import Aboutme from './components/Aboutme'

const page = () => {
  return (
    <>
      <Hero />
      <Home />
      <Aboutme/>
      <Services />
      <About />
      <Auto />
      <ContactUs />
      <Footer />
    </>
  )
}

export default page