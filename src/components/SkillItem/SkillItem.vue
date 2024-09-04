<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
});
</script>

<template>
    <div class="skill-item">
        <h4>{{ skill.name }}</h4>
        <div class="skill-level">
            <div class="skill-bar" :style="{ width: `${skill.level}%` }"></div>
        </div>
    </div>
</template>

<style scoped>
.skill-item {
    margin-bottom: 1rem;
}

.skill-level {
    background-color: #f0f0f0;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
}

.skill-bar {
    background-color: #42b983;
    height: 100%;
}
</style>