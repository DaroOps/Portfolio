<script setup>
import ProjectCard from '@components/ProjectCard/ProjectCard.vue';

const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Description of project 1',
        liveUrl: 'https://project1.com',
        repoUrl: 'https://github.com/user/project1',
        technologies: ['Vue.js', 'Node.js', 'MongoDB']
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Description of project 2',
        liveUrl: 'https://project2.com',
        repoUrl: 'https://github.com/user/project2',
        technologies: ['React', 'Express', 'PostgreSQL']
    },
    // Add more projects as needed
]

</script>

<template>
  <div class="projects">
    <h1>My Projects</h1>
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<style lang="scss" scoped></style>