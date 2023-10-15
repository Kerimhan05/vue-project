<script setup lang="ts">
const emit
  = defineEmits<{
    (e: 'submit', event: Event): void
  }>()

function onSubmit(e: Event) {
  e.preventDefault()
  emit('submit', e)
}
</script>

<template>
  <form
    @submit="onSubmit"
  >
    <slot />
  </form>
</template>
