import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
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
      <Gallery />
      <About />
      <Contact />
    </>
  );
}

export default App;
