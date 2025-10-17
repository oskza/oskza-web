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
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: var(--header-bg-color);
  color: var(--header-text-color);
}

.name {
  font-size: 2.5rem;
  line-height: 3.2rem;
  margin-bottom: .75rem;
}

.position {
  font-size: 1.25rem;
  line-height: 1.7rem;
  color: var(--muted-text-color);
}
</style>
