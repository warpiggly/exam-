import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-circle">N</div>
        <h2>NombreApp</h2>
      </div>

      <ul className="sidebar-menu">
        <li className="active">Dashboard</li>
        <li>Perfil</li>
        <li>Configuración</li>
      </ul>

      <button className="logout-btn">Cerrar Sesión</button>
    </div>
  );
}

export default Sidebar;
