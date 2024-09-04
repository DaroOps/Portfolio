<template>
  <div class="services-container">
    <h1 class="services-title">Mis Servicios</h1>
    <div class="services-grid">
      <ServiceItem v-for="service in services" :key="service.id" :service="service" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ServiceItem from '@components/ServiceItem/ServiceItem.vue';

const { t, tm } = useI18n();


const services = computed(() => [
  { 
    id: 1, 
    name: t('services.services.frontend.title'),
    description: t('services.services.frontend.description'),
    icon: t('services.services.frontend.icon'),
    features: tm('services.services.frontend.features')
  },
  { 
    id: 2, 
    name: t('services.services.fullstack.title'),
    description: t('services.services.fullstack.description'),
    icon: t('services.services.fullstack.icon'),
    features: tm('services.services.fullstack.features')
  },
  { 
    id: 3, 
    name: t('services.services.gamedev.title'),
    description: t('services.services.gamedev.description'),
    icon: t('services.services.gamedev.icon'),
    features: tm('services.services.gamedev.features')
  },
  { 
    id: 4, 
    name: t('services.services.cosultoring.title'),
    description: t('services.services.cosultoring.description'),
    icon: t('services.services.cosultoring.icon'),
    features: tm('services.services.cosultoring.features')
  },
  { 
    id: 5, 
    name: t('services.services.printing.title'),
    description: t('services.services.printing.description'),
    icon: t('services.services.printing.icon'),
    features: tm('services.services.printing.features')
  }
]);
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