<template>
<ul class="cta-btn-list">
  <li>
    <CTABtn color="accent" url="#contact" icon="fa-solid fa-envelope">
      {{ $t('btns.contact') }}
    </CTABtn>
  </li>
  <li>
    <CTABtn color="primary" icon="fa-solid fa-file-pdf" url="/resume_el.pdf" external outline>
      {{ $t('btns.resume') }}
    </CTABtn>
  </li>
</ul>
</template>

<script setup>
import CTABtn from './CTABtn.vue'
</script>

<style scoped>
.cta-btn-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
