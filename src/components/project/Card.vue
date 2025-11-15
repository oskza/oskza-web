<template>
<div class="project-card">
  <h4 class="title">
    <InternalLink routeName="project" :params="{ slug: project.slug }">
      {{ $t(`projects.${ project.id }.title`) }}
    </InternalLink>
  </h4>
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
  justify-content: space-between;
  gap: var(--spacing-md);
  padding: var(--spacing-xl) var(--spacing-md);
  font-size: .9rem;
  border: 1px solid var(--border-color);
  border-radius: 3px;
}

html.light .project-card {
  border: none;
  box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;
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
