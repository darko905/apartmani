import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__data">
            <h1 className="home__title">Apartmani <span>Gold</span> Kalman</h1>
            <h3 className="home__subtitle">Izdavanje apartmana sezona 2023/24</h3>
            <div className="home__social">
              <AiFillPhone/>
              <AiFillInstagram/>
              <AiFillFacebook/>
              <AiOutlineMail/>
            </div>
            <button className="button button-flex">
              Pogledajte ponudu <BsBoxArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
