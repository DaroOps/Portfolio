<script setup>
import SkillItem from '@components/SkillItem/SkillItem.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
  <div class="about">
    <h1>{{ t('about.title') }}</h1>
    <p class="description">
      {{ t('about.content') }}
      <!-- Soy un desarrollador full stack con un impetu por el mundo tech y la impresión 3D. Mi experiencia abarca desde el desarrollo web hasta la creación de videojuegos, lo que me ha permitido adquirir un conjunto diverso de habilidades técnicas y blandas. -->
    </p>
    <div class="highlights">
      <div class="highlight-item">
        <h3>{{ t('about.highlights.frontend') }}</h3>
        <p>{{ t('about.highlights.frontendExperience') }}</p>
      </div>
      <div class="highlight-item">
        <h3> {{ t('about.highlights.gamedev') }}</h3>
        <p>{{ t('about.highlights.gamedevExperience') }}</p>
      </div>
      <div class="highlight-item">
        <h3>{{ t('about.highlights.dprinting') }}</h3>
        <p>{{ t('about.highlights.dprintingExperience') }}</p>
      </div>
    </div>
    <div class="soft-skills">
      <h3>{{ t('about.softSkills.title') }}</h3>
      <ul>
        <li>{{ t('about.softSkills.agile') }}</li>
        <li>{{ t('about.softSkills.teamwork') }}</li>
        <li>{{ t('about.softSkills.collaboration') }}</li>
        <li>{{ t('about.softSkills.communication') }}</li>
        <li>{{ t('about.softSkills.leadership') }}</li>
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