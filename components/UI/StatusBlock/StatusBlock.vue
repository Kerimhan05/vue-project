<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  type?: 'loading' | 'success'
  title?: string
  description?: string
}

const props = defineProps<Props>()

const defaultTitle = computed(() => {
  if (props.type === 'loading')
    return 'Проверка ваших данных'

  if (props.type === 'success')
    return 'Договор подписан'

  return null
})
</script>

<template>
  <div class="status">
    <div class="status__icon" :class="[{ [`status__icon_${type}`]: type }]" />
    <p class="status__title" :class="[{ [`status__title_${type}`]: type }]">
      {{ title ? title : defaultTitle }}
    </p>
    <template v-if="description">
      <div class="status__description">
        {{ description }}
      </div>
    </template>
  </div>
</template>

<style scoped>
.status {
  text-align: center;
}

.status__title {
  margin: 12px auto 0;
  font-size: 25px;
  line-height: 30px;
  font-weight: 500;
}
.status__description {
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;
}

.status__title_error {
  color: #e30613;
}

.status__title_warning {
  color: #eb8307;
}

.status__description {
  margin-top: 5px;
}

.status__icon {
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
}
.status__icon_loading {
  background-image: url('./asset/loading.svg');
}
.status__icon_success {
  background-image: url('./asset/success.svg');
}
</style>
