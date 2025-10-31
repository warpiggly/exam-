import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Mi Sitio Web</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li><a href="/">Inicio</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/Register">Registrarse</a></li>
            <li><a href="/Register">Contacto</a></li>
            <li><a href="/homero">Homero</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
