<script setup lang="ts">
const emit = defineEmits<{
  (e: 'phone', value: { phone: string }): void
  (e: 'code', value: { code: string }): void
}>()

const phone = ref('')
const code = ref('')
const activeType = ref<'phone' | 'code'>('phone')

function onSendPhone() {
  emit('phone', { phone: phone.value })
  activeType.value = 'code'
}
</script>

<template>
  <div class="phone">
    <ValidationForm v-if="activeType === 'phone'" v-slot="{ handleSubmit }" as="div">
      <Form type="inline" :adaptive-on900="true" @submit="handleSubmit($event, () => onSendPhone())">
        <div class="phone__forms">
          <ValidationField v-slot="{ field, errors }" name="phone" rules="required">
            <FormElement :error="errors[0]">
              <Input
                v-model="phone"
                v-bind="field"
                :error="!!errors.length"
                placeholder="Номер телефона*"
              />
            </FormElement>
          </ValidationField>
        </div>
        <Button fluid>
          Получить код
        </Button>
      </Form>
    </ValidationForm>
    <ValidationForm v-if="activeType === 'code'" v-slot="{ handleSubmit }" as="div">
      <Form type="inline" :adaptive-on900="true" @submit="handleSubmit($event, () => emit('code', { code }))">
        <div class="phone__forms">
          <ValidationField v-slot="{ field, errors }" name="code" rules="required">
            <FormElement :error="errors[0]">
              <Input
                v-model="code"
                v-bind="field"
                :error="!!errors.length"
                placeholder="Введите код из смс*"
              />
            </FormElement>
          </ValidationField>
        </div>
        <Button fluid>
          Отправить код
        </Button>
      </Form>
    </ValidationForm>
  </div>
</template>
