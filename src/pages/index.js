import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Home() {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/about'); 
  };

  return (
    <Layout title="Inicio">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          fontSize: '20px',
          backgroundImage: 'url(/img/whatsapp_background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div style={{ textAlign: 'center', marginRight: '100px', color: 'black' }}>
          <h1>Wer4U, más cerca de ti</h1>
          <button
            onClick={handleButtonClick}
            className="button"
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '40px', // Añade un margen superior para separarlo del texto
            }}
          >
            Conócenos 😊
          </button>
        </div>
        <div>
          <video
            width="600"
            height="450"
            autoPlay
            loop
            controls
          >
            <source src="/videos/promo.mp4" type="video/mp4" />
            Tú navegador no soporta esta funcionalidad
          </video>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}



