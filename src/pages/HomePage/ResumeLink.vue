<template>
<a class="resume-link" :href="`/resume-${locale}.pdf`" target="_blank">
  <font-awesome-icon class="icon" icon="fa-solid fa-file-pdf" />
  <span class="text">{{ $t('links.resume') }}</span>
</a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<style scoped>
.resume-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3xs);
  padding: var(--spacing-2xs);
  font-family: var(--font-stack-mono);
  font-size: var(--font-sm);
  font-weight: 600;
}

.text { color: var(--muted-text-color); }
</style>
