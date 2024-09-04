<template>
      <!--TODO: Add icons -->
    <!--TODOP: apply atomic design!!! -->
    <div class="skills-container">
      <h2 class="skills-title">{{t('skills.title')}}</h2>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <h4>{{ skill.name }}</h4>
          <div class="skill-level">
            <div class="skill-bar" :style="{ width: `${skill.level}%` }"></div>
          </div>
          <span class="skill-percentage">{{ skill.level }}%</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  
  const skills = ref([
    { name: 'Linux', level: 95 },
    { name: 'Vue.js', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'C#', level: 80 },
    { name: 'Unity', level: 75 },
    { name: 'Godot', level: 70 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Sequelize', level: 75 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 85 },
    { name: 'SASS', level: 80 },
    { name: 'Web Components', level: 75 },
    { name: 'HTML', level: 70 },
    { name: 'CSS', level: 65 },
    { name: 'JavaScript', level: 80 }
  ]);
  </script>
  
  <style scoped>
 
  .skills-title{
    margin: 0;
  }

  .skills-container {
    background-color: var(--background-color);
    margin: 0 auto;
    padding: 2rem;
  }
  
  .skills-title {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text-color);
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .skill-item {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .skill-item h4 {
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }
  
  .skill-level {
    background-color: rgba(255, 255, 255, 0.2);
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .skill-bar {
    background-color: #42b983;
    height: 100%;
    transition: width 0.5s ease-in-out;
  }
  
  .skill-percentage {
    display: block;
    text-align: right;
    font-size: 0.8rem;
    margin-top: 0.25rem;
    color: var(--text-color);
  }
  </style>