

import React from 'react';
import './Login.css';

function LoginForm() {
  return (
    <div className="login-container">
        <div className="login-header">
        <h2>Iniciar Sesión</h2>
        <p>Ingresa tus credenciales para continuar</p>
        </div>

      <div className="login-box">
        
        
        <form className="login-form">
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              placeholder="ejemplo@correo.com"
              required 
            />
          </div>
          
          <div className="password-section">
            <label htmlFor="password">Contraseña</label>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <input 
            type="password" 
            id="password" 
            placeholder="Tu contraseña"
            required 
          />
          
          <button type="submit">Iniciar Sesión</button>
          
          
        </form>
      </div>
          <p className="register-link">
            ¿No tienes una cuenta? <a href="#">Regístrate aquí</a>
          </p>
    </div>
  );
}

export default LoginForm;
