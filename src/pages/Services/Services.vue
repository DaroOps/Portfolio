<script setup>
import ServiceItem from '@components/ServiceItem/ServiceItem.vue'

const services = [
        { 
          id: 1, 
          name: 'Web Development', 
          description: 'Custom web development services',
          features: ['Responsive design', 'Performance optimization', 'SEO-friendly']
        },
        { 
          id: 2, 
          name: 'UI/UX Design', 
          description: 'User interface and experience design',
          features: ['Wireframing', 'Prototyping', 'User testing']
        },
        // Add more services as needed
      ]
</script>

<template>
  <div class="services">
    <h1>My Services</h1>
    <ServiceItem v-for="service in services" :key="service.id" :service="service" :features="service.features" />
  </div>
</template>

<style lang="scss" scoped>

</style>