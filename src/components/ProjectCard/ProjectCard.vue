<template>
    <div class="project-card" :class="project.type.toLowerCase()">
      <h2 class="project-title">{{ project.title }}</h2>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-tech">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
      </div>
      <div class="project-type">{{ project.type }}</div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    project: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .project-card {
    background-color: rgb(from var(--primary-color) r g b / 0.1);
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  
    &:hover {
      transform: translateY(-5px);
    }
  
    &.fullstack {
      border-left: 5px solid #42b983;
    }
  
    &.frontend {
      border-left: 5px solid #61dafb;
    }
  
    &.game-development {
      border-left: 5px solid #ff6b6b;
    }
  }
  
  .project-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-color, #ffffff);
  }
  
  .project-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: var(--text-color, #dddddd);
  }
  
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .tech-tag {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--text-color, #ffffff);
    padding: 0.2rem 0.5rem;
    border-radius: 15px;
    font-size: 0.8rem;
  }
  
  .project-type {
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--type-color, #bbbbbb);
  }
  </style>