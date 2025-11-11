# Mi Portfolio Personal

¡Bienvenido a mi portfolio personal! Este es un sitio web moderno y minimalista construido con Astro, diseñado para mostrar mis proyectos, experiencia y blog.

## ✨ Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles y de escritorio
- **Rendimiento Optimizado**: Construido con Astro para una carga rápida
- **Contenido Dinámico**: Blog y proyectos gestionados con Notion
- **Tema Personalizable**: Estilos CSS globales y componentes reutilizables

## 🛠️ Tecnologías Utilizadas

- **Astro**: Framework web moderno para sitios estáticos
- **TypeScript**: JavaScript con tipado estático
- **Tailwind CSS**: Framework de estilos utilitarios
- **Notion API**: Para gestionar contenido del blog
- **Mermaid**: Para diagramas y visualizaciones

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- pnpm

### Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Alejocabeza/homepage.git
cd homepage
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Inicia el servidor de desarrollo:

```bash
pnpm dev
```

4. Abre tu navegador en `http://localhost:4321`

### Comandos Disponibles

| Comando             | Acción                             |
| ------------------- | ---------------------------------- |
| `pnpm install`      | Instala las dependencias           |
| `pnpm dev`          | Inicia el servidor de desarrollo   |
| `pnpm build`        | Construye el sitio para producción |
| `pnpm preview`      | Previsualiza la build localmente   |
| `pnpm astro check`  | Verifica el código con Astro       |
| `pnpm astro --help` | Muestra ayuda de la CLI de Astro   |

## 📁 Estructura del Proyecto

```
/
├── public/                    # Archivos estáticos
├── src/
│   ├── feature/               # Funcionalidades principales
│   │   ├── blog/              # Páginas del blog
│   │   ├── home/              # Página principal y componentes
│   │   └── projects/          # Páginas de proyectos
│   ├── pages/                 # Rutas de Astro
│   │   ├── index.astro        # Página principal
│   │   ├── blog/              # Rutas del blog
│   │   └── projects/          # Rutas de proyectos
│   └── shared/                # Recursos compartidos
│       ├── components/        # Componentes reutilizables
│       ├── data/              # Datos estáticos (CV, etc.)
│       ├── layouts/           # Layouts de página
│       ├── lib/               # Utilidades y librerías
│       ├── scripts/           # Scripts JavaScript
│       └── styles/            # Estilos globales
├── astro.config.mjs           # Configuración de Astro
├── package.json               # Dependencias y scripts
├── tsconfig.json              # Configuración de TypeScript
└── README.md                  # Este archivo
```

## 🎨 Personalización

### Estilos

Los estilos globales se encuentran en `src/shared/styles/global.css`. Puedes modificar colores, fuentes y otros estilos aquí.

### Contenido

- **CV**: Edita `src/shared/data/cv.json`
- **Blog**: Gestiona el contenido en Notion (ver `src/shared/lib/notion.ts`)
- **Proyectos**: Modifica las páginas en `src/feature/projects/`

## 📧 Contacto

¿Te gusta mi trabajo? ¡Me encantaría escucharte!

- **Email**: alejandrocabezaoficial@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/alejandro-cabeza-ab86661bb/
- **GitHub**: https://github.com/Alejocabeza

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

Hecho con ❤️ usando Astro
