import React from 'react'

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Chef.css';
const Chef = () => {
  return (
    <div className=' app__bg size__screen section__padding'>
      <div className='app__wrapper_img-modify app__wrapper_img-reverse-modify'>
        <img src={images.chef} alt="chef" />
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word" className=' align-center' />
        <h1 className='headtext__cormorant title_chef'>What we believe in</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Crediamo fermamente nella forza della vera cucina tradizionale cinese.</p>
          </div>

          <p className='p__opensans'>Crediamo che i sapori autentici e la cura nella preparazione dei piatti siano fondamentali per un'esperienza culinaria completa.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Nome Chef</p>
          <p className='p__opensans'>Chef & Founder</p>
          {/* Posible firma del chef con un img.. */}
          <img src={images.sign} alt="sign" />
        </div>

      </div>

    </div>
  )
}

export default Chef

