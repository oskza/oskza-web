<template>
<div class="courses-page">
  <h2 class="page-title">{{ $t(`coursesPage.pageTitle`) }}</h2>
  <div class="page-content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut dolorem rem accusamus reprehenderit magni autem delectus sapiente esse porro.</p>
  </div>
</div>
</template>

<style scoped>
.page-title {
  font-size: var(--font-4xl);
  line-height: 2.75rem;
  padding: var(--spacing-3xl) var(--spacing-xl);
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  padding: 0 var(--spacing-xl) var(--spacing-xl);
}
</style>
