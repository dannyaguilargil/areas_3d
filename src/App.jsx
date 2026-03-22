import React from 'react';
import './styles/globals.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
