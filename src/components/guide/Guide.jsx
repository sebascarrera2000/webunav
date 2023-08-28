import { useState } from "react";
import Navbar from "../NavBar/NavBar";
import "./guide.css";

function Guide() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(100);
  const maxZoom = 200;

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleZoomIn = () => {
    if (zoomLevel < maxZoom) {
      setZoomLevel((prevZoom) => prevZoom + 10);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 10) {
      setZoomLevel((prevZoom) => Math.max(prevZoom - 10, 10));
    }
  };
  return (
    <div className="interactive-map">
      <Navbar></Navbar>
      <div className="map-container">
        <img src="map" alt="" />
        <div className="search-bars">
              <div className="search-bar">
                <input type="text" placeholder="Buscar destino de llegada" />
                <button>Buscar</button>
                <button><i className="fa-solid fa-qrcode"></i></button>
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Buscar destino de ida" />
                <button>Buscar</button>
              </div>
            </div>
      </div>
      <div className="content">
        {selectedOption === "image" && (
          <div className="route-image-container">
          <img
            src="/img/rutas/e-mi/E-MI.webp"
            alt="Ruta"
            className="route-image"
            style={{
              transform: `scale(${zoomLevel / 100})`,
              maxWidth: "100%",
            }}
          />
          <div className="zoom-buttons">
            <button onClick={handleZoomIn}>+</button>
            <button onClick={handleZoomOut}>-</button>
          </div>
        </div>
        )}
        {selectedOption === "ar" && (
          <iframe
            src="URL-del-contenido-AR"
            title="AR Content"
            width="80%"
            height="600"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        {selectedOption === "video" && (
          <div className="route-video">
              <video controls width="80%">
                <source src="/img/rutas/e-mi/E-MI.mp4" type="video/mp4" />
                Tu navegador no admite el formato de video.
              </video>
          </div>
        )}
      </div>
      <div className="downbar">
        <div className="options">
          <div
            className={`option ${selectedOption === "image" ? "active" : ""}`}
            onClick={() => handleOptionClick("image")}
          >
            <p>Mapa</p>
          </div>
          <div
            className={`option ${selectedOption === "ar" ? "active" : ""}`}
            onClick={() => handleOptionClick("ar")}
          >
            <p>AR</p>
          </div>
          <div
            className={`option ${selectedOption === "video" ? "active" : ""}`}
            onClick={() => handleOptionClick("video")}
          >
            <p>Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
