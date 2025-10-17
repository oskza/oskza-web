<template>
<ul class="cta-btn-list">
  <li>
    <CTABtn color="accent" url="#contact" icon="fa-solid fa-envelope">
      {{ $t('btns.contact') }}
    </CTABtn>
  </li>
  <li>
    <CTABtn color="primary" icon="fa-solid fa-file-pdf" :url="resumeUrl" external outline>
      {{ $t('btns.resume') }}
    </CTABtn>
  </li>
</ul>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CTABtn from './CTABtn.vue'

const { locale } = useI18n()

const resumeUrl = computed(() => `/resume_${locale.value}.pdf`)
</script>

<style scoped>
.cta-btn-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
</style>
