<template>
  <div class="certifications">
    <div class="certifications-container">
      <h1 class="certifications-title">{{ t('certifications.title') }}</h1>
      <div class="certifications-grid">
        <CertificationItem v-for="cert in certifications" :key="cert.id" :certification="cert" />
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed } from 'vue';
import CertificationItem from '@components/CertificationItem/CertificationItem.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const certifications = computed(() => [
  { 
    id: 1, 
    name: t('certifications.certifications.fullstackbootcamp.title'),
    issuer: t('certifications.certifications.fullstackbootcamp.issuer'),
    date: t('certifications.certifications.fullstackbootcamp.date'),
    description: t('certifications.certifications.fullstackbootcamp.description'),
    url: 'https://certificates.soyhenry.com/cert?id=1234567890'
  },
  { 
    id: 2, 
    name: t('certifications.certifications.unitycertified.title'),
    issuer: t('certifications.certifications.unitycertified.issuer'),
    date: t('certifications.certifications.unitycertified.date'),
    description: t('certifications.certifications.unitycertified.description'),
    url: t('certifications.certifications.unitycertified.link')
  },
  { 
    id: 3, 
    name: t('certifications.certifications.englishcertificationb2.title'),
    issuer: t('certifications.certifications.englishcertificationb2.issuer'),
    date: t('certifications.certifications.englishcertificationb2.date'),
    description: t('certifications.certifications.englishcertificationb2.description'),
    url: t('certifications.certifications.englishcertificationb2.link')
  },
  { 
    id: 4, 
    name: t('certifications.certifications.git.title'),
    issuer: t('certifications.certifications.git.issuer'),
    date: t('certifications.certifications.git.date'),
    description: t('certifications.certifications.git.description'),
    url: t('certifications.certifications.git.link')
  },
  { 
    id: 5, 
    name: t('certifications.certifications.linux.title'),
    issuer: t('certifications.certifications.linux.issuer'),
    date: t('certifications.certifications.linux.date'),
    description: t('certifications.certifications.linux.description'),
    url: t('certifications.certifications.linux.link')
  }
]);
</script>

<style scoped>
.certifications{
  width: 100%;
  background-color: var(--background-color);

}

.certifications-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--background-color, #2c3e50);
}

.certifications-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color, #ffffff);
}

.certifications-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .certifications-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>