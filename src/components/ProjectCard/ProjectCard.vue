<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

</script>

<template>
    <div class="project-card">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <div class="project-links">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank">View Live</a>
            <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank">View Repository</a>
        </div>
        <div class="project-technologies">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
        </div>
    </div>
</template>

<style scoped>
.project-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
}

.project-links a {
    margin-right: 1rem;
    color: #42b983;
    text-decoration: none;
}

.tech-tag {
    background-color: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    margin-right: 0.5rem;
    font-size: 0.8rem;
}
</style>