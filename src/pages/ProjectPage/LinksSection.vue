<template>
<AppSection v-if="Object.keys(links).length" class="links" :title="$t('projectPage.sectionTitles.links')">
  <ul class="link-list">
    <li v-if="links.repository">
      <font-awesome-icon class="icon" icon="fa-brands fa-github" />
      <a :href="links.repository" target="_blank">{{ $t('projectPage.links.repository') }}</a>
    </li>
    <li v-if="links.demo">
      <font-awesome-icon class="icon" icon="fas fa-link" />
      <a :href="links.demo" target="_blank">{{ $t('projectPage.links.demo') }}</a>
    </li>
  </ul>
</AppSection>
</template>

<script setup>
import AppSection from '../../components/layout/AppSection.vue'

const { links } = defineProps({
  links: { type: Object, required: true }
})
</script>

<style scoped>
li {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-2xs);
}

.icon { color: var(--primary-color); }
</style>
