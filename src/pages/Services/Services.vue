<template>
  <div class="services-container">
    <h1 class="services-title">Mis Servicios</h1>
    <div class="services-grid">
      <ServiceItem v-for="service in services" :key="service.id" :service="service" />
    </div>
  </div>
</template>

<script setup>
import ServiceItem from '@components/ServiceItem/ServiceItem.vue';

const services = [
  { 
    id: 1, 
    name: 'Desarrollo Full Stack', 
    description: 'Desarrollo de aplicaciones web completas, desde el front-end hasta el back-end.',
    icon: 'fas fa-laptop-code',
    features: [
      'Aplicaciones web con Vue.js y React',
      'APIs RESTful con Express.js',
      'Bases de datos SQL y NoSQL',
      'Integración de pasarelas de pago',
      'Autenticación y autorización'
    ]
  },
  { 
    id: 2, 
    name: 'Desarrollo de Videojuegos', 
    description: 'Creación de juegos interactivos y experiencias inmersivas.',
    icon: 'fas fa-gamepad',
    features: [
      'Desarrollo con Unity y C#',
      'Diseño de mecánicas de juego',
      'Optimización de rendimiento',
      'Integración de gráficos 3D',
      'Publicación en tiendas de aplicaciones'
    ]
  },
  { 
    id: 3, 
    name: 'Desarrollo Frontend', 
    description: 'Creación de interfaces de usuario atractivas y responsivas.',
    icon: 'fas fa-paint-brush',
    features: [
      'Diseño UI/UX',
      'Desarrollo con HTML5, CSS3 y JavaScript',
      'Frameworks: Vue.js, React',
      'Optimización de rendimiento',
      'Accesibilidad web'
    ]
  },
  { 
    id: 4, 
    name: 'Consultoría Técnica', 
    description: 'Asesoramiento en tecnologías y mejores prácticas de desarrollo.',
    icon: 'fas fa-comments',
    features: [
      'Arquitectura de software',
      'Selección de stack tecnológico',
      'Optimización de procesos de desarrollo',
      'Implementación de metodologías ágiles',
      'Revisión de código y mentoring'
    ]
  },
  { 
    id: 5, 
    name: 'Impresión 3D y Prototipado', 
    description: 'Servicios de diseño e impresión 3D para prototipos y proyectos personalizados.',
    icon: 'fas fa-cube',
    features: [
      'Diseño 3D para impresión',
      'Prototipado rápido',
      'Impresión de modelos personalizados',
      'Asesoramiento en materiales y técnicas',
      'Postprocesado de modelos impresos'
    ]
  }
];
</script>

<style scoped>
.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--background-color);
}

.services-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color, #ffffff);
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>