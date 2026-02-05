<template>
<div class="home-page">
  <div class="profile">
    <h1 class="name">{{ $t('profile.name') }}</h1>
    <h2 class="position">{{ $t('profile.position') }}</h2>
    <p class="summary">{{ $t('profile.summary') }}</p>
  </div>
  <CTABtns />
</div>
</template>

<script setup>
import CTABtns from './CTABtnList.vue'
</script>

<style scoped>
.home-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: var(--spacing-lg);
}

.name,
.summary {
  margin-block-end: var(--spacing-md);
}

.name {
  font-size: var(--font-5xl);
  line-height: 3.2rem;
}

.position {
  margin-block-end: var(--spacing-3xl);
  font-size: var(--font-xl);
  line-height: 1.7rem;
  color: var(--muted-text-color);
}

.summary {
  max-width: 750px;
  margin-inline: auto;
}
</style>
