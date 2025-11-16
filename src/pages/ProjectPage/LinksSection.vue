<template>
<AppSection v-if="Object.keys(links).length" class="links" :title="$t('projectPage.sectionTitles.links')">
  <ul class="link-list">
    <li v-if="links.repository">
      <a :href="links.repository" target="_blank">
        <fa-icon class="icon" icon="fa-brands fa-github" />
        <span class="text">{{ $t('projectPage.links.repository') }}</span>
      </a>
    </li>
    <li v-if="links.demo">
      <a :href="links.demo" target="_blank">
        <fa-icon class="icon" icon="fas fa-link" />
        <span class="text">{{ $t('projectPage.links.demo') }}</span>
      </a>
    </li>
  </ul>
</AppSection>
</template>

<script setup>
import AppSection from '../../components/layout/AppSection.vue'

const { links } = defineProps({ links: { type: Object, required: true } })
</script>

<style scoped>
a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-2xs);
}

.icon { color: var(--primary-color); }
</style>
