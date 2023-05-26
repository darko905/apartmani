import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Logo from "../image/Logo/Logo.png";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="section footer">
      <div className="container">
        <div className="footer__content">
          <ul className="footer__content-1">
            <li>
              <img src={Logo} alt="Logo" />
            </li>
            <li>
              Novi, moderno opremljeni apartmani samo 50m od centra Zlatibora.
              <br />
              Preko puta Gold Gondole koja povezuje centar Zlatibora sa
              Tornikom.
            </li>
          </ul>

          <ul className="footer__content-2">
            <li>Link</li>
            <li>
              <IoMdArrowDropright className="footer__content-2_icons" />{" "}
              <Link to="/apartmani" className="footer__content-2_link">
                Apartmani
              </Link>
            </li>
            <li>
              <IoMdArrowDropright className="footer__content-2_icons" />{" "}
              <Link to="/about" className="footer__content-2_link">
                O nama
              </Link>
            </li>
            <li>
              <IoMdArrowDropright className="footer__content-2_icons" />{" "}
              <Link to="/wellness" className="footer__content-2_link">
                Wellness
              </Link>
            </li>
          </ul>

          <ul className="footer__content-2">
            <li>Kontakt</li>
            <li>
              <Link to="">
                <AiFillPhone className="footer__content-2_icons" /> (060)
                5241060
              </Link>
            </li>
            <li>
              <Link to="">
                <AiOutlineMail className="footer__content-2_icons" />{" "}
                lukaradojicic@gmail.com
              </Link>
            </li>
            <li>
              <MdLocationOn className="footer__content-2_icons" /> Miladina
              Pećinara 94g, 31315, Zlatibor
            </li>
          </ul>
        </div>
        <div className="copyright-text">
          <p>
            Copyright &copy; {year}, All Right Reserved Gold Kalman <br /><br />
            Designed with ❤ by
            <Link to="https://darkodjukic.netlify.app/" className="name">
              {" "}
              Darko Djukic
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
