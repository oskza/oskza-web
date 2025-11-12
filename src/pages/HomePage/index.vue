<template>
<div class="home-page">
  <div class="profile">
    <h1 class="name">{{ $t('profile.name') }}</h1>
    <h2 class="position">{{ $t('profile.position') }}</h2>
    <div class="details">
      <p class="summary">{{ $t('profile.summary') }}</p>
      <p class="resume"><ResumeLink /></p>
    </div>
  </div>
  <CTABtnList />
</div>
</template>

<script setup>
import ResumeLink from './ResumeLink.vue'
import CTABtnList from './CTABtnList.vue'
</script>

<style scoped>
.home-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: var(--spacing-lg);
  padding: var(--spacing-3xl) min(var(--spacing-4xl), 10%) var(--spacing-xl);
}

.profile {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.name {
  font-size: var(--font-5xl);
  line-height: 3.2rem;
}

.position {
  font-size: var(--font-xl);
  line-height: 1.7rem;
  color: var(--muted-text-color);
}

.details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: var(--spacing-2xl);
}

.resume {
  display: flex;
  justify-content: center;
}
</style>
