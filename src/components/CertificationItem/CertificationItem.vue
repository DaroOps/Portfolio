<template>
    <div class="certification-item">
      <h3>{{ certification.name }}</h3>
      <p><strong>Issuer:</strong> {{ certification.issuer }}</p>
      <p><strong>Date:</strong> {{ certification.date }}</p>
      <p v-if="certification.description">{{ certification.description }}</p>
      <a v-if="certification.url" :href="certification.url" target="_blank" rel="noopener noreferrer">View Certificate</a>
    </div>
  </template>
  
  <script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
      certification: {
        type: Object,
        required: true
      }
    });
  </script>
  
  <style scoped>
  .certification-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  a {
    display: inline-block;
    margin-top: 0.5rem;
    color: #42b983;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>