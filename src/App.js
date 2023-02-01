import React from 'react';

// Import Router
import { Link, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import InfoContact from './container/InfoContact/InfoContact';

// Funcion Scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SpecialMenu />
      <Chef />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
};
const About = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <FindUs />
      <Footer />
    </div>
  )
};
const Menu = () => {
  return (
    <div>
      <Navbar />
      <SpecialMenu />
      <Gallery />
      <Footer />
    </div>
  )
};
const Contact = () => {
  return (
    <div>
      <Navbar />
      <InfoContact/>
      <Footer />
    </div>
  )
};


function App() {
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
};

export default App;
