<script setup>
import { useThemeStore } from './stores/theme.js'
import { storeToRefs } from 'pinia';

import Nav from '@components/Nav/Nav.vue';
import Footer from '@components/Footer/Footer.vue';

const themeStore = useThemeStore()
const { isDarkTheme } = storeToRefs(themeStore);
</script>

<template>
  <div class="app-container":class="{ 'is-dark-theme': isDarkTheme }">
    <Nav />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
</style>