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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();


const projects = computed(() => [
      {
        id: 1,
        title: t('projects.projects.cineapp.title'),
        description: t('projects.projects.cineapp.description'),
        technologies: ['Express', 'JWT', 'MongoDB', 'Vue 3', 'WebSocket', 'Cloudinary', 'Stripe'],
        type: t('projects.projects.cineapp.type')
      },
      {
        id: 2,
        title: 'WoF',
        description: t('projects.projects.wof.description'),
        technologies: ['WebSocket', 'Auth0', 'React', 'PostgreSQL', 'Sequelize', 'SASS', 'Cloudinary'],
        type: t('projects.projects.wof.type')
      },
      {
        id: 3,
        title: t('projects.projects.videogamesexplorer.title'),
        description: t('projects.projects.videogamesexplorer.description'),
        technologies: ['Express', 'React', 'Redux', 'PostgreSQL', 'Sequelize'],
        type: t('projects.projects.videogamesexplorer.type')
      },
      {
        id: 4,
        title: t('projects.projects.rickandmortyexplorer.title'),
        description: t('projects.projects.rickandmortyexplorer.description'),
        technologies: ['React', 'Redux', 'Express', 'PostgreSQL', 'Sequelize'],
        type: t('projects.projects.rickandmortyexplorer.type')
      },
      {
        id: 5,
        title: t('projects.projects.spotifyclone.title'),
        description: t('projects.projects.spotifyclone.description'),
        technologies: ['JavaScript', 'Web Components', 'HTML', 'CSS'],
        type: t('projects.projects.spotifyclone.type')
      },
      {
        id: 6,
        title: t('projects.projects.savethesea.title'),
        description: t('projects.projects.savethesea.description'),
        technologies: ['Unity', 'C#', 'Blender'],
        type: t('projects.projects.savethesea.type')
      },
      {
        id: 7,
        title: t('projects.projects.foodlover.title'),
        description: t('projects.projects.foodlover.description'),
        technologies: ['HTML', 'CSS'],
        type: t('projects.projects.foodlover.type')
      }
    ]);

const sortedProjects = computed(() => {
  return projects.value.sort((a, b) => {
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