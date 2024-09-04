<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import GithubIcon from '@icons/GithubIcon.vue';
import LinkedinIcon from '@icons/LinkedinIcon.vue';
import MailIcon from '@icons/MailIcon.vue';
import CloudIcon from '@icons/CloudIcon.vue';

</script>

<template>
  <div class="home">

    <div class="home-info">
      <h1>{{ t('home.presentation') }} {{ t('home.name') }}</h1>
      <h2>{{ t('home.title') }}</h2>
      <main class="home-content">
        <div class="home-items">
          <div class="home-content-item">
            <h3>{{ t('home.gameDev') }}</h3>
            <p>{{ t('home.gameDevSubtitle') }}</p>
          </div>
          <div class="home-content-item">
            <h3>{{ t('home.fullstackDev') }}</h3>
            <p>{{ t('home.fullstackDevSubtitle') }}</p>
          </div>
        </div>
        <div class="hobby-item">
          <div class="hobby">
            <p>{{ t('home.hobby') }}</p>
          </div>

          <div class="explore">
            <h3>{{ t('home.explore') }}</h3>
          </div>
        </div>
      </main>
    </div>

    <div class="social-container">
      <div class="image-container">
        <img src='/../../assets/images/profileImage
        .jpg' alt="profile-image">
      </div>
      <div class="social-icons">
        <ul>
          <li>
            <a href="#">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <MailIcon />
            </a>
          </li>
        </ul>
      </div>
      <button class="button" type="button">
        <span class="button__text">{{ t('home.cv') }}</span>
        <span class="button__icon"> <CloudIcon /></span>        
      </button>
    </div>


  </div>
</template>

<style lang="scss" scoped>
.home {
  background-color: var(--background-color);
  height: 90vh;
  display: flex;
  gap: 30px;
  padding: 2rem;

  .social-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 30%;
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 0rem;

    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      overflow: hidden;
      height: 100%;
      width: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .social-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        gap: 30px;
        list-style-type: none;

        li {
          width: 30px;
          color: var(--text-color);
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            color: var(--acent-color);
          }
        }
      }
    }

    .button {
      height: 40px;
      cursor: pointer;
      display: flex;;
      gap: 10px;
      align-items: center;
      border: 1px solid var(--text-color);
      padding: 0 30px;
      background-color: var(--background-color);
      color: var(--text-color);
      .button__icon{
        display: flex;
        align-items: center;
        width: 19px;
      }

      &:hover {
        background-color: var(--secondary-color);
      }
    }

  }

  .home-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-color);

    text-align: center;

    h1 {
      margin: 0;
    }

    h2 {
      margin: 0;
    }


    .home-content {
      padding: 20px 0 0 0;
      display: flex;
      flex-direction: column;
      line-height: 1;
      gap: 30px;

      .home-items {
        display: flex;
        gap: 30px;

        .home-content-item {
          flex: 1;
          text-align: center;
          padding: 1rem;
          border-radius: 8px;
          background-color: rgb(from var(--primary-color) r g b / 0.1);
          transition: all 0.3s ease;

          h3 {
            margin-top: 0;
            font-size: 1.5rem;
            font-weight: 600;
          }

          p {
            margin-bottom: 1rem;
            font-size: 1.2rem;
            line-height: 1.5;
            font-weight: 500;
          }

          &:nth-child(1) {
            h3 {
              color: var(--acent-color);
            }
          }

          &:nth-child(2) {
            h3 {
              color: var(--secondary-color);
            }
          }

        }

      }
    }

    .hobby {
      padding: 1rem;
      border-radius: 8px;
      background-color: rgb(from var(--primary-color) r g b / 0.1);

    }

    .explore {
      border-radius: 8px;
      color: var(--text-color);
    }
  }
}
</style>