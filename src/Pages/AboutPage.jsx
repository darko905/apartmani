import React, { useEffect, useState } from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Logo from '../image/Logo/Logo.png';
import Footer from '../components/Footer';
import Quad from '../components/Quad';

const AboutPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);
  return (
    <>
    {loading ? (
      <div className="loader-apartman">
        <img src={Logo} alt="Logo" />
      </div>
    ) : (
    <section className='section'>
      <About/>
      <Banner/>
      <Quad/>
      <Footer/>
    </section>
    )}
    </>
  )
}

export default AboutPage
