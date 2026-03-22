import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              ÁREAS <span>3D</span>
            </div>
            <p className="footer-desc">
              Galería de modelos y espacios tridimensionales de última generación.
            </p>
          </div>
          
          <div>
            <h4 className="footer-title">Enlaces</h4>
            <ul className="footer-links">
              <li><a href="#gallery">Galería</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#about">Sobre Nosotros</a></li>
              <li><a href="#privacy">Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contacto</h4>
            <div className="footer-contact">
              <p>📱 <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
              <p>📧 <a href="mailto:info@areas3d.com">info@areas3d.com</a></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Áreas 3D. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con React & Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
