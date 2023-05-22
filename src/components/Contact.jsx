import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_g619idq",
      "template_xtl07qq",
      form.current,
      "8OWSlJSImE84LIso3"
    );
    e.target.reset();
  };
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">Kontakt</h2>
      <span className="section__subtitle">
        Ukoliko imate bilo kakvih pitanja možete nas kontaktirati putem forme
        ispod.
      </span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <AiOutlineMail className="contact__card-icon" />

              <span className="contact__card-data">luka1radojicic.com</span>
            </div>

            <div className="contact__card">
              <AiFillPhone className="contact__card-icon" />

              <span className="contact__card-data">+381605241060</span>
            </div>

            <div className="contact__card">
              <HiOutlineLocationMarker className="contact__card-icon" />

              <span className="contact__card-data">
                Miladina Pećinara 94g, 31315, Zlatibor
              </span>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Ime</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Vaše ime"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Vaš email"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Telefon</label>
              <input
                min="9"
                max="10"
                type="number"
                name="number"
                className="contact__form-input"
                placeholder="Broj telefona"
              />
              
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Poruka</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Vaša poruka..."
              ></textarea>
            </div>
            <button className="button button-flex">
              Posaljite<i className="uil uil-message"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
