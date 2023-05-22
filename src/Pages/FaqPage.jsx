import React, { useEffect, useState } from "react";
import Faq from "../components/Faq";
import Logo from "../image/Logo/Logo.png";
import Footer from "../components/Footer";

const FaqPage = () => {
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
        <section className="section faq">
          <Faq />
          <Footer />
        </section>
      )}
    </>
  );
};

export default FaqPage;
