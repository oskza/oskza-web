<template>
<div class="home-page">
  <AppHeader />
  <div class="page-content">
    <ProjectsSection :projects="featuredProjects" />
  </div>
</div>
</template>

<script setup>
import AppHeader from '../../components/layout/AppHeader.vue'
import ProjectsSection from './ProjectsSection.vue'
import { projects } from '../../data/projects'

const featuredProjects = projects.filter(project => project.featured === true)
</script>

<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  padding: 0 var(--spacing-xl) var(--spacing-xl);
}
</style>
