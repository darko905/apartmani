import React from "react";
import {
  AiFillInstagram,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import {TbBrandBooking} from 'react-icons/tb';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__data">
            <h1 className="home__title">
              Apartmani <span>Gold</span> Kalman
            </h1>
            <h3 className="home__subtitle">
              Izdavanje apartmana sezona 2023/24
            </h3>
            <div className="home__social">
              <Link to="tel:+381605241060" className="home__social-icons">
                <AiFillPhone />
              </Link>
              <Link
                to="https://instagram.com/zlatibor_gold_kalman?igshid=MzRlODBiNWFlZA=="
                className="home__social-icons"
              >
                <AiFillInstagram />
              </Link>
              <Link to="https://www.booking.com/Share-g2eNT5L" className="home__social-icons">
                <TbBrandBooking />
              </Link>
              <Link to="mailto:luka1radojicic@gmail.com" className="home__social-icons">
                <AiOutlineMail />
              </Link>
            </div>
            <Link to="/apartmani">
              <button className="button button-flex">
                Pogledajte ponudu <BsBoxArrowUpRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
