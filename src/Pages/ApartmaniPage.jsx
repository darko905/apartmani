import React, { useEffect, useState } from "react";
import ApartmanList from "../components/ApartmanList";
import Contact from "../components/Contact";
import Logo from "../image/Logo/Logo.png";
import Footer from '../components/Footer';

const ApartmaniPage = () => {
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
        <section className="section apartmani" id="apartmani">
          <ApartmanList />
          <Contact />
          <Footer/>
        </section>
      )}
    </>
  );
};

export default ApartmaniPage;
