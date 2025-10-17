<template>
<header class="header">
  <div class="profile">
    <h1 class="name">{{ $t('profile.name') }}</h1>
    <h2 class="position">{{ $t('profile.position') }}</h2>
  </div>
  <p class="summary">{{ $t('profile.summary') }}</p>
  <CTABtnList />
</header>
</template>

<script setup>
import CTABtnList from '../ui/CTABtnList.vue'
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  padding: var(--spacing-3xl) var(--spacing-xl);
  background-color: var(--header-bg-color);
  color: var(--header-text-color);
}

.name {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-5xl);
  line-height: 3.2rem;
}

.position {
  font-size: var(--font-xl);
  line-height: 1.7rem;
  color: var(--muted-text-color);
}
</style>
