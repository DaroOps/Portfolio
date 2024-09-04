<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <footer>
        <p>&copy; {{ t('footer.by') }} {{ t('footer.daro') }}. {{ t('footer.allRights') }}</p>
    </footer>
</template>

<style scoped>
footer {
    color: var(--text-color);
    padding: 1rem;
    background-color: var(--background-color);
    text-align: center;
}
</style>