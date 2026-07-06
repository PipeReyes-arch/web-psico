/* ==========================================================================
   MENTEMORFOSIA PSICOLOGÍA — JAVASCRIPT
   Todo el sitio funciona sin frameworks: solo DOM + eventos nativos.
   Está organizado en funciones pequeñas, cada una con una responsabilidad.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initThemeToggle();
  renderServiceLists();
  renderValues();
  renderFAQ();
  renderTestimonials();
  renderBlog();
  initScrollReveal();
  initAppointmentForm();
  initContactForm();
});

/* -----------------------------------------------------------
   1. NAVBAR: cambia de estilo cuando el usuario hace scroll
----------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* -----------------------------------------------------------
   2. MENÚ MÓVIL (hamburguesa)
----------------------------------------------------------- */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const iconMenu = document.getElementById('iconMenu');
  const iconClose = document.getElementById('iconClose');

  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    iconMenu.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
  });

  // Cierra el menú al hacer clic en cualquier enlace
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      iconMenu.style.display = 'block';
      iconClose.style.display = 'none';
    });
  });
}

/* -----------------------------------------------------------
   3. MODO CLARO / OSCURO (se guarda en localStorage)
----------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  const iconMoon = document.getElementById('iconMoon');
  const iconSun = document.getElementById('iconSun');

  const applyTheme = (theme) => {
    document.body.classList.toggle('dark', theme === 'dark');
    iconMoon.style.display = theme === 'dark' ? 'none' : 'block';
    iconSun.style.display = theme === 'dark' ? 'block' : 'none';
  };

  const saved = localStorage.getItem('mentemorfosia-theme') || 'light';
  applyTheme(saved);

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('mentemorfosia-theme', next);
  });
}

/* -----------------------------------------------------------
   4. DATOS DEL SITIO
----------------------------------------------------------- */
const SERVICE_LIST = [
  'Terapia Individual',
  'Terapia de Pareja',
  'Terapia Familiar',
  'Terapia Grupal',
  'Orientación Psicológica',
  'Acompañamiento en Crisis',
  'Escuela de Padres',
];

const VALORES = [
  { title: 'Empatía', desc: 'Comprendemos profundamente tu experiencia sin juicios.' },
  { title: 'Confidencialidad', desc: 'Garantizamos absoluta reserva en tu proceso.' },
  { title: 'Inclusión', desc: 'Espacios seguros para toda persona y diversidad.' },
  { title: 'Profesionalismo', desc: 'Intervenciones guiadas por ciencia y ética.' },
  { title: 'Accesibilidad', desc: 'Cercanía humana en cada momento terapéutico.' },
  { title: 'Comunidad', desc: 'Fomentamos redes de apoyo y crecimiento conjunto.' },
];

const FAQS = [
  {
    q: '¿Cuánto dura una sesión de terapia?',
    a: 'Las sesiones individuales tienen una duración aproximada de 50 a 60 minutos. Las terapias de pareja o familiares pueden extenderse hasta 90 minutos según la necesidad.'
  },
  {
    q: '¿Cuál es la diferencia entre terapia presencial y virtual?',
    a: 'La metodología y el profesionalismo son exactamente iguales. La presencial te ofrece un espacio físico neutro y preparado para ti en Bogotá, mientras que la virtual te permite recibir la sesión desde la comodidad de tu hogar.'
  },
  {
    q: '¿Con qué frecuencia debo asistir a terapia?',
    a: 'Depende completamente de tu proceso y necesidades. Generalmente, sugerimos comenzar con una frecuencia semanal y luego espaciar las citas a medida que vas avanzando y adquiriendo herramientas.'
  },
  {
    q: '¿Atienden a menores de edad?',
    a: 'Sí, contamos con especialistas en psicología infantil y adolescente. También ofrecemos Escuela de Padres para brindar orientación integral al núcleo familiar.'
  },
  {
    q: '¿Cómo es el proceso para agendar la primera cita?',
    a: 'Puedes llenar nuestro formulario web, escribirnos por WhatsApp o llamarnos. Te asignaremos con el especialista que mejor se adapte a tu caso y coordinaremos fecha y hora.'
  },
];

