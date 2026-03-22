import React, { useEffect } from 'react';
import './Gallery.css';

function Modal({ item, onClose }) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  const handleWhatsAppClick = () => {
    const message = `Hola, estoy interesado en: ${item.title}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="modal-overlay open" onClick={handleBackdropClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={item.image} alt={item.title} className="modal-img" />
        
        <div className="modal-body">
          <h3 className="modal-name">{item.title}</h3>
          <span className="modal-cat">{item.category.toUpperCase()}</span>
          <p className="modal-desc">{item.description}</p>
          <button className="modal-wa" onClick={handleWhatsAppClick}>
            Contactar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
