import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

const ApartmanList = () => {
  const [apartmanPost, setApartmanPost] = useState([]);

  const client = createClient({
    space: "urkp5t6shmtm",
    accessToken: "3oWK1yJTs0NXjUbuEmzeZeNY9RvAjjlOq6a5kGEekbM",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries);
          setApartmanPost(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAllEntries();
  }, []);
  return (
    <>

      
      <section className="section apartman" id="apartman">
      <h2 className="section__title">Apartmani u strogom centru Zlatibora</h2>
      <span className="section__subtitle">Veliki izbor apartmana na Zlatiboru. Prijatan ambijent i moderan dizajn.</span>
        <div className="apartman__container container grid">
          {apartmanPost?.items?.map((post) => (
            <div className="apartman__card" key={post.sys.id}>

              <Link to={`/apartmanDetails/${post.sys.id}`}>

              <img
                src={post.fields.productPhoto.fields.file.url}
                alt={post.fields.title}
                className="apartman__img"
              />
              <h2 className="apartman__title">{post.fields.productTitle}</h2>
              <p className="apartman__subtitle">
                <FaBed className="apartman__subtitle-icon" />{" "}
                {post.fields.productDescription}
              </p>
              
              </Link>
              
              
              {/* <img
                src={post.fields.productImage[0].fields.file.url}
                alt="slika"
                className="apartman__img"
              />
              <img
                src={post.fields.productImage[1].fields.file.url}
                alt="slika"
                className="apartman__img"
              /> */}

             
             
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ApartmanList;
