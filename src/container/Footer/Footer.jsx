import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  return (
    <div className='app__footer section__padding' style={{paddingTop: '0'}}>

      <div className='app__footer-links'>

        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans' style={{ textAlign: 'center' }}>Via Vittorio Veneto 88, 20091 Bresso MI</p>
          <p className='p__opensans' style={{ textAlign: 'center' }}>388 9989 153</p>
          {/* Numero de VIA ROMA */}
          {/* <p className='p__opensans' style={{textAlign: 'center'}}>377 0836 307</p> */}
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.maxSushi} alt="footer_logo"/>
          <p className='p__opensans' style={{ textAlign: 'center' }}>Il gusto autentico della Cina</p>
          <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: '15px' }} />
          {/* ICONS */}
          <div className='app__footer-links_icons'>
            <FiFacebook onClick={()=> window.open('https://www.facebook.com/maxsushibresso/')}/>
            <FiInstagram onClick={()=> window.open('https://www.instagram.com/maxsushi_bresso/')}/>
          </div>
        </div>
        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans' style={{ textAlign: 'center' }}>Orario: LUNEDÌ - DOMENICA</p>
          <p className='p__opensans' style={{ textAlign: 'center' }}>11:30 - 15:00</p>
          <p className='p__opensans' style={{ textAlign: 'center' }}>18:00 - 22:00</p>
        </div>

      </div>
      <div className='footer__copyright'>
        <p className='p__opensans' style={{ textAlign: 'center' }}>2023 Max Sushi. All Rights Reserved --<Link to='/privacy-policy'> Privacy Policy</Link></p>
      </div>

    </div>
  )
}

export default Footer
