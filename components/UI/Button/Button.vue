<script setup lang="ts">
interface Props {
  fluid?: boolean
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  fluid: false,
  disabled: false,
})
</script>

<template>
  <button
    class="button" :class="[{ button_fluid: fluid }]"
    :disabled="disabled"
  >
    <template v-if="$slots.default">
      <slot />
    </template>
  </button>
</template>

<style scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: #fff;
    border: none;
    border-radius: 8px;
    background-color: red;
    cursor: pointer;
    outline: none;
    height: 50px;
    transition: all 250ms ease-out 100ms;
    padding: 12px 16px;
  }

  .button:disabled {
    cursor: not-allowed;
    background-color: #e3e3e3;
  }

  .button_fluid {
    width: 100%;
  }
</style>
