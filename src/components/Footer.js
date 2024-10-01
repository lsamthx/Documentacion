import React from 'react';
import ImageCarousel from './ImageCarousel';

function Footer() {
  return (
    <footer
      style={{
        padding: '20px',
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <ImageCarousel />
      </div>
      <div>&copy; 2024 Tu Sitio Web. Todos los derechos reservados.</div>
    </footer>
  );
}

export default Footer;
