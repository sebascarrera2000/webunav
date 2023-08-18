import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Asegúrate de importar el archivo de estilos CSS
import Navbar from '../NavBar/NavBar';


function HomePage() {
  return (

    <div className="homepage">
          <div className="background"></div>
      <Navbar></Navbar>
          <div className="homepageS">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="content-home"
      >
        <h1 className="titleh">Bienvenido a la Universidad Mariana</h1>
        <p className="descriptionh">
          Descubre nuestro campus y todas sus instalaciones de manera interactiva.
        </p>
        <Link to="/map">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="explore-button"
          >
            Explorar
          </motion.button>
        </Link>
      </motion.div>
      <div className="image-container">
        <motion.img
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="university-image"
          src="/img/banner1.jpg"
          alt="Universidad Mariana"
        />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
