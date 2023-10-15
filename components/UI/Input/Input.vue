<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), {
  error: false,
  autocomplete: 'on',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus', value: string): void
  (e: 'blur', value: string): void
}>()

interface Props {
  modelValue?: string
  placeholder?: string
  error?: boolean
}

function onInput(event: Event) {
  if (event.target instanceof HTMLInputElement)
    emit('update:modelValue', event.target.value)
}
function onFocus(event: Event) {
  if (event.target instanceof HTMLInputElement)
    emit('focus', event.target.value)
}
function onBlur(event: Event) {
  if (event.target instanceof HTMLInputElement)
    emit('blur', event.target.value)
}
</script>

<template>
  <label class="input-wrap">
    <input
      type="text"
      class="input" :class="[{ input_error: props.error }]"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    >
  </label>
</template>

<style scoped>
  .input {
    position: relative;
    display: flex;
    align-items: center;
    width: 91%;
    padding: 16px;
    font-weight: 500;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 8px;
    overflow: hidden;
    outline: none;
  }

  .input:focus {
    border-color: #005ff9;
  }
  .input::placeholder {
    color: grey;
  }

  .input_error {
    border-radius: #fa3f16;
  }
  .input_error::placeholder {
    color: #fa3f16;
  }
  .input_error:focus {
    border-color: #fa3f16;
  }

  .input-wrap {
    position: relative;
    display: block;
  }
</style>
