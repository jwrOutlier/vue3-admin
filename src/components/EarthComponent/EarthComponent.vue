<template>
  <div class="earth-component">
    <ul class="statelliteList">
      <li
        v-for="(item, index) in satelliteList"
        :key="index"
        @click="handleClick(item.name)">
        {{ item.name }}
      </li>
    </ul>
    <div style="width: 100%; height: 100%" id="earth-container"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import Earth from './app'
import models from './models'

const satelliteList = reactive([
  {
    name: 'CALSPHERE 1',
  },
  {
    name: 'NINGXIA-1 6',
  },
  {
    name: 'ONEWEB-0293',
  },
])

const handleDateChange = (v: any, d: Date) => {
  const newDate = v ? v.target.value : d
  const date = new Date()
  date.setTime(newDate)
  models.updateAllPositions(new Date())
}
// 切换卫星
const handleClick = (name: string) => {}

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
  display: flex;
  .statelliteList {
    width: 20%;
    background-color: #000;
    color: aliceblue;
    padding-top: 10px;
    li {
      padding: 5px 10px;
      box-sizing: border-box;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  #earth-container {
    width: 80%;
  }
}
</style>
