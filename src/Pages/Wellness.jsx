import React from 'react'
import Bazen from '../components/Bazen'
import Sauna from '../components/Sauna'
import Jakuzzi from '../components/Jakuzzi'
import Teretana from '../components/Teretana'
import Masaza from '../components/Masaza'

const Wellness = () => {
  return (
    <section className='section wellness'>
      <h2 className="section__title">Apartmani u strogom centru Zlatibora</h2>
      <span className="section__subtitle">Veliki izbor apartmana na Zlatiboru. Prijatan ambijent i moderan dizajn.</span>
      <Bazen/>
      <Sauna/>
      <Jakuzzi/>
      <Teretana/>
      <Masaza/>
    </section>
  )
}

export default Wellness
