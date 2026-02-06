<template>
<router-view />
</template>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { useRoute } from 'vue-router'
const route = useRoute()

const { locale, t, tm } = useI18n()

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

watch(locale, () => {
  document.documentElement.lang = locale.value
  localStorage.setItem('lang', locale.value)
}, { immediate: true })

watch([locale, () => route.fullPath], () => {
  const titleKey = route.meta?.titleKey
  document.title = titleKey
    ? t(titleKey)
    : `oskza.com: ${t('profile.name')} / ${t('profile.position')}`

  const descriptionKey = route.meta?.descriptionKey
  setMeta('description', descriptionKey ? t(descriptionKey) : t('profile.summary'))

  const keywordsKey = route.meta?.keywordsKey
  const keywords = keywordsKey ? tm(keywordsKey) : undefined
  if (Array.isArray(keywords))
    setMeta('keywords', keywords.join(', '))
}, { immediate: true })
</script>
