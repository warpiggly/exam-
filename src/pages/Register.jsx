import React from "react";
import "./Register.css";

function RegisterForm() {
  return (
    <div className="rege-container">
      <div className="rege-header">
        <h2 className="rege-title">Crea tu Cuenta</h2>
        <p className="rege-subtitle">
          Regístrate para empezar a usar la aplicación.
        </p>
      </div>
      <div className="rege-box">
        <form className="rege-form">
          <label className="rege-label">Nombre</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="rege-input"
          />

          <label className="rege-label">Correo Electrónico</label>
          <input
            type="email"
            placeholder="tucorreo@ejemplo.com"
            className="rege-input"
          />

          <label className="rege-label">Contraseña</label>
          <input
            type="password"
            placeholder="Crea una contraseña segura"
            className="rege-input"
          />

          <label className="rege-label">Confirmar Contraseña</label>
          <input
            type="password"
            placeholder="Vuelve a escribir la contraseña"
            className="rege-input"
          />

          <button type="button" className="rege-button">
            Registrarse
          </button>
        </form>

        
      </div>
      <div className="rege-footer">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="reje-start">
            Inicia sesión
          </a>
        </div>
    </div>
  );
}

export default RegisterForm;
