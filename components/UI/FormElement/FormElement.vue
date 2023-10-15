<script lang="ts" setup>
interface Props {
  error?: string
  required?: boolean
}

withDefaults(defineProps<Props>(), {
  required: false,
})
</script>

<template>
  <div class="form-element__row">
    <div class="form-element__field">
      <!-- Поле формы -->
      <slot />
    </div>
    <div
      class="form-element__hints"
    >
      <div v-if="error || $slots.error" class="form-element__error-text">
        <!-- Текст для ошибки элемента формы -->
        <slot name="error">
          {{ error }}
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .form-element__row {
    display: block;
    margin-bottom: 10px;
    flex-grow: 1;
  }

  .form-element__error-text,
  .form-element__helper-text {
    font-size: 11px;
    line-height: 13px;
    font-style: italic;
  }

  .form-element__error-text {
    color: #e6110f;
  }

  .form-element__hints {
    width: 100%;
    min-height: 13px;
    margin-top: 2px;
  }
</style>
