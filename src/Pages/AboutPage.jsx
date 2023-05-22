import React, { useEffect, useState } from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Logo from '../image/Logo/Logo.png';

const AboutPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
    </section>
    )}
    </>
  )
}

export default AboutPage
