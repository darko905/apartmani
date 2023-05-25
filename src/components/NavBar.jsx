import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Logo from "../image/Logo/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");

    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  const [Toogle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("/home");
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Logo" className="nav__logo-img" />
        </Link>

        <div className={Toogle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list ">
            <li className="nav__item" onClick={() => showMenu(!Toogle)}>
              <Link
                to="/"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                Početna
              </Link>
            </li>
            <li className="nav__item" onClick={() => showMenu(!Toogle)}>
              <Link
                to="/apartmani"
                onClick={() => setActiveNav("#apartmani")}
                className={
                  activeNav === "#apartmani"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Apartmani
              </Link>
            </li>
            <li className="nav__item" onClick={() => showMenu(!Toogle)}>
              <Link
                to="/faq"
                onClick={() => setActiveNav("/faq")}
                className={
                  activeNav === "/faq" ? "nav__link active-link" : "nav__link"
                }
              >
                Pitanja i odogovori
              </Link>
            </li>
            <li className="nav__item" onClick={() => showMenu(!Toogle)}>
              <Link
                to="/testominial"
                onClick={() => setActiveNav("/testominial")}
                className={
                  activeNav === "/testominial"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Utisci
              </Link>
            </li>
            <li className="nav__item" onClick={() => showMenu(!Toogle)}>
              <Link
                to="/wellness"
                onClick={() => setActiveNav("/wellness")}
                className={
                  activeNav === "/wellness"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Wellness
              </Link>
            </li>
            <li className="nav__item" onClick={() => showMenu(!Toogle)}>
              <Link
                to="/about"
                onClick={() => setActiveNav("/about")}
                className={
                  activeNav === "/about" ? "nav__link active-link" : "nav__link"
                }
              >
                O nama
              </Link>
            </li>
            <li className="nav__item" onClick={() => showMenu(!Toogle)}>
              <Link
                to="/contact"
                onClick={() => setActiveNav("/contact")}
                className={
                  activeNav === "/contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Kontakt
              </Link>
            </li>
          </ul>

          <MdClose className="nav__close" onClick={() => showMenu(!Toogle)} />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toogle)}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
