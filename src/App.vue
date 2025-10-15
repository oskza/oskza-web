<template>
  <router-view />
</template>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

watch(locale, (lang) => {
  document.documentElement.lang = lang
  document.title = `${t('profile.name')} | ${t('profile.position')}`
  localStorage.setItem('lang', lang)
}, { immediate: true })
</script>
