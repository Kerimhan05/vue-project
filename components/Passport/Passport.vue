<script setup lang="ts">
const emit = defineEmits<{
  (e: 'send', value: { series: string; number: string }): void
}>()

const data = ref({
  series: '',
  number: ''
})

function onSend() {
  emit('send', { ...data.value })
}
</script>

<template>
  <div class="passport">
    <ValidationForm v-slot="{ handleSubmit }" as="div">
      <Form type="inline" :adaptive-on900="true" @submit="handleSubmit($event, () => onSend())">
        <div class="passport__forms">
          <ValidationField v-slot="{ field, errors }" name="series" rules="required">
            <FormElement :error="errors[0]">
              <Input
                v-model="data.series"
                v-bind="field"
                :error="!!errors.length"
                placeholder="Серия"
              />
            </FormElement>
          </ValidationField>
          <ValidationField v-slot="{ field, errors }" name="number" rules="required">
            <FormElement :error="errors[0]">
              <Input
                v-model="data.number"
                v-bind="field"
                :error="!!errors.length"
                placeholder="Номер"
              />
            </FormElement>
          </ValidationField>
        </div>
        <Button fluid>
          Продолжить
        </Button>
      </Form>
    </ValidationForm>
  </div>
</template>
