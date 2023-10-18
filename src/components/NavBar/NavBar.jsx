import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de importar el archivo de estilos CSS

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
      <Link to="/" className="logo">
        <img src="/img/logofinal.png" alt="Logo" className="logo-img" />
       <p>UMNAV</p>
        </Link>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/home" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/map" className="nav-link">Explorar</Link>
          </li>
          <li className="nav-item">
            <Link to="/myApp" className="nav-link">App</Link>
          </li>
          <li className="nav-item">
            <Link to="/owner" className="nav-link">Owner</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
