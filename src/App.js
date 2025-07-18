import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
// import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      {/* <Gallery /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
