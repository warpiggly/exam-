# Proyecto Web - Los Simpsons Fan Page

## 📝 Descripción
Este es un proyecto web interactivo construido con React y Vite que incluye una página principal y una página especial dedicada a Homero Simpson. El sitio cuenta con animaciones, efectos visuales, y elementos interactivos que hacen la experiencia más inmersiva.

## ✨ Características

### Página Principal
- Diseño moderno y responsive
- Header con navegación intuitiva
- Sección Hero con llamada a la acción
- Tarjetas de características
- Footer con información de contacto

### Página de Homero
- Animaciones interactivas con GIFs de Los Simpsons
- Frases aleatorias de Homero que cambian cada 5 segundos
- Música de fondo con control de reproducción
- Layout grid con disposición única de elementos
- Efectos hover en las imágenes

## 🚀 Tecnologías Utilizadas
- React 19
- Vite
- React Router DOM
- CSS Grid y Flexbox
- Google Fonts (Patua One)

## 💻 Instalación y Ejecución

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Instala las dependencias:
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

## 📁 Estructura del Proyecto

```
src/
├── assets/
│   ├── IMG/
│   │   └── GIF/          # GIFs animados
│   └── SONG/             # Archivos de audio
├── components/
│   ├── Header/          # Componente de navegación
│   └── Footer/          # Pie de página
├── pages/
│   ├── Home/           # Página principal
│   └── Homero/         # Página especial de Homero
├── helpers/
│   └── Homero.js      # Funciones auxiliares y animaciones
└── routes/
    └── AppRouter.jsx   # Configuración de rutas
```

## 🎮 Características Interactivas

### Animaciones
- Efectos de entrada suaves para los GIFs
- Rotación y escala en hover
- Transiciones fluidas

### Audio
- Música de fondo en la página de Homero
- Control de reproducción mediante botón flotante
- Autoplay con fallback manual

### Frases
- Sistema de frases aleatorias de Homero
- Actualización automática cada 5 segundos
- Estilo visual distintivo

## 🎨 Personalización
El sitio utiliza variables CSS para colores y fuentes, lo que facilita la personalización:
- Fuente principal: Patua One
- Colores principales: 
  - Fondo página Homero: #78bbcb
  - Header/Footer: #333
  - Acentos: #00a8ff

## 📱 Responsive Design
- Diseño adaptable a diferentes tamaños de pantalla
- Grid responsivo para la página de Homero
- Menú de navegación adaptable

## 🤝 Contribución
Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE.md para más detalles.
