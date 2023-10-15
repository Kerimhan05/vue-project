<script setup lang="ts">
const controllerNavigation = [
  {
    name: 'Личные данные',
    value: 'personal',
  },
  {
    name: 'Паспорт',
    value: 'passport',
  },
  {
    name: 'Номер телефона',
    value: 'phone',
  },
  {
    name: 'Условия',
    value: 'conditions',
  },
]
</script>

<template>
  <div class="page-main">
    <RequestApi v-slot="{ loading, success, request }" api="/users">
      <StatusBlock v-if="loading" type="loading" description="Это займет до 30 мин" />
      <StatusBlock v-else-if="success" type="success" description="Ожидайте начисление денежных средств" />
      <div v-else>
        <StepController :list="controllerNavigation">
          <template #personal="{ next }">
            <RequestApi v-slot="{ request: sendPersonal }" api="/users/1">
              <PersonalData @send="sendPersonal($event), next()" />
            </RequestApi>
          </template>
          <template #passport="{ next }">
            <RequestApi v-slot="{ request: sendPassport }" api="/user/2">
              <Passport @send="sendPassport($event), next()" />
            </RequestApi>
          </template>
          <template #phone="{ next }">
            <RequestApi v-slot="{ request: sendPhone }" api="/user/3">
              <Phone @phone="sendPhone($event)" @code="sendPhone($event), next()" />
            </RequestApi>
          </template>
          <template #conditions>
            <Conditions @send="request($event, 5000)" />
          </template>
        </StepController>
      </div>
    </RequestApi>
  </div>
</template>

<style scoped>
.page-main {
  margin: 20px 0;
  padding: 0 10px;
}
</style>
