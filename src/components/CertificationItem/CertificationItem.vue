<template>
  <div class="certification-item">
    <div class="certification-icon" :style="{ backgroundColor: getRandomColor() }">
      {{ certification.name.charAt(0) }}
    </div>
    <div class="certification-content">
      <h3>{{ certification.name }}</h3>
      <p class="issuer"><strong>Emisor:</strong> {{ certification.issuer }}</p>
      <p class="date"><strong>Fecha:</strong> {{ certification.date }}</p>
      <p v-if="certification.description" class="description">{{ certification.description }}</p>
      <a v-if="certification.url" :href="certification.url" target="_blank" rel="noopener noreferrer" class="view-certificate">{{ t('certifications.see') }}</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  certification: {
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
.certification-item {
  display: flex;
  align-items: center;
  background-color: rgb(from var(--primary-color) r g b / 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.certification-item:hover {
  transform: translateY(-5px);
}

.certification-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-right: 1.5rem;
}

.certification-content {
  flex: 1;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-color, #ffffff);
}

p {
  margin: 0.3rem 0;
  font-size: 0.9rem;
  color: var(--text-color, #dddddd);
}

.description {
  margin-top: 0.5rem;
  font-style: italic;
}

.view-certificate {
  display: inline-block;
  margin-top: 0.8rem;
  padding: 0.5rem 1rem;
  background-color: var(--button-bg-color, #42b983);
  color: var(--text-color, #ffffff);
  text-decoration: none;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.view-certificate:hover {
  background-color: var(--button-hover-bg-color, #3da776);
}
</style>