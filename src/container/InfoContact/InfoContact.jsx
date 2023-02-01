import React, { useState } from 'react'


import { Link } from 'react-router-dom';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './InfoContact.css';

const InfoContact = () => {

    return (
        <>
            <div className='app__bg app__wrapper section__padding' id='contact' >
                <div className='app__wrapper_info'>
                    <SubHeading title='Indirizzo' />
                    <h1 className='headtext__cormorant' style={{ marginBootom: '3rem' }}>Vieni a Trovarci</h1>
                    <div className='app__wrapper-content' style={{ marginBottom: '2rem' }}>
                        <p className='p__opensans'>Via Vittorio Veneto 88, 20091 Bresso MI</p>
                        <p className='p__cormorant' style={{ color: '#DCCA87' }}>Orario: LUNEDÌ - DOMENICA</p>
                        <p className='p__opensans'>11:30 - 15:00</p>
                        <p className='p__opensans'>18:00 - 22:00</p>
                    </div>
                    <button className='custom__button' style={{ marginBottom: '2rem' }} onClick={() => window.open('https://bit.ly/MaxSushiMap')}>Maps</button>
                </div>

                <div className='app__wrapper_img-modify'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d349.349373225543!2d9.193174!3d45.534331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bf228d94c10f%3A0x3bd1fc4464a3a8d!2sMax%20Sushi!5e0!3m2!1sen!2sit!4v1675189876591!5m2!1sen!2sit" 
                    width="600" 
                    height="450" 
                    style={{ border: '0',}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='app__bg app__wrapper section__padding' id='contact' >
                <div className='app__wrapper_info' >
                    <SubHeading title='Contact' />
                    <h1 className='headtext__cormorant' style={{ marginBootom: '3rem' }}>Contattaci</h1>
                    <div className='app__wrapper-content' style={{ marginBottom: '2rem' }}>
                        <p className='p__opensans'>388 9989 153</p>
                        <p className='p__cormorant' style={{ color: '#DCCA87' }}>Orario: LUNEDÌ - DOMENICA</p>
                        <p className='p__opensans'>11:30 - 15:00</p>
                        <p className='p__opensans'>18:00 - 22:00</p>
                    </div>
                    <button className='custom__button call__button' style={{ marginBottom: '2rem' }} onClick={() => window.open('tel:3889989153')}>Chiama</button>
                </div>

                <div className='app__wrapper_img-modify'>
                    <img src={images.findus} alt="findus" />
                </div>
            </div>
        </>
    )
}

export default InfoContact