const TESTIMONIOS = [
  { name: 'Andrea M.', stars: 5, text: 'Encontrar Mentemorfosia fue un punto de inflexión. El espacio presencial es tan cálido que te hace sentir a salvo desde el primer momento.' },
  { name: 'Carlos P.', stars: 5, text: 'Tomo terapia virtual y la calidad humana del especialista traspasa la pantalla. He avanzado muchísimo en el manejo de mi ansiedad.' },
  { name: 'Familia R. G.', stars: 5, text: 'La terapia de pareja nos dio las herramientas que no sabíamos que necesitábamos. Muy profesionales y éticos.' },
];

const BLOG_POSTS = [
  { category: 'Bienestar', title: '5 herramientas para gestionar la ansiedad diaria', excerpt: 'La ansiedad es una respuesta natural, pero cuando sobrepasa nuestros límites, necesitamos estrategias concretas.', date: '15 Feb 2025' },
  { category: 'Pareja', title: 'Comunicación asertiva: el pilar de las relaciones', excerpt: 'Descubre cómo expresar tus necesidades sin lastimar al otro y construyendo un puente de empatía.', date: '10 Feb 2025' },
  { category: 'Desarrollo Personal', title: 'El mito de la productividad constante', excerpt: 'Por qué el descanso no es un premio que debes ganarte, sino una necesidad biológica innegociable.', date: '05 Feb 2025' },
];

/* -----------------------------------------------------------
   5. RENDERIZADO DINÁMICO DE SECCIONES
----------------------------------------------------------- */
function renderServiceLists() {
  document.querySelectorAll('.service-list').forEach((list) => {
    list.innerHTML = SERVICE_LIST.map((s) => `<li>${s}</li>`).join('');
  });
}

function renderValues() {
  const grid = document.getElementById('valuesGrid');
  grid.innerHTML = VALORES.map((v) => `
    <div class="value-card reveal">
      <h3>${v.title}</h3>
      <p>${v.desc}</p>
    </div>
  `).join('');
}

