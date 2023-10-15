<template>
  <div class="layout">
    <div class="layout__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .layout__content {
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 800px) {
    .layout__content {
      max-width: none;
      padding: 0;
  }
  }
</style>
