<template>
  <div class="earth-component">
    <div style="width: 100%; height: 100%" id="earth-container"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Earth from './app'
import models from './models'

const handleDateChange = (v: any, d: Date) => {
  const newDate = v ? v.target.value : d
  const date = new Date()
  date.setTime(newDate)
  models.updateAllPositions(new Date())
}
onMounted(() => {
  const e = new Earth('#earth-container')
  setInterval(() => {
    handleDateChange(null, new Date())
  }, 1000)
})
</script>
<style scoped lang="scss">
.earth-component {
  height: 100%;
  border: 1px solid var(--border-color);
}
</style>
