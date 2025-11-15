<template>
<div class="page">
  <h2 class="page-title"><slot name="title"></slot></h2>
  <div class="page-options"><slot name="options"></slot></div>
  <div class="page-content"><slot></slot></div>
</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { projects } from '../../data/projects'

const route = useRoute()
const { t, locale } = useI18n()

const lastMatch = computed(() => route.matched[route.matched.length - 1])

const translatedBreadcrumbs = computed(() => {
  const raw = typeof lastMatch.value.meta.breadcrumbs === 'function'
              ? lastMatch.value.meta.breadcrumbs(route)
              : lastMatch.value.meta.breadcrumbs ?? []

  return raw.map(item => {
    let label = item.labelKey
                ? t(item.labelKey)
                : item.label

    if (projects.some(p => p.id === label))
      label = t(`projects.${label}.title`)

    return { ...item, label }
  })
})
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
}

.page-title {
  font-size: var(--font-4xl);
  line-height: 2.75rem;
}

.page-options {
  position: relative;
  display: flex;
  justify-content: flex-end;
  font-size: var(--font-sm);
  color: var(--muted-text-color);
}
</style>
