import './mainpage.css'
import  { useState } from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


function MainPage() {

  const [text] = useTypewriter ({
     words : ['Intuitiva','Fluida','Asistente'],
     loop:{},
     typeSpeed:120,
  });

  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(!isPressed);
  };



  return (
    <div className='mainpage'>
      <div className="content-main">
      <motion.img
          initial={{ x: -100 }} // Posición inicial fuera del lado izquierdo
          animate={{ x: 0 }} // Posición final
          transition={{ duration: 2 }} // Duración de la animación en segundos
          className="imgestu"
          src="/img/estudiante.png"
          alt=""
        />
        <motion.div
            whileHover={{ 
              scale: 1.1,
              rotate: [0, 10, -10, 0], 
              color: "white", 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }} 
            className="mainchild"
            >
          <div className="textup">
            <h1> Hola 👋 ! Bienvenido a  UMNAV </h1>
            <h5> Univesidad Mariana Navigation</h5>
          <p className='textoMainp'>
                Es la guia&nbsp;   
                <span className='letrasMain'>
                   {text}
                </span>
                <span>
                    <Cursor/>
                </span>
                para que puedas navegar por el campus y encontrar todo lo necesario.
              </p>
            
          </div>
          <div className="logou">
          <img src="/img/Logo-Universidad-Mariana.png" alt="" />
          </div>
          <Link to="/home" className="motion-button">
          <motion.button
            className={`nav-button ${isPressed ? "pressed" : ""}`}
            onClick={handleClick}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1 }}
          >
            {isPressed ? "" : "Navegar"}
            {isPressed && (
              <motion.img
                className='newmap'
                src="/img/map.png"
                alt="Mapa"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              />
            )}
          </motion.button>
        </Link>

          </motion.div>
      </div>
    </div>
  )
}

export default MainPage