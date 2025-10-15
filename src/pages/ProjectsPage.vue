<template>
<div class="projects-page">
  <div class="page-head">
    <h1>{{ $t('projectsPage.pageTitle') }}</h1>
  </div>
  <div class="page-options">
    <GoBackBtn />
  </div>
  <div class="page-content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consectetur officiis dolorem vero odio quasi a exercitationem quidem et pariatur magnam quod quo non, sapiente voluptatum nostrum repudiandae, rem at nemo! Mollitia et ipsa libero impedit corrupti sunt, natus culpa alias illum, excepturi fugiat facilis in nemo iusto enim nam!</p>
  </div>
</div>
</template>

<script setup>
import GoBackBtn from '../components/ui/GoBackBtn.vue'
</script>

<style scoped>
.page-options {
  font-size: var(--font-sm);
}
</style>
