import React, { useState } from 'react'

import { TeretanaData } from './TeretanaData';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Teretana = () => {
    const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === TeretanaData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? TeretanaData.length - 1 : slide - 1);
  };
  return (
    <>
      <div className="container teretana-container">
        
        <div className="teretana-container__left">
          <h2>Teretana</h2>
          <p>
          Moderno dizajniran ambijent opremljen je najsavremenijim spravama brenda Life Fitness. Teretana raspolaže prijemnim delom sa recepcijom, svlačionicama sa garderobnim ormarićima i tuš kabinama. Testirajte našu profesionalnost i Vašu volju uz bazu profesionalnih instruktora ili individualno na najmodernijim cardio i strength spravama.
          </p>
        </div>

        <div className="teretana-container__right">
          <IoIosArrowBack
            onClick={prevSlide}
            className="arrow arrow-left"
          />
          {TeretanaData.map((item, id) => {
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
            {TeretanaData.map((_, id) => {
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
    </>
  )
}

export default Teretana
