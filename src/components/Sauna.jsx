import React, { useState } from 'react'

import { SaunaData } from './SaunaData';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Sauna = () => {
    const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === SaunaData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? SaunaData.length - 1 : slide - 1);
  };
  return (
    <section className="section">
      <div className="container sauna-container">
        
        <div className="sauna-container__left">
          <h2>Sauna</h2>
          <p>
            Finska sauna- temperatura 90°C , vlažnost vazduha 10-15% Bio sauna- temperatura 60 °C, vlažnost vazduha 40%
          </p>
        </div>

        <div className="sauna-container__right">
          <IoIosArrowBack
            onClick={prevSlide}
            className="arrow arrow-left"
          />
          {SaunaData.map((item, id) => {
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
            {SaunaData.map((_, id) => {
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
      </div>
    </section>
  )
}

export default Sauna
