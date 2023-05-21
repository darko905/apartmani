import React, { useState } from "react";

import { MasazaData } from "./MasazaData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Masaza = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === MasazaData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? MasazaData.length - 1 : slide - 1);
  };
  return (
    <>
      <div className="container masaza-container">
        <div className="masaza-container__left">
          <IoIosArrowBack onClick={prevSlide} className="arrow arrow-left" />
          {MasazaData.map((item, id) => {
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
            {MasazaData.map((_, id) => {
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
        <div className="masaza-container__right">
          <h2>Masaža</h2>
          <p>
            U kombinaciji sa ostalim sadržajima Kalman Spa&Gym centra, masaža
            predstavlja savršen dodatak prilikom posete wellnessa. Kontaktirajte
            recepciju i rezervišite neku od masaža iz naše ponude.
          </p>
        </div>
      </div>
    </>
  );
};

export default Masaza;
