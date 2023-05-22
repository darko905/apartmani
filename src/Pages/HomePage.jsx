import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ApartmanList from '../components/ApartmanList'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <ApartmanList/>
      <Contact/>
    </div>
  )
}

export default HomePage
