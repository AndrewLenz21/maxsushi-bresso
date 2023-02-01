import React from 'react'
import { Link } from 'react-router-dom';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  return (
    <div className='app__bg app__wrapper-modify section__padding' id='contact'>

      <div className='app__wrapper_info' style={{marginTop:'0'}}>
        <SubHeading title='Contact'/>
        <h1 className='headtext__cormorant' style={{marginBootom: '3rem'}}>Find Us</h1>
        <div className='app__wrapper-content' style={{marginBottom:'2rem'}}>
          <p className='p__opensans'>Via Vittorio Veneto 88, 20091 Bresso MI</p>
          <p className='p__cormorant' style={{color: '#DCCA87'}}>Orario: LUNEDÌ - DOMENICA</p>
          <p className='p__opensans'>11:30 - 15:00</p>
          <p className='p__opensans'>18:00 - 22:00</p>
        </div>
        <Link to={'/contact'}><button className='custom__button' style={{marginBottom: '2rem'}}>Vieni a Trovarci</button></Link>
      </div>

      <div className='app__wrapper_img-modify'>
        <img src={images.findus} alt="findus" />
      </div>

    </div>
  )
}

export default FindUs
