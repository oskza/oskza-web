<template>
<div class="page">
  <Options>
    <Breadcrumbs :items="translatedBreadcrumbs" />
    <slot name="options"></slot>
  </Options>
  <Title><slot name="title"></slot></Title>
  <div class="page-content"><slot></slot></div>
</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { projects } from '../../data/projects'
import Title from './Title.vue'
import Options from './Options.vue'
import Breadcrumbs from '../ui/Breadcrumbs.vue'

const route = useRoute()
const { t, locale } = useI18n()

const lastMatch = computed(() => route.matched[route.matched.length - 1])

const translatedBreadcrumbs = computed(() => {
  const raw = typeof lastMatch.value.meta.breadcrumbs === 'function'
    ? lastMatch.value.meta.breadcrumbs(route)
    : lastMatch.value.meta.breadcrumbs ?? []

  return raw.map(item => {
    let label = item.labelKey ? t(item.labelKey) : item.label

    if (projects.some(p => p.id === label)) {
      label = t(`projects.${label}.title`)
    }

    return {
      ...item,
      label
    }
  })
})
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
}
</style>
