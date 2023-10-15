<script setup lang="ts">
const emit = defineEmits<{
  (e: 'send', value: { name: string; value: string }[]): void
}>()

const list = [
  {
    name: 'Сумма займа',
    value: '23 000'
  },
  {
    name: 'Ставка',
    value: '10%'
  },
  {
    name: 'Плата за заем',
    value: '2000'
  },
  {
    name: 'ПСК',
    value: '15.10.2023'
  }
]
</script>

<template>
  <div class="conditions">
    <div v-for="item, index in list" :key="index" class="conditions__item">
      <p>{{ item.name }}</p>
      <p>{{ item.value }}</p>
    </div>
    <Button fluid @click="emit('send', list)">
      Подписать договор
    </Button>
  </div>
</template>

<style scoped>
.conditions {
  display: flex;
  flex-direction: column;
  row-gap: 15px
}
.conditions__item {
  display: flex;
  justify-content: space-between;
}
</style>
