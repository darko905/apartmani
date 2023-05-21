import React from 'react'
import { AiFillPhone } from 'react-icons/ai'

const Banner = () => {
  return (
    <section className="book-banner">
       <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Rezervišite apartman tako što ćete nas kontaktirati</h2>
            <span>
                <AiFillPhone/>
              <h3>(060) 5241060</h3>
            </span>
          </div>
        </div>
    </section>
  )
}

export default Banner
