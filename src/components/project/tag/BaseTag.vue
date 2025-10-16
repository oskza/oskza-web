<template>
<InternalLink class="tag" routeName="projects" :queryKey :queryValue>
  <slot></slot>
</InternalLink>
</template>

<script setup>
import InternalLink from '../../ui/InternalLink.vue'

const { queryKey, queryValue } = defineProps({
  queryKey: { type: String, required: true },
  queryValue: { type: String, required: true }
})
</script>

<style scoped>
.tag {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-lg);
  font-size: var(--font-xs);
  font-weight: 600;
}
</style>
