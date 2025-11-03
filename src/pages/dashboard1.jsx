import React from 'react';
import Sidebar from '../components/sidebar';
import './dashboard1.css';

function dashboard1() {
  return (
    <div className="dashboard-container1">
      <Sidebar />

      <div className="main-content1">
        <div className="dashboard-header1">
          <h2>Bienvenido de nuevo</h2>
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            alt="User"
            className="profile-img"
          />
        </div>
        <div className="linea-custom"></div>

        <div className="dashboard-body">
          <h1 className='tittle1'>Panel de Control</h1>
          <p>Un resumen de la actividad de tu cuenta.</p>

          <div className="stats-grid">
            <div className="stat-card">
              <p>Proyectos Activos</p>
              <h3>12</h3>
            </div>
            <div className="stat-card">
              <p>Tareas Completadas</p>
              <h3>86</h3>
            </div>
            <div className="stat-card">
              <p>Alertas</p>
              <h3>3</h3>
            </div>
            <div className="stat-card">
              <p>Miembros del equipo</p>
              <h3>8</h3>
            </div>
          </div>

          <div className="content-grid">
            <div className="notifications">
              <h2>Notificaciones</h2>
              <div className="notif-item">
                <h4>Actualización del sistema programada</h4>
                <p>El mantenimiento se realizará el 25 de Diciembre a las 10 PM.</p>
              </div>
              <div className="linea-custom"></div>
              <div className="notif-item">
                <h4>Nueva factura disponible</h4>
                <p>Tu factura de Noviembre ya está lista para descargar.</p>
              </div>
              <div className="linea-custom"></div>
              <div className="notif-item">
                <h4>Recordatorio de reunión</h4>
                <p>Tienes una reunión de equipo hoy a las 3 PM.</p>
              </div>
              <div className="linea-custom"></div>
              <a href="#">Ver todas las notificaciones</a>
            </div>

            <div className="shortcuts">
              <h2>Accesos Directos</h2>
              <button className="btn-primary">Crear Nuevo Proyecto</button>
              <button className="btn-secondary">Añadir Tarea</button>
              <button className="btn-secondary">Invitar Miembro</button>
              <button className="btn-secondary">Generar Reporte</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard1;

