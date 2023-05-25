import React, { useEffect, useState } from "react";
import Testominial from "../components/Testominial";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Logo from "../image/Logo/Logo.png";

const TetsominialPage = () => {
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
        <section className="section testominial">
          <Testominial />
          <Banner />
          <Footer />
        </section>
      )}
    </>
  );
};

export default TetsominialPage;
