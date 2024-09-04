<template>
    <div class="certifications">
      <h1>My Certifications</h1>
      <CertificationItem v-for="cert in certifications" :key="cert.id" :certification="cert" />
    </div>
  </template>
  
  <script setup>
  import CertificationItem from '@components/CertificationItem/CertificationItem.vue'
  

  const certifications = [
          { 
            id: 1, 
            name: 'Vue.js Developer Certification', 
            issuer: 'Vue.js Official',
            date: 'June 2023',
            description: 'Comprehensive certification covering Vue.js fundamentals and advanced concepts.',
            url: 'https://certification.vuejs.org/check/1234567890'
          },
          { 
            id: 2, 
            name: 'AWS Certified Developer - Associate', 
            issuer: 'Amazon Web Services',
            date: 'September 2023',
            description: 'Validates technical expertise in developing and maintaining applications on AWS.',
            url: 'https://www.credly.com/badges/1234567890'
          },
          // Add more certifications as needed
        ]
    
  </script>