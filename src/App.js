import React from 'react';

// Import Router
import { Link, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import InfoContact from './container/InfoContact/InfoContact';
import AllMenu from './container/AllMenu/AllMenu';
import Privacy from './container/PrivacyPolicy/Privacy';

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
      <AllMenu />
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
const PrivacyPolicy =() => {
  return (
    <div>
      <Navbar />
      <Privacy/>
      <Footer/>
    </div>
  )
}

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
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      </Routes>
    </div>
  )
};

export default App;
