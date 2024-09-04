<script setup>
 import ContactForm from '@components/ContactForm/ContactForm.vue'
</script>

<template>
 <div class="contact">
    <div>
      <ContactForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .contact {
    height: 100vh;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
</style>