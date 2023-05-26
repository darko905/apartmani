import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdAddAPhoto } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { QuadData } from "./QuadData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Quad = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === QuadData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? QuadData.length - 1 : slide - 1);
  };

  return (
    <section className="quad-page quad">
      <div className="container">
        <div className="quad-main">
          <div className="quad-main__img">
            <IoIosArrowBack onClick={prevSlide} className="arrow arrow-left" />

            
            {QuadData.map((item, id) => {
            return (
              <img
                src={item.image}
                alt={item.alt}
                key={id}
                className={slide === id ? "slide" : "slide slide-hidden"}
              />
            );
          })}

            <IoIosArrowForward
              onClick={nextSlide}
              className="arrow arrow-right"
            />
            <span className="indicators">
            {QuadData.map((_, id) => {
              return (
                <button
                  key={id}
                  className={
                    slide === id ? "indicator" : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(id)}
                ></button>
              );
            })}
          </span>
          </div>

          <div className="quad-main__text">
            <h3>Zlatibor Gold Kvadovi</h3>
            <h2>Najbolji kvadovi na Zlatiboru</h2>
            <p>
              Zlatibor je pravi izbor za sve ljubitelje off-road avanture i
              adrenalina. Istraživanje planine kvadovima i četvorotočkašima je
              doživljaj koji će boravak na Zlatiboru učiniti jedinstvenim i
              nezaboravnim. Mnogobrojne su maršute kojima se može upustiti u
              adrenalinsku avanturu na četiri točka: vožnja ka Torniku,
              Zlatiborskim jezerima, Semegnjevu, Čigoti i spomeniku na Šumatnom
              brdu. Kvadovi se mogu iznajmiti na nekoliko lokacija: u centru kod
              autobuske stanice i u naselju Kalman. Svi gosti koji koriste
              usluge Gold Kalman apartmana ostvaruju popust na iznajmljivanje
              kvadova.
            </p>
            <div className="quad-main__text__icons">
              <div className="quad-main__text__icons__box">
                {/* <img src={Box1} alt="car-icon" /> */}
                <span>
                  <h4>
                    <HiLocationMarker />
                  </h4>
                  <p>Neverovatne Lokacije</p>
                </span>
              </div>
              <div className="quad-main__text__icons__box">
                {/* <img src={Box2} alt="car-icon" /> */}
                <span>
                  <h4>
                    <MdAddAPhoto />
                  </h4>
                  <p>Prelepi pejzaži</p>
                </span>
              </div>
              <div className="quad-main__text__icons__box">
                {/* <img src={Box3} alt="car-icon" className="last-fk" /> */}
                <span>
                  <h4>
                    <BsFillRocketTakeoffFill />
                  </h4>
                  <p>Adrenalin</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quad;
