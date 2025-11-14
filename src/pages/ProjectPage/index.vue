<template>
<div class="project-page">
  <h2 class="page-title">{{ $t(`projects.${ project.id }.title`) }}</h2>
  <div class="page-content">
    <p class="summary">{{ $t(`projects.${project.id}.summary`) }}</p>
    <TagsSection :type="project.type" :stack="project.stack" :categories="project.categories" />
    <OverviewSection :description="$t(`projects.${project.id}.description`)" />
    <FeaturesSection :features="$tm(`projects.${project.id}.features`)" />
    <LinksSection v-if="project.links" :links="project.links" />
  </div>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import TagsSection from './TagsSection.vue'
import OverviewSection from './OverviewSection.vue'
import FeaturesSection from './FeaturesSection.vue'
import LinksSection from './LinksSection.vue'
import { projects } from '../../data/projects'

const route = useRoute()

const project = projects.find(project => project.slug === route.params.slug)
</script>

<style scoped>
.page-title {
  font-size: var(--font-4xl);
  line-height: 2.75rem;
  margin-bottom: var(--spacing-3xl);
}

.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-3xl);
}

.summary { color: var(--muted-text-color); }
</style>
