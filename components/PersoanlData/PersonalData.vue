<script setup lang="ts">
import type { Personal } from '~/type/Personal'

const emit = defineEmits<{
  (e: 'send', value: Personal): void
}>()

const observerRef = shallowRef()

const data = ref<Personal>({
  name: '',
  firstName: '',
  surname: '',
  date: '',
  place: ''
})

function onSubmit() {
  observerRef.value.validate().then(({ valid }: { valid: boolean }) => {
    if (valid)
      emit('send', { ...data.value })
  })
}
</script>

<template>
  <div class="personal-data">
    <ValidationForm ref="observerRef" v-slot="{ handleSubmit }" as="div">
      <Form
        type="vertical"
        :adaptive-on900="true"
        @submit="handleSubmit($event, onSubmit())"
      >
        <div class="personal-data__grid">
          <ValidationField v-slot="{ field, errors }" name="name" rules="required">
            <FormElement :error="errors[0]">
              <Input
                v-bind="field"
                v-model="data.name"
                :error="!!errors.length"
                placeholder="Фамилия"
              />
            </FormElement>
          </ValidationField>
          <ValidationField
            v-slot="{ field, errors }"
            name="firstName"
            rules="required"
          >
            <FormElement :error="errors[0]">
              <Input
                v-bind="field"
                v-model="data.firstName"
                placeholder="Имя"
                :error="!!errors.length"
              />
            </FormElement>
          </ValidationField>
          <ValidationField
            v-slot="{ field, errors }"
            name="surname"
            rules="required"
          >
            <FormElement :error="errors[0]">
              <Input
                v-bind="field"
                v-model="data.surname"
                placeholder="Отчество"
                :error="!!errors.length"
              />
            </FormElement>
          </ValidationField>
          <ValidationField
            v-slot="{ field, errors }"
            name="date"
            rules="required"
          >
            <FormElement :error="errors[0]">
              <Input
                v-bind="field"
                v-model="data.date"
                placeholder="Страна, место рождения"
                :error="!!errors.length"
              />
            </FormElement>
          </ValidationField>
          <ValidationField
            v-slot="{ field, errors }"
            name="place"
            rules="required"
          >
            <FormElement :error="errors[0]">
              <Input
                v-bind="field"
                v-model="data.place"
                placeholder="Дата рождения"
                :error="!!errors.length"
              />
            </FormElement>
          </ValidationField>
          <FormElement>
            <Input
              v-model="data.email"
              placeholder="Почта"
            />
          </FormElement>
        </div>
        <Button fluid>
          Продолжить
        </Button>
      </Form>
    </ValidationForm>
  </div>
</template>

<style scoped>
.personal-data__grid {
  display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 20px;
}

@media (max-width: 800px) {
  .personal-data__grid {
    grid-template-columns: repeat(1,1fr);
}
}
</style>
