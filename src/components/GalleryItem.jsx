import React from 'react';
import './Gallery.css';

function GalleryItem({ item, onClick }) {
  return (
    <div className="gallery-item" onClick={onClick}>
      <img src={item.image} alt={item.title} className="gallery-thumb" />
      
      <div className="gallery-overlay">
        <span className="gallery-overlay-title">{item.title}</span>
        <button className="gallery-overlay-btn">Ver Detalles</button>
      </div>
      
      <div className="gallery-caption">
        <div className="gallery-caption-name">{item.title}</div>
        <div className="gallery-caption-cat">{item.category.toUpperCase()}</div>
      </div>
    </div>
  );
}

export default GalleryItem;
