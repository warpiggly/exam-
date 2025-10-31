import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Mi Aplicacion</h1>
        <nav className="header-nav">
          <ul className="nav-list">
             <li><a className="enlace-header" href="">Inicio de sesion</a></li>
            <li><a className="boton-registro" href="/register">Registrarse</a></li>
            <li><a className="enlace-header" href="/login">Login</a></li>
            <li><a className="enlace-header" href="/homero">Homero</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
