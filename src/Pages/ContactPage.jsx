import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import Logo from '../image/Logo/Logo.png';
import Footer from '../components/Footer';

const ContactPage = () => {
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
      <Contact/>
      <Footer/>
    </section>
    )}
    </>
  )
}

export default ContactPage
