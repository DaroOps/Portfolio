<template>
  <div class="projects-container">
    <h1 class="projects-title">Mis Proyectos</h1>
    <div class="projects-grid">
      <ProjectCard v-for="project in sortedProjects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import ProjectCard from '@components/ProjectCard/ProjectCard.vue';

const projects = [
  {
    id: 1,
    title: 'CineApp',
    description: 'Aplicación de reserva de asientos de cine en tiempo real con pasarela de pago Stripe y autenticación JWT. Desarrollada con las mejores prácticas.',
    technologies: ['Express', 'JWT', 'MongoDB', 'Vue 3', 'WebSocket', 'Cloudinary', 'Stripe'],
    type: 'Fullstack'
  },
  {
    id: 2,
    title: 'WoF',
    description: 'Plataforma que conecta cuidadores con dueños de mascotas. Proyecto en equipo desarrollado con metodología Scrum y plazos ajustados.',
    technologies: ['WebSocket', 'Auth0', 'React', 'PostgreSQL', 'Sequelize', 'SASS', 'Cloudinary'],
    type: 'Fullstack'
  },
  {
    id: 3,
    title: 'Videogames Explorer',
    description: 'Aplicación para explorar videojuegos, con funcionalidades de filtrado, favoritos y autenticación de usuarios.',
    technologies: ['Express', 'React', 'Redux', 'PostgreSQL', 'Sequelize'],
    type: 'Fullstack'
  },
  {
    id: 4,
    title: 'Rick and Morty Explorer',
    description: 'Explora el universo de Rick y Morty con login, favoritos y descripciones detalladas de personajes.',
    technologies: ['React', 'Redux', 'Express', 'PostgreSQL', 'Sequelize'],
    type: 'Fullstack'
  },
  {
    id: 5,
    title: 'Spotify Clone',
    description: 'Clon de Spotify desarrollado enteramente con JavaScript y Web Components para entender el funcionamiento de frameworks modernos.',
    technologies: ['JavaScript', 'Web Components', 'HTML', 'CSS'],
    type: 'Frontend'
  },
  {
    id: 6,
    title: 'Save the Sea',
    description: 'Videojuego educativo para concientizar sobre el desperdicio de basura en las playas. Proyecto freelance con contacto directo con el cliente.',
    technologies: ['Unity', 'C#', 'Blender'],
    type: 'Game Development'
  },
  {
    id: 7,
    title: 'FoodLover',
    description: 'Landing page de un restaurante ficticio que demuestra las mejores prácticas de escritura semántica en HTML.',
    technologies: ['HTML', 'CSS'],
    type: 'Frontend'
  }
];

const sortedProjects = computed(() => {
  return projects.sort((a, b) => {
    const typeOrder = { 'Fullstack': 3, 'Game Development': 2, 'Frontend': 1 };
    return typeOrder[b.type] - typeOrder[a.type];
  });
});
</script>

<style lang="scss" scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--background-color);
}

.projects-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>