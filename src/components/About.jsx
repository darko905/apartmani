import React from "react";
import {
  MdOutlineCleaningServices,
  MdOutlineContentPasteSearch,
  MdPets,
} from "react-icons/md";
import { BiSwim } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section choose">
      <div className="container">
        <div className="text-container">
          <div className="text-container__left">
            <h4>O nama</h4>
            <h2>NAJBOLJI APARTMANI NA ZLATIBORU</h2>
            <p>
              Novi, moderno opremljeni apartmani samo 50m od centra Zlatibora.
              Preko puta Gold Gondole koja povezuje centar Zlatibora sa Tornikom.
              <br/>
              <br/>
              Savremni koncept godišnjeg odmora u potpuno novim apartmanima na
              jednoj od najlepših lokacija na Zlatiboru. Profesionalno
              upravljanje apartmanima u okviru Kalman Zlatibor kompleksa. Ako
              imate apartman u našem kompleksu, a želite dodatnu zaradu na
              pravom ste mestu. Mi smo tim profesionalaca posvecenih postizanju
              izuzetnih rezultata rentiranja apartmana na Zlatiboru. Celokupnu
              operativu možete prepustiti nama, a vi se ugodno smestite u svoju
              fotelju i čitajte mesečne izveštaje o prihodima koje Vam naš tim
              salje svakog meseca.
            </p>
            <Link to='/apartmani'>
              <button className="button">Pogledajte ponudu <BsBoxArrowUpRight /></button>
            </Link>
          </div>
          <div className="text-container__right">
            <div className="text-container__right__box">
              <div className="text-container__right__box__icon">
                <MdOutlineCleaningServices />
              </div>
              <div className="text-container__right__box__text">
                <h4>Čisto i dezinfikovano</h4>
                <p>
                  Sve prostorije i smeštajne jedinice se redovno detaljno
                  dezinfikuju.
                </p>
              </div>
            </div>
            <div className="text-container__right__box">
              <div className="text-container__right__box__icon">
                <MdPets />
              </div>

              <div className="text-container__right__box__text">
                <h4>Pet Friendly</h4>
                <p>
                  Kućni ljubimci su nam veoma dragi i posebni gosti. Slobodno ih
                  povedite.
                </p>
              </div>
            </div>
            <div className="text-container__right__box">
              <div className="text-container__right__box__icon">
                <BiSwim />
              </div>

              <div className="text-container__right__box__text">
                <h4>Spa centar na preko 500m2</h4>
                <p>
                  Spa centara od 10h do 21h svakog dana. Bazen, Sauna(Finska i
                  Bio), Jacuzzi, Tepidarijum
                </p>
              </div>
            </div>
            <div className="text-container__right__box">
              <div className="text-container__right__box__icon">
                <CgGym />
              </div>

              <div className="text-container__right__box__text">
                <h4>Teretana</h4>
                <p>
                  Moderno dizajniran ambijent opremljen je najsavremenijim
                  spravama brenda Life Fitness.
                </p>
              </div>
            </div>
            <div className="text-container__right__box">
              <div className="text-container__right__box__icon">
                <MdOutlineContentPasteSearch />
              </div>

              <div className="text-container__right__box__text">
                <h4>Sadržaj</h4>
                <p>
                  Obezbeđujemo besplatan parking, Wi-fi, rekviziti i još mnogo
                  toga…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
