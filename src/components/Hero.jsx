import React, { useEffect, useState } from 'react';
import './Hero.css';
import Particles from './Particles';

function Hero() {
  const handleExploreClick = () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/', '_blank');
  };

  return (
    <section className="hero">
      <Particles />
      
      <div className="hero-model">
        <div className="floating-shape"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-h1">ÁREAS 3D</h1>
        <p className="hero-sub">Galería de modelos y espacios tridimensionales</p>
        
        <div className="hero-btns">
          <button className="btn-primary" onClick={handleExploreClick}>
            Explorar Galería
          </button>
          <button className="btn-secondary" onClick={handleWhatsAppClick}>
            Más Información
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
