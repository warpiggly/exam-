# Proyecto Web - Los Simpsons Fan Page

## 📝 Descripción
Proyecto web interactivo construido con React y Vite. La app incluye una página principal, una página especial dedicada a Homero Simpson y una interfaz tipo dashboard con sidebar. Implementa animaciones, audio, navegación con React Router y componentes reutilizables.

## 🆕 Qué hay de nuevo (resumen de cambios recientes)
- Añadido componente `Sidebar` (con estilos personalizados).
- Página de `Dashboard` (`dashboard1.jsx` / `dashboard1.css`) con layout y tarjetas estadísticas.
- Login con redirección a `/dashboard1` al enviar el formulario (uso de `useNavigate`).
- Ajustes de estilos globales y componentes:
  - `Header` ahora usa la fuente Roboto correctamente.
  - `Footer`: línea separadora centrada (`.linea-custom1`).
  - `sidebar`: reducida la separación entre logo y menú.
  - `.profile-img` reducido a 40×40 px con `object-fit: cover`.
  - Correcciones de alineación para `.tittle1` en el dashboard.

## ✨ Características principales

### Página Principal (Home)
- Diseño moderno y responsive.
- Header con navegación y enlaces a Home, Homero, Login y Register.
- Sección Hero y tarjetas informativas.

### Página de Homero
- Galería de GIFs animados y efectos hover.
- Reproducción de música de fondo con controles (play/pause).
- Frases aleatorias de Homero que cambian automáticamente (cada 5s).

### Dashboard
- Layout con `Sidebar` persistente y contenido principal.
- Tarjetas de estadísticas (grid) y panel de notificaciones.

### Autenticación (básica)
- Formulario de `Login` con navegación a dashboard (redirección al enviar formulario).
- *Nota*: no hay backend de autenticación en este repo — la redirección es de cliente.

## 🚀 Tecnologías utilizadas
- React 19
- Vite
- React Router DOM
- CSS (Grid y Flexbox)
- Google Fonts (Roboto importada en `index.html`)

## 💻 Instalación y ejecución

1. Clona el repositorio:

```bash
git clone [url-del-repositorio]
cd exam
```

2. Instala dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre el navegador en:

```
http://localhost:5173
```

## 📁 Estructura del proyecto (actualizada)

```
src/
├── assets/
│   ├── IMG/
│   │   └── GIF/          # GIFs animados
│   ├── SONG/             # Archivos de audio
│   └── VIDEO/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Sidebar.jsx
│   └── (otros componentes)
├── pages/
│   ├── Home.jsx
│   ├── Homero.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── dashboard1.jsx
├── helpers/
│   └── Homero.js        # Funciones auxiliares (frases, utilidades)
└── routes/
    └── AppRouter.jsx    # Rutas y navegación
```

## � Estilos y configuraciones
- La fuente Roboto se importa en `index.html` y se aplica globalmente en `index.css`.
- Variables CSS y utilidades en `index.css` para pesos y estilos de fuente.
- Componentes clave con reglas específicas:
  - `sidebar.css`: ajuste de espaciado entre logo y menú.
  - `dashboard1.css`: `.tittle1` alineada a la izquierda; `.profile-img` 40×40px.
  - `Footer.css`: `.linea-custom1` centrada.

## 📱 Responsive
- Diseño adaptable: los grids y el sidebar están pensados para pantallas grandes; el footer y nav se adaptan en móviles.

## 🧩 Notas para desarrolladores
- Si vas a implementar autenticación real, añade un backend y reemplaza la lógica de redirección del cliente por llamadas autenticadas.
- Para depurar estilos conflictivos, revisa contenedores padres (flex/grid) que puedan centrar hijos con `align-items` o `justify-content`.

## 🤝 Contribuciones
Las contribuciones son bienvenidas:

1. Abre un issue describiendo el cambio.
2. Crea una rama con un PR claro y pruebas si aplica.

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo `LICENSE.md` para más detalles.

---
