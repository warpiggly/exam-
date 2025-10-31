import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Mi Sitio Web</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/homero">Homero</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
