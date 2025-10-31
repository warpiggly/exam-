import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@misitio.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Dirección: Calle Principal #123</p>
        </div>

        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
