<template>
<InternalLink class="tag" routeName="projects" :query="query">
  <slot></slot>
</InternalLink>
</template>

<script setup>
import InternalLink from '../../ui/InternalLink.vue'

const { query } = defineProps({
  query: { type: Object, default: null }
})
</script>

<style scoped>
.tag {
  display: inline-block;
  padding: var(--spacing-2xs) var(--spacing-md);
  /* padding: var(--spacing-xs) var(--spacing-lg); */
  font-size: var(--font-xs);
  font-weight: 600;
}
</style>
