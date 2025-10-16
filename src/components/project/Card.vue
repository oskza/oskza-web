<template>
<div class="project-card">
  <InternalLink routeName="project" :params="{ slug: project.slug }">
    <h4 class="title">{{ $t(`projects.${ project.id }.title`) }}</h4>
  </InternalLink>
  <p class="summary">{{ shortDescr($t(`projects.${ project.id }.summary`)) }}</p>
  <div class="tags">
    <TechTagList v-if="project.stack?.length" :stack="project.stack" />
    <CategoryTagList v-if="project.categories?.length" :categories="project.categories" />
  </div>
</div>
</template>

<script setup>
import InternalLink from '../ui/InternalLink.vue'
import TechTagList from './tag/TechTagList.vue'
import CategoryTagList from './tag/CategoryTagList.vue'

const { project } = defineProps({
  project: { type: Object, required: true }
})

const shortDescr = (text, limit = 15) => {
  const words = text.split(' ')
  return words.length > limit
          ? words.slice(0, limit).join(' ') + '...'
          : text;
}
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: 2rem 1rem;
  font-size: .9rem;
  border: 1px solid var(--border-color);
  border-radius: 3px;
}

.title {
  font-size: 1.2rem;
  line-height: 1.75rem;
}

.summary { color: var(--muted-text-color); }

.tags {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}
</style>
