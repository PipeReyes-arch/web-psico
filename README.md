# Mentemorfosia Psicología — Sitio Web

Landing page para un centro de psicología clínica en Bogotá, Colombia.
Construido **100% con HTML, CSS y JavaScript puro** (sin frameworks, sin build tools, sin backend), pensado para poder subirse directamente a GitHub Pages, Netlify o Vercel.

## 🌐 Demo en vivo
> Agrega aquí el enlace una vez lo despliegues (ver instrucciones abajo).

## 🛠️ Tecnologías

- **HTML5** — estructura semántica
- **CSS3** — variables CSS, Flexbox, Grid, animaciones, modo oscuro
- **JavaScript (Vanilla)** — sin dependencias externas:
  - Menú responsive
  - Modo claro/oscuro con `localStorage`
  - Acordeón de preguntas frecuentes
  - Animaciones al hacer scroll (`IntersectionObserver`)
  - Validación de formularios en el cliente
  - Notificaciones tipo "toast"

## 📁 Estructura del proyecto

```
mentemorfosia-web/
├── index.html          # Toda la estructura de la página
├── css/
│   └── style.css       # Todos los estilos, organizado por secciones
├── js/
│   └── script.js       # Toda la lógica, organizada por funciones
├── img/
│   └── logomente.png
└── README.md
```

## ▶️ Cómo ejecutarlo localmente

No necesitas instalar nada. Solo abre `index.html` en tu navegador,
o si prefieres usar un servidor local (recomendado para evitar problemas
de rutas relativas):

```bash
# Con Python (ya instalado en la mayoría de sistemas)
python3 -m http.server 8000

# Luego abre en el navegador:
# http://localhost:8000
```

## 🚀 Cómo publicarlo (GitHub Pages)

1. Crea un repositorio nuevo en GitHub, por ejemplo `mentemorfosia-web`.
2. Sube estos archivos:
   ```bash
   git init
   git add .
   git commit -m "Primera versión del sitio Mentemorfosia"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/mentemorfosia-web.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages**.
4. En "Source" selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. En un par de minutos tu sitio estará disponible en:
   `https://TU_USUARIO.github.io/mentemorfosia-web/`

## ✏️ Cómo editar el contenido

- **Textos de servicios, valores, preguntas frecuentes, testimonios y blog**:
  están todos centralizados como listas de datos al inicio de `js/script.js`
  (variables `SERVICE_LIST`, `VALORES`, `FAQS`, `TESTIMONIOS`, `BLOG_POSTS`).
  Cambia el texto ahí y se actualiza automáticamente en la página.
- **Colores y tipografías**: están definidos como variables CSS al inicio
  de `css/style.css`, en el bloque `:root`.
- **Formularios**: actualmente simulan el envío (no hay backend). Si quieres
  conectarlos a un correo real, puedes usar un servicio gratuito como
  [Formspree](https://formspree.io/) o [EmailJS](https://www.emailjs.com/),
  o crear tu propio backend. Los puntos donde reemplazar la simulación están
  marcados con comentarios en `js/script.js` (busca "Simulación de envío").

## 📌 Notas del proyecto original

Este sitio fue reconstruido a partir de una versión previa hecha en
React + TypeScript + Tailwind, con el objetivo de tener una versión
100% estática, ligera y fácil de mantener con conocimientos de
HTML, CSS y JavaScript básico/intermedio.
