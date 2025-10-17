<template>
<AppSection class="projects section" :title="$t('homePage.sectionTitles.projects')">
  <ProjectList :projects />
  <footer><SeeMoreProjectsLink /></footer>
</AppSection>
</template>

<script setup>
import AppSection from '../../components/layout/AppSection.vue'
import ProjectList from '../../components/project/List.vue'
import SeeMoreProjectsLink from './SeeMoreProjectsLink.vue'

const { projects } = defineProps({ projects: { type: Array, required: true } })
</script>

