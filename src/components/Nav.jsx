import React from 'react';
import './Nav.css';
import LogoCube from './LogoCube';

function Nav() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/', '_blank');
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <LogoCube />
        <span>ÁREAS 3D</span>
      </div>
      
      <ul className="nav-links">
        <li><a href="#gallery">Galería</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#about">Sobre Nosotros</a></li>
      </ul>
      
      <button className="nav-wa" onClick={handleWhatsAppClick}>
        WhatsApp
      </button>
    </nav>
  );
}

export default Nav;
