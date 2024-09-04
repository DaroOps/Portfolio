<script setup>
import DarkThemeButton from '@components/DarkThemeButton/DarkThemeButton.vue';
import Lang from '@components/Lang/Lang.vue';
import IconLogo from '@icons/IconLogo.vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const router = useRouter();

console.log(t);


const navItems = computed(() => [
    { name: t('nav.home'), link: '/home' },
    { name: t('nav.about'), link: '/about' },
    { name: t('nav.projects'), link: '/projects' },
    { name: t('nav.certifications'), link: '/certifications'},
    { name: t('nav.services'), link: '/services' },
    { name: t('nav.contact'), link: '/contact' },
]);

const navigate = (link) => {
    router.push(link);
};
</script>

<template>
    <nav class="navbar">
        <div class="logo-container">
           <IconLogo  :gradientAngle=60 startColor="var(--primary-color)" endColor="var(--acent-color)" :animationDuration=12 />
        </div>

        <ul class="nav-list">
            <li v-for="item in navItems" :key="item.name" class="nav-item">
                <a :href="item.href" @click.prevent="navigate(item.link)">{{ item.name }}</a>
            </li>
        </ul>

        <div class="nav-actions">
            <DarkThemeButton />
            <Lang />
        </div>

    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    position: sticky;
    top: 0;
    background-color: var(--background-color);
    box-shadow: 0 2px 4px rgb(from var(--acent-color) r g b / 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: space-between;
    padding: 10px 20px;
    transition: all 0.3s ease;
   

    .logo-container {
        display: flex;
        height: 100%;
    }

    .nav-list {
        display: flex;
        gap: 30px;
        align-items: center;
        list-style-type: none;
        padding: 0;
        margin: 0;

        .nav-item {
            margin: 0px;
            & a {
                cursor: pointer;
                text-decoration: none;
                color: var(--text-color);
                font-weight: 600;
                padding: 0px;
                animation:
                    typing 3.5s steps(40, end),
                    blink-caret .75s step-end infinite;

                &:hover {
                    color: var(--acent-color);

                }
            }
        }

    }

    .nav-actions {
        display: flex;
        gap: 30px
    }


    @keyframes typing {
        from {
            width: 0
        }

        to {
            width: 100%
        }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {

        from,
        to {
            border-color: transparent
        }

        50% {
            border-color: orange;
        }
    }
}
</style>