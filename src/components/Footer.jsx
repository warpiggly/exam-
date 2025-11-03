import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="linea-custom1"></div>
        <div className="footer-container">
          <div className="footer-section">
            <div className="social-links">
              <a href="#">Terminos de servicio</a>
              <a href="#">Politica de Privacidad</a>
              <a href="#">Contacto</a>
            </div>
          </div>
        </div>
      

      <p className="sitio_web">&copy; 2025 Mi Aplicacion. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
