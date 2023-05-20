import React, { useState } from "react";

import { JakuzziData } from "./JakuzziData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Jakuzzi = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === JakuzziData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? JakuzziData.length - 1 : slide - 1);
  };
  return (
    <section className="section">
      <div className="container bazen-container">
        <div className="bazen-container__left">
          <IoIosArrowBack onClick={prevSlide} className="arrow arrow-left" />
          {JakuzziData.map((item, id) => {
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
            {JakuzziData.map((_, id) => {
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
        <div className="bazen-container__right">
          <h2>Jakuzzi</h2>
          <p>
            Nakon dana ispunjenog zimskim radostima i boravkom na snegu, Jacuzzi
            je jedan od užitaka koji sebi možete priuštiti kako bi opuštanje
            Vaših mišića i celog tela bio potpun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Jakuzzi;
