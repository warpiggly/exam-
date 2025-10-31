import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Mi Aplicacion </h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li><a href="">Inicio de sesion</a></li>
            <li><a className="boton-registro" href="">Registrarse</a></li>
            <a href="">Homero</a>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
