import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="book-banner">
       <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Rezervišite apartman tako što ćete nas kontaktirati</h2>
            <Link to="tel:+381605241060">
              <span>
                  <AiFillPhone/>
                <h3>(060) 5241060</h3>
              </span>
            </Link>
            
          </div>
        </div>
    </section>
  )
}

export default Banner
