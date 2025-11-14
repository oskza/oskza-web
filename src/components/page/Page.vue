<template>
<div class="page">
  <Options>
    <!-- <GoBackBtn /> -->
    <Breadcrumbs :items="breadcrumbs" />
    <slot name="options"></slot>
  </Options>
  <Title><slot name="title"></slot></Title>
  <div class="page-content"><slot></slot></div>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Title from './Title.vue'
import Options from './Options.vue'
import Breadcrumbs from '../ui/Breadcrumbs.vue'

const route = useRoute()
const { t } = useI18n()

const lastMatch = route.matched[route.matched.length - 1]

const breadcrumbs =
  typeof lastMatch.meta.breadcrumbs === 'function'
    ? lastMatch.meta.breadcrumbs(route, { t })
    : lastMatch.meta.breadcrumbs ?? []
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
