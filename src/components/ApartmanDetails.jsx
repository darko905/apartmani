import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { FaBed } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Logo from '../image/Logo/Logo.png';
import Footer from "./Footer";
import { Link } from "react-router-dom";

const ApartmanDetails = () => {
  const [loading, setLoading] = useState(false);
  
  const [singleApartman, setSingleApartman] = useState([]);

  const client = createClient({
    space: "urkp5t6shmtm",
    accessToken: "3oWK1yJTs0NXjUbuEmzeZeNY9RvAjjlOq6a5kGEekbM",
  });

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }, []);

  const { id } = useParams();

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries);
          setSingleApartman(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getEntryById();
  }, [id]);

  console.log(singleApartman);

  return (
    <>
    {loading ? (
        <div className="loader-apartman">
          <img src={Logo} alt="Logo" />
        </div>
      ) : (
      <section className="section apartman" id="apartman">
        <div className="apartman-single__container container">
          <div className="apartman-single__content ">
            <div className="apartman-single__left">
              <img
                src={singleApartman?.fields?.productPhoto?.fields?.file?.url}
                alt={singleApartman?.fields?.productPhoto?.fields?.file?.title}
                className="apartman-single__img"
              />

              <h2 className="apartman-single__title">
                {singleApartman?.fields?.productTitle}
              </h2>
              <p className="apartman-single__subtitle">
                <FaBed className="apartman-single__subtitle-icon" />{" "}
                {singleApartman?.fields?.productDescription}
              </p>
              <p className="apartman-single__description">
                {singleApartman?.fields?.productSummary}
              </p>
              <Link to="tel:+381605241060">
                <button className="button button--flex">
                  Pozovite <AiFillPhone />
                </button>
              </Link>
            </div>
            <div className="apartman-single__right">
              <div className="apartman-single__card">
                <h2 className="apartman-single__title">
                  Opis smeštaja: {singleApartman?.fields?.productTitle}
                </h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Kvadratura</td>
                      <td>{singleApartman?.fields?.productSquare} m2</td>
                    </tr>
                    <tr>
                      <td>Max broj osoba</td>
                      <td>{singleApartman?.fields?.productPeople}</td>
                    </tr>
                    <tr>
                      <td>Terasa</td>
                      <td>{singleApartman?.fields?.productTerrace}</td>
                    </tr>
                    <tr>
                      <td>Spavaća soba</td>
                      <td>{singleApartman?.fields?.productRoom} soba</td>
                    </tr>
                    <tr>
                      <td>Kuhinja</td>
                      <td>Komplet opremljena</td>
                    </tr>
                    <tr>
                      <td>TV i kablovska</td>
                      <td>Da</td>
                    </tr>
                    <tr>
                      <td>Internet, WiFi</td>
                      <td>Da</td>
                    </tr>
                    <tr>
                      <td>Krevet za bebe</td>
                      <td>2 kom.</td>
                    </tr>
                    <tr>
                      <td>Ostalo</td>
                      <td>Posteljina i peškiri</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="apartman-single__content_image">
          <img
              src={singleApartman?.fields?.productImage[0]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            <img
              src={singleApartman?.fields?.productImage[1]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            <img
              src={singleApartman?.fields?.productImage[2]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            <img
              src={singleApartman?.fields?.productImage[3]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            <img
              src={singleApartman?.fields?.productImage[4]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            <img
              src={singleApartman?.fields?.productImage[5]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
            <img
              src={singleApartman?.fields?.productImage[6]?.fields?.file?.url}
              alt="slika"
              className="apartman__img"
            />
          </div>
        </div>
        <Footer/>
      </section>
      )}
    </>
  );
};

export default ApartmanDetails;
