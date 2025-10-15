<template>
<div class="layout">
  <main class="main-content">
    <router-view />
  </main>
</div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content { flex: 1; }
</style>
