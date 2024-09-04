<script setup>
import SkillItem from '@components/SkillItem/SkillItem.vue';

</script>

<template>
  <div class="about">
    <h1>Sobre Mí</h1>
    <p class="description">
      Soy un desarrollador full stack con un impetu por el mundo tech y la impresión 3D. Mi experiencia abarca desde el desarrollo web hasta la creación de videojuegos, lo que me ha permitido adquirir un conjunto diverso de habilidades técnicas y blandas.
    </p>
    <div class="highlights">
      <div class="highlight-item">
        <h3>Desarrollo Web</h3>
        <p>Experiencia en Vue.js, React.js, Express.js y bases de datos como MongoDB, PostgreSQL y MySQL.</p>
      </div>
      <div class="highlight-item">
        <h3>Desarrollo de Videojuegos</h3>
        <p>Competente en C#, Unity y Godot para la creación de experiencias interactivas únicas.</p>
      </div>
      <div class="highlight-item">
        <h3>Impresión 3D</h3>
        <p>Entusiasta de la impresión 3D, aplicando esta tecnología en proyectos innovadores.</p>
      </div>
    </div>
    <div class="soft-skills">
      <h3>Habilidades Blandas</h3>
      <ul>
        <li>Gestión eficiente de plazos cortos</li>
        <li>Trabajo en equipo</li>
        <li>Empatía</li>
        <li>Comunicación efectiva</li>
      </ul>
    </div>
  </div>

  <SkillItem />
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .description {
    max-width: 800px;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;

    .highlight-item {
      flex: 1;
      min-width: 250px;
      max-width: 350px;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      h3 {
        margin-bottom: 0.5rem;
      }
    }
  }

  .soft-skills {
    max-width: 600px;

    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;

      li {
        background-color: rgba(66, 185, 131, 0.2);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
      }
    }
  }
}
</style>