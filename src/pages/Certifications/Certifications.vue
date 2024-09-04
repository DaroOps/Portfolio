<template>
  <div class="certifications">
    <div class="certifications-container">
      <h1 class="certifications-title">Mis Certificaciones</h1>
      <div class="certifications-grid">
        <CertificationItem v-for="cert in certifications" :key="cert.id" :certification="cert" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CertificationItem from '@components/CertificationItem/CertificationItem.vue';

const certifications = [
  { 
    id: 1, 
    name: 'Desarrollador Full Stack', 
    issuer: 'HENRY Bootcamp',
    date: 'Marzo 2023',
    description: 'Programa intensivo de desarrollo web full stack, cubriendo tecnologías front-end y back-end.',
    url: 'https://certificates.soyhenry.com/cert?id=1234567890'
  },
  { 
    id: 2, 
    name: 'Unity Certified Developer', 
    issuer: 'Unity Technologies',
    date: 'Julio 2023',
    description: 'Certificación que valida habilidades en desarrollo de juegos y aplicaciones interactivas con Unity.',
    url: 'https://unity.com/products/unity-certifications/1234567890'
  },
  { 
    id: 3, 
    name: 'English Certification B2', 
    issuer: 'ES-SET',
    date: 'Septiembre 2023',
    description: 'Certificación de nivel intermedio alto en inglés, equivalente al nivel B2 del Marco Común Europeo.',
    url: 'https://www.es-set.org/verify/1234567890'
  },
  { 
    id: 4, 
    name: 'Git: De Novato a Experto', 
    issuer: 'Mastermind',
    date: 'Noviembre 2023',
    description: 'Curso completo sobre control de versiones con Git, desde conceptos básicos hasta flujos de trabajo avanzados.',
    url: 'https://mastermind.dev/certificates/git/1234567890'
  },
  { 
    id: 5, 
    name: 'Personalización de Entornos Linux', 
    issuer: 'Mastermind',
    date: 'Enero 2024',
    description: 'Curso avanzado sobre la personalización y optimización de entornos Linux para desarrollo.',
    url: 'https://mastermind.dev/certificates/linux/1234567890'
  }
];
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