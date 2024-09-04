<template>
  <div class="contact-form-container">
    <h2 class="form-title">Contáctame</h2>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit" class="submit-button">
        <span>Enviar</span>
        <i class="fas fa-paper-plane"></i>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  // Aquí normalmente enviarías los datos del formulario a un servidor
  console.log('Formulario enviado:', form.value)
  // Resetear formulario después del envío
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgb(from var(--primary-color) r g b / 0.1);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.form-title {
  font-size: 2rem;
  color: var(--text-color, #ffffff);
  text-align: center;
  margin-bottom: 1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color, #bbbbbb);
  font-size: 0.9rem;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: rgb(from var(--acent-color) r g b / 0.1);
  color: var(--input-text-color, #ffffff);
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--focus-color, #42b983);
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-button {
  align-self: flex-start;
  padding: 0.8rem 1.5rem;
  background-color: var(--button-bg-color, #42b983);
  color: var(--button-text-color, #ffffff);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button:hover {
  background-color: var(--button-hover-bg-color, #3da776);
  transform: translateY(-2px);
}

.submit-button span {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .contact-form-container {
    padding: 1.5rem;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .submit-button {
    width: 100%;
  }
}
</style>