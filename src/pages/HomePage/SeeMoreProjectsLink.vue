<template>
<InternalLink class="see-more-projects-link" routeName="projects">
  <span class="text">{{ $t('btns.seeMoreProjects') }}</span>
  <font-awesome-icon class="icon" icon="fa-solid fa-arrow-right" />
</InternalLink>
</template>

<script setup>
import InternalLink from '../../components/ui/InternalLink.vue'
</script>

<style scoped>
.see-more-projects-link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3xs);
  font-size: var(--font-sm);
  color: var(--muted-text-color);
}

.icon { font-size: var(--font-xs); }
</style>
