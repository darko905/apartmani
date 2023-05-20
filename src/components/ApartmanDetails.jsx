import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { FaBed } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { useParams } from "react-router-dom";

const ApartmanDetails = () => {
  const [singleApartman, setSingleApartman] = useState([]);

  const client = createClient({
    space: "urkp5t6shmtm",
    accessToken: "3oWK1yJTs0NXjUbuEmzeZeNY9RvAjjlOq6a5kGEekbM",
  });

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
      <section className="section apartman" id="apartman">
        <div className="apartman-single__container container">
          <div className="apartman-single__content ">
            <div className="apartman-single__left">
              <img
                src={singleApartman?.fields?.productPhoto?.fields?.file?.url}
                alt={singleApartman?.fields?.title}
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
              <button className="button button-flex">Pozovite <AiFillPhone/></button>
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
                      <td>67 m2</td>
                    </tr>
                    <tr>
                      <td>Max broj osoba</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Terasa</td>
                      <td>Da</td>
                    </tr>
                    <tr>
                      <td>Spavaća soba</td>
                      <td>2 sobe</td>
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

                {/* 
              single page image[0], [1].....
              <img
                src={post.fields.productImage[0].fields.file.url}
                alt="slika"
                className="apartman__img"
          /> */}
              </div>
            </div>
          </div>
          


          <div className="apartman-single__content_image">


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
          </div>







        </div>
      </section>
    </>
  );
};

export default ApartmanDetails;
