<template>
<div class="projects-page">
  <h2 class="page-title">{{ $t('projectsPage.pageTitle') }}</h2>
  <div class="page-content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consectetur officiis dolorem vero odio quasi a exercitationem quidem et pariatur magnam quod quo non, sapiente voluptatum nostrum repudiandae, rem at nemo! Mollitia et ipsa libero impedit corrupti sunt, natus culpa alias illum, excepturi fugiat facilis in nemo iusto enim nam!</p>
  </div>
</div>
</template>

<style scoped>
.page-title {
  font-size: var(--font-3xl);
  line-height: 2.5rem;
  padding: var(--spacing-3xl) var(--spacing-xl);
}

.page-content {
  display: flex;
  flex-direction: column;
  padding: 0 var(--spacing-xl) var(--spacing-xl);
  gap: var(--spacing-xl);
}
</style>