function renderFAQ() {
  const accordion = document.getElementById('accordion');
  accordion.innerHTML = FAQS.map((faq, i) => `
    <div class="accordion-item" data-index="${i}">
      <button class="accordion-trigger" aria-expanded="false">
        <span>${faq.q}</span>
        <svg class="chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="accordion-content">
        <div class="accordion-content-inner">${faq.a}</div>
      </div>
    </div>
  `).join('');

  // Comportamiento tipo acordeón: solo un ítem abierto a la vez
  accordion.querySelectorAll('.accordion-item').forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Cierra todos los demás
      accordion.querySelectorAll('.accordion-item').forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        other.querySelector('.accordion-content').style.maxHeight = null;
      });

      // Abre el actual si estaba cerrado
      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  const starIcon = `<svg viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;

  grid.innerHTML = TESTIMONIOS.map((t) => `
    <div class="glass-card testimonial-card reveal">
      <div>
        <div class="stars">${starIcon.repeat(t.stars)}</div>
        <blockquote>&ldquo;${t.text}&rdquo;</blockquote>
      </div>
      <cite>${t.name}</cite>
    </div>
  `).join('');
}

function renderBlog() {
  const grid = document.getElementById('blogGrid');
  grid.innerHTML = BLOG_POSTS.map((post) => `
    <article class="blog-card reveal">
      <span class="category">${post.category}</span>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <div class="date">${post.date}</div>
    </article>
  `).join('');
}

/* -----------------------------------------------------------
   6. ANIMACIÓN "REVEAL" AL HACER SCROLL
   Usa IntersectionObserver: es la forma moderna y eficiente
   de detectar cuándo un elemento entra en pantalla.
----------------------------------------------------------- */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '-40px' });

  items.forEach((item) => observer.observe(item));
}

/* -----------------------------------------------------------
   7. TOAST (notificación flotante de éxito / error)
----------------------------------------------------------- */
function showToast(title, desc, isError = false) {
  const toast = document.getElementById('toast');
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastDesc').textContent = desc;
  toast.classList.toggle('is-error', isError);
  toast.classList.add('is-visible');

  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 4000);
}

/* -----------------------------------------------------------
   8. VALIDACIÓN GENÉRICA DE FORMULARIOS
   Reglas simples reutilizables entre el formulario de citas
   y el de contacto.
----------------------------------------------------------- */
function validateField(value, rule) {
  value = (value || '').trim();
  switch (rule) {
    case 'required':
      return value.length > 0;
    case 'name':
      return value.length >= 2;
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    case 'phone':
      return value.replace(/\D/g, '').length >= 7;
    case 'message':
      return value.length >= 5;
    default:
      return true;
  }
}

function showFieldError(input, message) {
  input.classList.toggle('has-error', Boolean(message));
  const errorEl = document.querySelector(`[data-error-for="${input.id}"]`);
  if (errorEl) errorEl.textContent = message || '';
}

/* -----------------------------------------------------------
   9. FORMULARIO: AGENDAR CITA
   No hay backend conectado, así que simulamos el envío.
   Si más adelante tienes un servidor o un servicio como
   Formspree/EmailJS, aquí es donde harías el fetch().
----------------------------------------------------------- */
function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('apNombre');
    const email = document.getElementById('apEmail');
    const telefono = document.getElementById('apTelefono');
    const servicio = document.getElementById('apServicio');
    const modalidad = document.querySelector('input[name="modalidad"]:checked');
    const fecha = document.getElementById('apFecha');
    const hora = document.getElementById('apHora');
    const mensaje = document.getElementById('apMensaje');

    let valid = true;

    if (!validateField(nombre.value, 'name')) { showFieldError(nombre, 'Nombre muy corto'); valid = false; } else showFieldError(nombre, '');
    if (!validateField(email.value, 'email')) { showFieldError(email, 'Correo inválido'); valid = false; } else showFieldError(email, '');
    if (!validateField(telefono.value, 'phone')) { showFieldError(telefono, 'Teléfono muy corto'); valid = false; } else showFieldError(telefono, '');
    if (!validateField(servicio.value, 'required')) { showFieldError(servicio, 'Selecciona un servicio'); valid = false; } else showFieldError(servicio, '');
    if (!validateField(fecha.value, 'required')) { showFieldError(fecha, 'Selecciona una fecha'); valid = false; } else showFieldError(fecha, '');
    if (!validateField(hora.value, 'required')) { showFieldError(hora, 'Selecciona una hora'); valid = false; } else showFieldError(hora, '');

    if (!valid) return;

    const modalidadTexto = modalidad.value === 'presencial' ? 'Presencial (Bogotá)' : 'Virtual';
    const mensajeWhatsapp = `*Solicitud de Cita - Mentemorfosia* %0A%0A *Nombre:* ${nombre.value} %0A *Email:* ${email.value} %0A *Teléfono:* ${telefono.value} %0A *Servicio:* ${servicio.value} %0A *Modalidad:* ${modalidadTexto} %0A *Fecha preferida:* ${fecha.value} %0A *Hora preferida:* ${hora.value} ${mensaje.value ? `%0A *Mensaje:* ${mensaje.value}` : ''}`;
    
    window.open(`https://wa.me/573204556628?text=${mensajeWhatsapp}`, '_blank');
    showToast('¡Cita solicitada!', 'Se abrirá WhatsApp para confirmar tu cita.');
    form.reset();
  });
}

/* -----------------------------------------------------------
   10. FORMULARIO: CONTACTO
----------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('coNombre');
    const email = document.getElementById('coEmail');
    const asunto = document.getElementById('coAsunto');
    const mensaje = document.getElementById('coMensaje');

    let valid = true;

    if (!validateField(nombre.value, 'name')) { showFieldError(nombre, 'Nombre requerido'); valid = false; } else showFieldError(nombre, '');
    if (!validateField(email.value, 'email')) { showFieldError(email, 'Correo inválido'); valid = false; } else showFieldError(email, '');
    if (!validateField(asunto.value, 'name')) { showFieldError(asunto, 'Asunto requerido'); valid = false; } else showFieldError(asunto, '');
    if (!validateField(mensaje.value, 'message')) { showFieldError(mensaje, 'Mensaje requerido'); valid = false; } else showFieldError(mensaje, '');

    if (!valid) return;

    const mensajeWhatsapp = `*Mensaje de Contacto - Mentemorfosia*%0A%0A*Nombre:* ${nombre.value}%0A*Email:* ${email.value}%0A*Asunto:* ${asunto.value}%0A*Mensaje:* ${mensaje.value}`;
    
    window.open(`https://wa.me/573204556628?text=${mensajeWhatsapp}`, '_blank');
    showToast('Mensaje enviado', 'Se abrirá WhatsApp para confirmar tu mensaje.');
    form.reset();
  });
}
