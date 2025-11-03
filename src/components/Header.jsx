import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title1">Mi Aplicacion</h1>
        <nav className="header-nav">
          <ul className="nav-list">
             <li><a className="enlace-header" href="/login">Inicio de sesion</a></li>
            <li><a className="boton-registro" href="/register">Registrarse</a></li>
            <div className='easter_egg'>
            <li><a className="enlace-header-homero" href="/homero">Homero</a></li>
            </div>
          </ul>
        </nav>
      </div>
      <div className="linea-custom2"></div>
    </header>
  )
}

export default Header
