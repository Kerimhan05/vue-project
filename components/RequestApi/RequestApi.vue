<script lang="ts" setup>
import isEqual from 'lodash.isequal'
import axios from 'axios'

const props = defineProps<{
  api: string
}>()

const loading = ref(false)
const success = ref(false)
const error = ref(false)
const localData = ref()

async function request<T>(data: T, delay?: number) {
  console.log(data)

  if (!isEqual(localData.value, data)) {
    localData.value = data
    loading.value = true

    /**
   * Добавил setTimeout, для того чтобы продемонстрировать состояние проверки данных, чтобы было правдоподобно :)
   */
    setTimeout(async () => {
      try {
        await axios.get(`https://reqres.in/api${props.api}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 12345'
          }
        })
        success.value = true
      } catch (e) {
        error.value = true
      } finally {
        loading.value = false
      }
    }, delay || 0)
  }
}
</script>

<template>
  <slot
    :loading="loading"
    :success="success"
    :error="error"
    :request="request"
  />
</template>
