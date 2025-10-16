<template>
<AppSection class="overview" :title="$t('projectPage.sectionTitles.overview')">
  <p class="description" v-html="description.replaceAll('\n', '<br>')"></p>
</AppSection>
</template>

<script setup>
import AppSection from '../../components/layout/AppSection.vue'

const { description } = defineProps({
  description: { type: String, required: true }
})
</script>
