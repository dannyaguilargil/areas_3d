import React from 'react';
import './CTA.css';

function CTA() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/c/573171674712', '_blank');
  };

  return (
    <section id="contacto" className="wa-cta">
      <h2>¿Necesitas un proyecto personalizado?</h2>
      <p>Contáctanos para discutir tus necesidades de modelado y renderizado 3D. Nuestro equipo está listo para ayudarte.</p>
      <button className="wa-big-btn" onClick={handleWhatsAppClick}>
        <span>📱</span>
        Enviar Mensaje por WhatsApp
      </button>
      <p className="wa-small">Respuesta rápida garantizada en horario laboral</p>
    </section>
  );
}

export default CTA;
