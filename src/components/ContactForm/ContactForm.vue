<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  // Here you would typically send the form data to a server
  console.log('Form submitted:', form.value)
  // Reset form after submission
  form.value = { name: '', email: '', message: '' }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form.name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required>
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" v-model="form.message" required></textarea>
    </div>
    <button type="submit">Send</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
}
div {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input,
textarea {
  width: 100%;
  padding: 0.5rem;
}
button {
  align-self: flex-start;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>