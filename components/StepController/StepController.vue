<script setup lang="ts">
const props = defineProps<{
  list: {
    name: string
    value: string
  }[]
}>()

const current = ref(0)
const route = useRoute()
const router = useRouter()

watch(
  () => current.value,
  (step) => {
    if (step !== Number(route.query?.step))
    { router.push({
      path: route.path,
      query: { step: step.toString() },
    }) }
  },
  { immediate: true }
)

watch(
  () => route.query,
  ({ step }) => {
    if (Number(step) !== current.value) {
      next()
      goTo(+Number(step) || 0)
    }
  }
)

onUnmounted(() => {
  router.push({ path: route.path, query: { step: undefined } })
})

function next() {
  current.value += 1
}

function prev() {
  current.value = Math.max(0, current.value - 1)
}

function goTo(index: number) {
  if (index < current.value)
    current.value = Math.max(index, 0)
}

const nextStepData = computed(() => current.value + 1 !== props.list.length ? props.list[current.value + 1] : undefined)

const progressRange = computed(() =>
  current.value ? (current.value / (props.list.length - 1)) * 100 : (current.value + 1 / (props.list.length)) * 100
)
</script>

<template>
  <div class="steps">
    <div
      class="steps__row"
    >
      <div
        v-for="(el, index) in list"
        :key="el.value"
        class="steps__step-tab"
        :class="{
          'steps__step-tab_active': index === current,
        }"
      >
        <h1 class="step__name">
          {{ el.name }}
        </h1>
        <div class="steps__progress-bar">
          <div class="steps__progress" :style="`width: ${progressRange}%`" />
        </div>
        <div class="steps__row">
          <div class="steps__step-tab-round">
            Шаг {{ index + 1 }} из {{ list.length }}
          </div>
          <div v-if="nextStepData" class="step__next-value">
            Следующий шаг: {{ nextStepData.name }}
          </div>
        </div>
      </div>
    </div>
    <slot name="top" />
    <div
      v-for="(el, index) in list"
      :key="el.value"
      class="steps__content"
      :class="{ steps__content_active: index === current }"
    >
      <keep-alive>
        <slot :next="next" :prev="prev" :name="el.value" />
      </keep-alive>
    </div>
  </div>
</template>

<style scoped>
.steps {
  justify-content: space-between;
}

.steps__row {
  display: flex;
  justify-content: space-between;
}

.step__name {
  text-align: center;
}

.steps__step-tab {
  margin-right: 20px;
  width: 100%;
}

.steps__step-order-tabs {
  padding: 0 6px;
}

.steps__step-tab {
  display: none;
  padding-bottom: 9px;
  color: #818181;
  text-decoration: none;
}

.steps__step-tab_active {
  cursor: pointer;
  display: block;
}

.steps__step-tab_active .steps__step-tab-round {
  color: #000;
}

.steps__step-tab_active .steps__step-tab-text {
  font-weight: 500;
  color: #000000;
}

.steps__step-tab-text {
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
}

.steps__content {
  display: none;
}

.steps__content_active {
  display: block;
}

.steps__progress-bar {
  width: 100%;
  height: 20px;
  background-color: #d9d9d9;
  border-radius: 12px;
  overflow: hidden;
  margin: 20px 0;
}

.steps__progress {
  height: 100%;
  background-color: #11C86F;
  transition: width 0.3s;
}
</style>
