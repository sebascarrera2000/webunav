import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import buildingData from "./data.json";
import "./buildings.css";
import Navbar from "../NavBar/NavBar";

function BuildingFloor({ floor, onBack }) {
  return (
    <motion.section
      className="divi3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      
      <h1>Bienvenido , al piso numero {floor.name}</h1>
      <p>{floor.rooms.join(", ")}</p>
      <button title="Back" onClick={onBack}>
        B
      </button>
    </motion.section>
  );
}

function MI() {
  const [currentFloor, setCurrentFloor] = useState(null);

  const buildingName = "María Inmaculada";

  const handleFloorClick = (floor) => {
    setCurrentFloor(floor);
  };

  const handleBackClick = () => {
    setCurrentFloor(null);
  };

  const building = buildingData[buildingName];

  return (
  <div className="build">
    <Navbar></Navbar>
    <div className="buildcontent">
          <AnimatePresence>
            {currentFloor ? (
              <BuildingFloor floor={currentFloor} onBack={handleBackClick} />
            ) : (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="divi1">
                <h1>Bienvenido al Edificio María Inmaculada</h1>
                  <p>Escoge un piso del que deseas saber que contiene</p>
                </div>
                <div className="pannel">
                  {building.floors.map((floor, index) => (
                    <motion.button
                      key={index}
                      title={`Go to ${floor.name}`}
                      onClick={() => handleFloorClick(floor)}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {floor.name}
                    </motion.button>
                  ))}
                </div>
              </motion.section>
            )}
      </AnimatePresence>
      </div>
      </div>
  );
}

export default MI;
