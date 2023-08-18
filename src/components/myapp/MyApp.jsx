import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../NavBar/NavBar';
import './myapp.css';

function MyApp() {
  const [imageIndex, setImageIndex] = useState(0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const images = [
    '/img/app1.png',
    '/img/app2.png'
  ];

  const imagesinstruccion = [
    {
      src: '/img/instru1.webp',
      description: 'Apenas la instales te aparecera este mensaje, dale abierto ! Tranquilo no tiene ningun virus 👌.'
    },
    {
      src: '/img/instru2.webp',
      description: 'Procedemos insatalarla 📥 '
    },    
    {
      src: '/img/instru3.webp',
      description: 'Recuerda dar permisos de navegacion y camara ( tranquilo no quedara guaradado nada por tu 🔐 ) '
     }
  ];

  const nextImagedisplay = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imagesinstruccion.length);
  };
  
  const prevImagedisplay = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % imagesinstruccion.length);
  };
  
  const nextImage = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  return (
    <div className="myapp">
      <div className="backgroundm"></div>
      <Navbar></Navbar>
      <div className="myAppS">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="content-myapp"
        >
          <h1 className="titleh">UMNAV</h1>
            <p className="descriptiona">
            ¡Descubre fácilmente las entradas a edificios en la Universidad Mariana con nuestra nueva app! Olvídate de la confusión al llegar a un lugar nuevo. Simplemente ingresa el nombre del edificio o selecciona en el mapa 2D y te guiaremos directo a la entrada. ¡Y eso no es todo! También ofrecemos navegación en tiempo real mediante Realidad Aumentada (AR), mostrando flechas y direcciones en la cámara de tu dispositivo. ¡No más búsquedas perdidas, solo direcciones claras a donde necesitas ir en tu campus!
            </p>
            <a
                href="/aplicacion/UMNAV.apk"
                download="Aplicacion"
                className="download-button"
              >
                Descargar
              </a>
            <h3 className='instrutitulo'>Instrucciones</h3>
            <div className="image-gallery">
                    <div className="image-containera">
                        <img
                        src={imagesinstruccion[currentImageIndex].src}
                        alt={`Imagen ${currentImageIndex + 1}`}
                        className="gallery-image"
                        />
                    </div>
                    <div className="description-container">
                        <p className="gallery-description">
                        {imagesinstruccion[currentImageIndex].description}
                        </p>
                    </div>
                    <div className="gallery-arrows">
                        <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="arrow-button"
                        onClick={prevImagedisplay}
                        >
                        {"<"}
                        </motion.button>
                        <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="arrow-button"
                        onClick={nextImagedisplay}
                        >
                        {">"}
                        </motion.button>
                    </div>
</div>
        </motion.div>
        <div className="image-container">
          Dame Click ! 😉
          <motion.img
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="university-image"
            src={images[imageIndex]}
            alt="Universidad Mariana"
            onClick={nextImage}
          />
        </div>
      </div>
    </div>
  )
}

export default MyApp;


