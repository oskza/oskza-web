<template>
<Page class="project-page">
  <template #title>{{ $t(`projects.${ project.id }.title`) }}</template>
  <p class="summary">{{ $t(`projects.${project.id}.summary`) }}</p>
  <TagsSection :type="project.type" :stack="project.stack" :categories="project.categories" />
  <OverviewSection :description="$t(`projects.${project.id}.description`)" />
  <FeaturesSection :features="$tm(`projects.${project.id}.features`)" />
  <LinksSection v-if="project.links" :links="project.links" />
</Page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Page from '../../components/page/Page.vue'
import TagsSection from './TagsSection.vue'
import OverviewSection from './OverviewSection.vue'
import FeaturesSection from './FeaturesSection.vue'
import LinksSection from './LinksSection.vue'
import { projects } from '../../data/projects'

const route = useRoute()

const project = projects.find(project => project.slug === route.params.slug)
</script>

<style scoped>
.summary { color: var(--muted-text-color); }
</style>
