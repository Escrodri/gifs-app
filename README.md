# 🎬 Gifs App

Una aplicación web moderna para buscar y visualizar GIFs utilizando la API de Giphy. Desarrollada con React, TypeScript y Vite, incluye un sistema de caché inteligente para optimizar las búsquedas.

## ✨ Características

- **🔍 Búsqueda de GIFs**: Busca cualquier GIF usando la API de Giphy
- **💾 Sistema de Caché**: Almacena resultados de búsquedas previas para acceso instantáneo
- **📱 Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **🎨 Interfaz Moderna**: Diseño limpio con tema oscuro y tipografía Montserrat
- **⚡ Búsquedas Rápidas**: Historial de búsquedas previas con acceso directo
- **🔄 Optimización**: Límite de 10 GIFs por búsqueda para mejor rendimiento

## 🚀 Tecnologías Utilizadas

- **React 19.1.1** - Biblioteca de interfaz de usuario
- **TypeScript 5.8.3** - Tipado estático para JavaScript
- **Vite 7.1.2** - Herramienta de construcción rápida
- **Axios 1.11.0** - Cliente HTTP para peticiones a la API
- **ESLint** - Linter para mantener código limpio
- **CSS3** - Estilos personalizados con diseño responsivo

## 📁 Estructura del Proyecto

```
src/
├── gifs/                          # Módulo principal de GIFs
│   ├── actions/                   # Acciones para obtener datos
│   │   └── get-gifs-by-query.action.ts
│   ├── api/                       # Configuración de API
│   │   └── giphy.api.ts
│   ├── components/                # Componentes específicos de GIFs
│   │   ├── GifList.tsx
│   │   └── PreviousSearches.tsx
│   ├── hooks/                     # Hooks personalizados
│   │   └── useGifs.tsx
│   └── interfaces/                # Definiciones de tipos
│       ├── gif.interface.ts
│       └── giphy.response.ts
├── shared/                        # Componentes reutilizables
│   └── components/
│       ├── CustomHeader.tsx
│       └── SearchBar.tsx
├── mock-data/                     # Datos de prueba
└── main.tsx                       # Punto de entrada
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- API Key de Giphy

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd gifs-app
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura la API Key de Giphy**
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega tu API Key:
   ```env
   VITE_GIPHY_API_KEY=tu_api_key_aqui
   ```
   - Obtén tu API Key gratuita en [Giphy Developers](https://developers.giphy.com/)

4. **Ejecuta la aplicación en modo desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador**
   - Visita `http://localhost:5173`

## 📋 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint para verificar el código
```

## 🎯 Funcionalidades Principales

### Sistema de Búsqueda
- **Búsqueda por texto**: Ingresa cualquier término para buscar GIFs
- **Búsqueda con Enter**: Presiona Enter o haz clic en "Buscar"
- **Validación**: Ignora búsquedas vacías y duplicadas

### Sistema de Caché Inteligente
- **Almacenamiento en memoria**: Los resultados se guardan en `useRef` para persistir durante la sesión
- **Acceso instantáneo**: Las búsquedas previas se cargan inmediatamente desde el caché
- **Optimización de red**: Reduce las llamadas a la API de Giphy

### Historial de Búsquedas
- **Últimas 8 búsquedas**: Mantiene un historial limitado de términos buscados
- **Acceso directo**: Haz clic en cualquier término previo para repetir la búsqueda
- **Interfaz intuitiva**: Etiquetas clickeables con hover effects

### Diseño Responsivo
- **Mobile First**: Optimizado para dispositivos móviles
- **Grid Adaptativo**: 
  - Móvil: 2 columnas
  - Tablet: 3 columnas
  - Desktop: 4-5 columnas
- **Tipografía**: Montserrat Alternates para mejor legibilidad

## 🔧 Configuración de la API

La aplicación utiliza la API de Giphy con las siguientes configuraciones:

```typescript
// Configuración por defecto
baseURL: 'https://api.giphy.com/v1/gifs'
lang: 'es'                    // Idioma español
limit: 10                     // 10 GIFs por búsqueda
```

## 🎨 Personalización

### Estilos CSS
Los estilos están centralizados en `src/index.css` con:
- Variables CSS para colores y tipografías
- Media queries para diseño responsivo
- Animaciones y transiciones suaves

### Componentes
Todos los componentes son modulares y reutilizables:
- `CustomHeader`: Encabezado personalizable
- `SearchBar`: Barra de búsqueda con validación
- `GifList`: Lista de GIFs con grid responsivo
- `PreviousSearches`: Historial de búsquedas

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/` y están listos para desplegar en cualquier servidor web estático.

### Plataformas Recomendadas
- **Vercel**: Despliegue automático desde GitHub
- **Netlify**: Drag & drop de la carpeta `dist/`
- **GitHub Pages**: Para proyectos open source

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🐛 Reportar Problemas

Si encuentras algún bug o tienes sugerencias, por favor:
1. Verifica que no exista un issue similar
2. Crea un nuevo issue con una descripción detallada
3. Incluye pasos para reproducir el problema

## 📞 Contacto

- **Desarrollador**: [Tu Nombre]
- **Email**: [tu-email@ejemplo.com]
- **GitHub**: [@tu-usuario]

---

⭐ ¡No olvides darle una estrella al proyecto si te gusta!