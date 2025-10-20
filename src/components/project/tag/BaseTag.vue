<template>
<InternalLink class="tag" routeName="projects" :query="mergedQuery">
  <slot></slot>
</InternalLink>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import InternalLink from '../../ui/InternalLink.vue'

const { query } = defineProps({
  query: { type: Object, default: null }
})

const route = useRoute()

const mergedQuery = computed(() => {
  if (route.name !== 'projects')
    return query

  const currentQuery = route.query || {}
  const newQuery = { ...currentQuery, ...query }

  Object.keys(newQuery).forEach(key => {
    if (newQuery[key] === '' || newQuery[key] == null)
      delete newQuery[key]
  })

  return newQuery
})
</script>

<style scoped>
.tag {
  display: inline-block;
  padding: var(--spacing-2xs) var(--spacing-md);
  font-size: var(--font-xs);
  font-weight: 600;
}
</style>
