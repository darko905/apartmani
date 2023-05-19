import React, { useState } from 'react'
import { FaqData } from "./FaqData";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Logo from '../image/Logo/Logo.png';

const Faq = () => {
    const [selected, setSelected] = useState(null);

    const toggle=(i)=>{
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }
  return (
    <section className='section faq'>
        <div className='container'>

        
      <h2 className="section__title"><img src={Logo} alt="Logo" /></h2>
      <span className="section__subtitle">Pitanja i odgovori</span>
      <p className="section__description">
      Često postavljana pitanja o procesu rezervacije apartmana na našoj veb stranici: odgovori na uobičajene nedoumice i upite.
      </p>
      <div className="all-questions">
        {FaqData.map((item, i) => {
          return (
            <div className="faq-box" key={i} onClick={()=> toggle(i)}>
              <h2 className="faq-box__question">
                {item.qustion} 
                {selected === i ? <IoIosArrowUp className="faq-box__question-icon"/>: <IoIosArrowDown className="faq-box__question-icon"/> } 
                </h2>

              <p className={selected === i ? 'faq-box__answer-show' : 'faq-box__answer' }>{item.answer}</p>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  )
}

export default Faq
