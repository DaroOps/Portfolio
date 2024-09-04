<template>
  
    <div class="service-item">
      <div class="service-icon" :style="{ backgroundColor: getRandomColor() }">
        <i :class="service.icon"></i>
      </div>
      <div class="service-content">
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
        <ul v-if="service.features && service.features.length > 2">
          <li v-for="feature in service?.features" :key="feature">{{ feature }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, watch } from 'vue';
  
  
  const props = defineProps({
    service: {
      type: Object,
      required: true
    }
  });
  
  const getRandomColor = () => {
    const colors = ['#42b983', '#35495e', '#ff7e67', '#6c5ce7', '#fdcb6e'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  </script>
  
  <style scoped>
  .service-item {
    color: var(--text-color);
    display: flex;
    background-color: rgb(from var(--text-color) r g b / 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .service-item:hover {
    transform: translateY(-5px);
  }
  
  .service-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--text-color);
    margin-right: 1.5rem;
  }
  
  .service-content {
    flex: 1;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }
  
  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: var(--text-color, #dddddd);
  }
  
  ul {
    padding-left: 1.5rem;
    margin-top: 0.5rem;
  }
  
  li {
    font-size: 0.9rem;
    color: var(--text-color, #dddddd);
    margin-bottom: 0.3rem;
  }
  </style>