<template>
<section class="section">
  <h3 class="title" v-if="title">{{ title }}</h3>
  <slot></slot>
</section>
</template>

<script setup>
const { title } = defineProps({
  title: String
})
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.title {
  font-size: var(--font-xl);
  color: var(--primary-color);
}
</style>
