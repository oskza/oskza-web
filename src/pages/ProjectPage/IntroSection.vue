<template>
<AppSection class="intro">
  <p class="summary">{{ summary }}</p>
  <p class="type">
    <InternalLink routeName="projects" queryKey="type" :queryValue="type">
      {{ $t(`projectTypes.${ type }`) }}
    </InternalLink>
  </p>
</AppSection>
</template>

<script setup>
import AppSection from '../../components/layout/AppSection.vue'
import InternalLink from '../../components/ui/InternalLink.vue'

const { summary, type } = defineProps({
  summary: { type: String, required: true },
  type: { type: String, required: true }
})
</script>
