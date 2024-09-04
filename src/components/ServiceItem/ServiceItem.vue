<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    service: {
        type: Object,
        required: true
    }
});

</script>

<template>
    <div class="service-item">
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
        <ul v-if="service.features">
            <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
        </ul>
    </div>
</template>

<style scoped>
.service-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
}

ul {
    padding-left: 1.5rem;
}
</style>