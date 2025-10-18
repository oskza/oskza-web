<template>
<ul class="locale-selector">
  <li v-for="lang in languages" :key="lang">
    <AppBtn class="btn-lang" :class="{ selected: isSelected(lang) }" color="plain" :onClick="() => changeLang(lang)">
      {{ lang.toUpperCase() }}
    </AppBtn>
  </li>
</ul>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppBtn from './AppBtn.vue'

const { locale } = useI18n()

const languages = ref([ 'en', 'el' ])

const isSelected = lang => lang === locale.value

const changeLang = lang => locale.value = lang
</script>

<style scoped>
.locale-selector {
  display: flex;
  font-size: var(--font-xs);
}

li:not(:last-child)::after {
  content: "|";
  margin: 0 var(--spacing-2xs);
  opacity: .65;
}

.btn-lang {
  font-family: var(--font-stack-mono);
  color: inherit;
}

.selected {
  font-weight: 600;
  color: var(--accent-color);
}
</style>
