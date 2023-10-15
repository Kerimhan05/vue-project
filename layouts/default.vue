<template>
  <div class="layout">
    <div class="layout__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .layout {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .layout__content {
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    padding: 20px;
  }
</style>
