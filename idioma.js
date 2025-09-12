/* ------------------------------
   idioma.js
   Manejo de idioma, animaciones y scroll
   Usar este archivo en todas tus páginas
------------------------------ */

// ------------------------------
// OBJETO DE TRADUCCIONES
// Es donde definimos los textos en español e inglés
// La clave es el mismo nombre usado en data-i18n o data-i18n-placeholder
// Ejemplo: <p data-i18n="titulo_inicio"></p> se traducirá según el idioma
// ------------------------------
const translations = {
  es:{
    inicio:"Inicio",
    servicios:"Servicios",
    testimonios:"Testimonios",
    contacto:"Contacto",
    idioma:"Idioma",
    titulo_inicio:"Bienvenido a Nuestro Sitio Web",
    descripcion_inicio:"Ofrecemos servicios profesionales para tu negocio.",
    boton_contacto:"Contáctanos",
    titulo_servicios:"Nuestros Servicios",
    descripcion_servicios:"Desarrollo web, hosting, diseño y más.",
    servicio1:"Desarrollo Web",
    servicio1_desc:"Creamos sitios web profesionales y modernos.",
    servicio2:"Diseño Gráfico",
    servicio2_desc:"Diseños visuales atractivos para tu marca.",
    titulo_testimonios:"Testimonios",
    testimonio1:"“Excelente servicio y atención personalizada.”",
    testimonio2:"“Profesionales y rápidos en el desarrollo de nuestra web.”",
    titulo_contacto:"Contáctanos",
    descripcion_contacto:"Envía un mensaje y nos pondremos en contacto contigo.",
    boton_enviar:"Enviar Mensaje",
    nombre:"Nombre",
    email:"Email",
    mensaje:"Mensaje",
    footer:"© 2025 Mi Empresa. Todos los derechos reservados."
  },
  en:{
    inicio:"Home",
    servicios:"Services",
    testimonios:"Testimonials",
    contacto:"Contact",
    idioma:"Language",
    titulo_inicio:"Welcome to Our Website",
    descripcion_inicio:"We offer professional services for your business.",
    boton_contacto:"Contact Us",
    titulo_servicios:"Our Services",
    descripcion_servicios:"Web development, hosting, design and more.",
    servicio1:"Web Development",
    servicio1_desc:"We create professional and modern websites.",
    servicio2:"Graphic Design",
    servicio2_desc:"Attractive visual designs for your brand.",
    titulo_testimonios:"Testimonials",
    testimonio1:"“Excellent service and personalized attention.”",
    testimonio2:"“Professional and fast in developing our website.”",
    titulo_contacto:"Get in Touch",
    descripcion_contacto:"Send us a message and we will contact you.",
    boton_enviar:"Send Message",
    nombre:"Name",
    email:"Email",
    mensaje:"Message",
    footer:"© 2025 My Company. All rights reserved."
  }
};

// ------------------------------
// FUNCIONES DE TRADUCCIÓN
// ------------------------------

// Aplica la traducción a todos los elementos con data-i18n y data-i18n-placeholder
function setLanguage(lang){
  // Traduce textos internos
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang][key]) el.innerText = translations[lang][key];
  });
  // Traduce placeholders de formularios
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(translations[lang][key]) el.placeholder = translations[lang][key];
  });
}

// Cambia idioma al hacer click y guarda en cookie
function changeLang(lang){
  // Guardamos en cookie por 1 año
  document.cookie = "lang="+lang+"; path=/; max-age="+60*60*24*365;
  setLanguage(lang); // Aplicamos traducción inmediata
}

// Obtiene cookie por nombre
function getCookie(name){
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if(parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// Inicializar idioma al cargar la página
const langSaved = getCookie('lang') || 'es';
setLanguage(langSaved);

// ------------------------------
// ANIMACIONES SCROLL (FADE-IN)
// ------------------------------

// Usamos IntersectionObserver para animar secciones al entrar en pantalla
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible'); // Aplica clase CSS 'visible' para fade-in
    }
  });
},{threshold:0.1});

// Observamos todas las secciones
sections.forEach(sec=>observer.observe(sec));
