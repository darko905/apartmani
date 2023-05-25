import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ApartmanList from '../components/ApartmanList'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Quad from '../components/Quad'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Banner/>
      <About/>
      <ApartmanList/>
      <Quad/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default HomePage
