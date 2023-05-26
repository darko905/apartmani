import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { FaBed } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const ApartmanList = () => {
  const [apartmanPost, setApartmanPost] = useState([]);
  const [isPening, setisPending] = useState(true)

  const client = createClient({
    space: "urkp5t6shmtm",
    accessToken: "3oWK1yJTs0NXjUbuEmzeZeNY9RvAjjlOq6a5kGEekbM",
  });

  useEffect(() => {
    setTimeout(()=>{
      const getAllEntries = async () => {
        try {
          await client.getEntries().then((entries) => {
            console.log(entries);
            setApartmanPost(entries);
            setisPending(false)
          });
        } catch (error) {
          console.log(error);
        }
      };
  
      getAllEntries();
    }, 1000)
    
  }, []);
  return (
    <>

      
      <section className="section" id="apartman">
      <h2 className="section__title">Apartmani u strogom centru Zlatibora</h2>
      <span className="section__subtitle">Veliki izbor apartmana na Zlatiboru. Prijatan ambijent i moderan dizajn.</span>
      {isPening && <span className="loader"></span>}
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
              <div className="apartman__button">
                <button className="button button--flex">Saznajte više <BsArrowRightShort/></button>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ApartmanList;
