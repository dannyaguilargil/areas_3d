import React, { useState, useMemo } from 'react';
import './Gallery.css';
import GalleryItem from './GalleryItem';
import Modal from './Modal';
import { galleryItems, categories } from '../data/galleryData';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'todos') {
      return galleryItems;
    }
    return galleryItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="gallery-header">
          <span className="section-tag">Colección</span>
          <h2 className="section-title">Galería 3D</h2>
          <p className="section-sub">Explora nuestra colección de modelos y espacios tridimensionales</p>
        </div>

        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <GalleryItem
              key={item.id}
              item={item}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </section>

      {selectedItem && (
        <Modal item={selectedItem} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Gallery;
