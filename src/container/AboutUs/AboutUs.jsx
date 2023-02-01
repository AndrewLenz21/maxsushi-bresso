import React from 'react';

import { Link } from 'react-router-dom';

import {images} from '../../constants';
import  './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-overlay flex__center">
        <img src={images.letterM} alt="g letter" />
      </div>

      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>Chi Siamo</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__image' />
          <p className="p__opensans">Siamo un piccolo locale di cibo cinese che ha appena aperto i battenti. Siamo orgogliosi di offrire ai nostri clienti l'autentica esperienza culinaria cinese, con sapori genuini e un'atmosfera accogliente. Offriamo una vasta selezione di piatti tradizionali per soddisfare tutti i nostri clienti. Vieni a trovarci e lasciati stupire dalla cucina cinese ricca di sapori. Ti aspettiamo!</p>
          <Link to="/menu"><button type='button' className='custom__button'>Il nostro Menu</button></Link>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Il nostro Obiettivo</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__image' />
          <p className="p__opensans">Nel nostro ristorante cinese, ci impegniamo a offrire un'esperienza culinaria autentica e di alta qualità a ogni nostro cliente. Cerchiamo di combinare la tradizione culinaria cinese con un tocco innovativo per creare un'esperienza unica e soddisfacente. Il nostro obiettivo è essere riconosciuti come uno dei migliori ristoranti cinesi in città, offrendo un'esperienza culinaria indimenticabile a ogni nostro cliente.</p>
          {/* <button type='button' className='custom__button'>Know More</button> */}
        </div>

      </div>
    </div>
  )
}

export default AboutUs

