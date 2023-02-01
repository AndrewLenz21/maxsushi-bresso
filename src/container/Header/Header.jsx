import React from 'react';
import { SubHeading } from '../../components';

import { Link } from 'react-router-dom';

import {images} from '../../constants';
import './Header.css';

const Header = () => {

  return(
    <div className='app__header app__wrapper section__padding' id='home' >
      <div className="app__wrapper_info">
        <SubHeading title="Max Sushi Take Away"/>
        <h1 className="app__header-h1">Scopri la cucina cinese</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>La vera essenza della cucina cinese a portata di mano</p>
        <Link to="/menu"><button type='button' className='custom__button'>Il nostro Menu</button></Link>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.headerpng} alt="header img" />
      </div>

    </div>
  )
};

export default Header;


