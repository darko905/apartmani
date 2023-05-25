import React, { useEffect, useState } from 'react'
import Bazen from '../components/Bazen'
import Sauna from '../components/Sauna'
import Jakuzzi from '../components/Jakuzzi'
import Teretana from '../components/Teretana'
import Masaza from '../components/Masaza'
import Banner from '../components/Banner'
import Logo from '../image/Logo/Logo.png';
import Footer from '../components/Footer'

const Wellness = () => {
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
    <section className='section wellness'>
      <h2 className="section__title">Wellnes</h2>
      <span className="section__subtitle">Mesto susreta lepote, zdravlja i fitnesa.</span>
      <Bazen/>
      <Sauna/>
      <Jakuzzi/>
      <Teretana/>
      <Masaza/>
      <Banner/>
      <Footer/>
    </section>
    )}
    </>
  )
}

export default Wellness
