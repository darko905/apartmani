import React, { useState } from "react";

import { BazenData } from "./BazenData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Bazen = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === BazenData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? BazenData.length - 1 : slide - 1);
  };

  return (
    <section className="section">
      <div className="container bazen-container">
        <div className="bazen-container__left">
          <IoIosArrowBack
            onClick={prevSlide}
            className="arrow arrow-left"
          />
          {BazenData.map((item, id) => {
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
            {BazenData.map((_, id) => {
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
          <h2>Bazen</h2>
          <p>
            Plivački bazen dugačak 25m pruža mogućnost potpunog užitka za
            ljubitelje plivanja I rekreacije. Angažujte plivanjem mišiće tela,
            ostanite u formi, budite zdravi I zadovoljni.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bazen;
