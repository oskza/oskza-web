<template>
<AppSection class="tags">
  <p class="type">
    <InternalLink routeName="projects" :query="{ type: type }">
      {{ $t(`projectTypes.${ type }`) }}
    </InternalLink>
  </p>
  <TechTagList :stack="stack" />
  <CategoryTagList :categories="categories" />
</AppSection>
</template>

<script setup>
import AppSection from '../../components/layout/AppSection.vue'
import TechTagList from '../../components/project/tag/TechTagList.vue'
import CategoryTagList from '../../components/project/tag/CategoryTagList.vue'
import InternalLink from '../../components/ui/InternalLink.vue'

const { type, stack, categories } = defineProps({
  type: { type: String, required: true },
  stack: { type: Array, required: true },
  categories: { type: Array, required: true }
})
</script>

<style scoped>
.type {
  font-size: var(--font-sm);
  font-weight: 600;
}
</style>
