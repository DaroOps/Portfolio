<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const {t, locale} = useI18n();
const selectedLanguage = ref(locale.value);

watch(selectedLanguage, (newLang) => {
  locale.value = newLang;
  console.log(locale.value);
});

</script>

<template>
  <select v-model="selectedLanguage" class="language-selector">
    <option value="en">{{ t('languages.english') }}</option>
    <option value="es">{{ t('languages.spanish') }}</option>
  </select>
</template>

<style scoped>
.language-selector {
  padding: 0px;
  font-weight: 600;
  border: none;
  transition: all 0.3s ease;
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>