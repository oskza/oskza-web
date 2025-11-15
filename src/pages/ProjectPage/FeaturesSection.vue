<template>
<AppSection class="features" :title="$t('projectPage.sectionTitles.features')">
  <ul class="feature-list">
    <li v-for="(feature, index) in features" :key="index">
      <font-awesome-icon class="icon" icon="fas fa-circle-check" />
      <span class="text">{{ feature }}</span>
    </li>
  </ul>
</AppSection>
</template>

<script setup>
import AppSection from '../../components/layout/AppSection.vue'

const { features } = defineProps({
  features: { type: Array, required: true }
})
</script>

<style scoped>
.feature-list {
  margin-inline: auto;
  text-align: start;
  line-height: 1.75rem;
}

li {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-2xs);
}

.icon { color: var(--primary-color); }
</style>
