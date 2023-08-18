import { motion, AnimatePresence } from 'framer-motion';
import  {useState} from 'react';
import { Link } from "react-router-dom";
import './Mappage.css';
import Navbar from '../NavBar/NavBar';
import { Bg } from './bg';

const buildingInfo = {
  'San Jose': {
    image: '/img/sanjose.PNG',
    link:'sanjose',
  },
  'Jesus de Nazareth': {
    image: '/img/jesus.webp',
    link:'JesusDeNazareth',
  },
  'San Buenaventura': {
    image: '/img/buenaventura.PNG',
    link:'SanBuenaventura',
  },
  'San Francisco': {
    image: '/img/sf.PNG',
    link:'SanFransisco',
  },
  'Santa Clara': {
    image: '/img/santaclara.PNG',
    link:'SantaClara',
  },
  'Maria Inmaculada': {
    image: '/img/mi.PNG',
    link:'MariaImaculada',
  },
  'Madre Caridad': {
    image: '/img/Madre caridad.PNG',
    link:'MadreCaridad',
  },
};


function MapPage() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const realMapVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 2, delay: 4 } },
  };
  
  const handleBuildingClick = (buildingName) => {
    setSelectedBuilding(buildingName === selectedBuilding ? null : buildingName);
  };

  return (
    <div className="map-page">
      <Navbar></Navbar>
      <Bg />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="map-content"
      >
        <div className="text-overlay">
          <p>¡Explora el mapa interactivo!</p>
        </div>
        <motion.div
          className="edificios"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
        >
          {Object.keys(buildingInfo).map((buildingName) => (
             <motion.div
             key={buildingName}
             className="building"
             whileHover={{ scale: 1.1, y: -10 }}
            >
              <div
                className="btn btn__primary"
                onClick={() => handleBuildingClick(buildingName)}
              >
                <p>{buildingName}</p>
                <img src="/img/JDN.webp" alt="" className='buildingimg' />
              </div>
              <AnimatePresence>
              {selectedBuilding === buildingName && (
                  <motion.div
                    className="card"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <button
                      className="close-button"
                      onClick={() => setSelectedBuilding(null)}
                    >
                    <i className="fa-solid fa-xmark"></i>
                    </button>
                    <img src={buildingInfo[buildingName].image} alt={buildingName} />
                    <div className="description">
                      <h1>{buildingName}</h1>
                      <Link to={`/${buildingInfo[buildingName].link}`}><button><i className='fa-solid fa-location-arrow'></i></button></Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </motion.div>
          ))}
           
        </motion.div>
        <motion.img
          src="/img/mapreal.png"
          alt=""
          variants={realMapVariants}
          initial="hidden"
          animate="visible"
          className="realmap"
        />
      </motion.div>
    </div>
  );
}

export default MapPage;