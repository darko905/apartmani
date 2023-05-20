import React from 'react';
import { PeopleData } from "./PeopleData";

import Logo from '../image/Logo/Logo.png';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { FaQuoteRight } from 'react-icons/fa';

const Testominial = () => {
  return (
    <section className="section container testominial">
      <h2 className="section__title"><img src={Logo} alt="Logo" /></h2>
      <span className="section__subtitle">Pogledajte šta se gostima najviše svidelo</span>
      {/* <p className="section__description">
        Discover the positive impact we've made on the our clients by reading
        through their testimonials. Our clients have experienced our service and
        results, and they're eager to share their positive experiences with you.
      </p> */}

      <Swiper className="testominial__container"
      loop={true}
      grabCursor={true}
      spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      }}
      modules={[Pagination]}
      >
        {PeopleData.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testominial__card" key={id}>
              <img src={image} alt={title} className="testominial__img" />

              <h3 className="testominial__name">{title}</h3>
              <p className="testominial__description"><FaQuoteRight/> {description} <FaQuoteRight/></p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  )
}

export default Testominial
