import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import { Link } from 'react-router-dom';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  // Funcion que oculta el menu
  const hideMenu = () => {
    const menuOverlay = document.querySelector(".slide-bottom");
    menuOverlay.classList.remove("slide-bottom");
    menuOverlay.classList.add("slide-bottom-close");
    setTimeout(() => {
      setToggleMenu(false);
    }, 500);
  };



  return (
    <nav className='app__navbar '>
      <div className="app__navbar-logo">
        <Link to="/"><img src={images.maxSushi} alt='app logo' /></Link>
      </div>

      <ul className='app__navbar-links'>
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans">
          <Link to="/about">About</Link>
        </li>
        <li className="p__opensans">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="p__opensans">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Seccion posible a ELIMINAR */}
      {/* <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div> */}

      {/* For Small Screen */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className={`app__navbar-smallscreen_overlay flex__center slide-bottom`}>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={hideMenu} />
            <ul className='app__navbar-smallscreen-links'>
              <li className="p__opensans">
                <Link to="/">Home</Link>
              </li>
              <li className="p__opensans">
                <Link to="/about">About</Link>
              </li>
              <li className="p__opensans">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="p__opensans">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}

        <div />
      </div>
    </nav>
  )
}

export default Navbar;
