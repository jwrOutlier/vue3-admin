<template>
  <div class="AdminMenu">
    <n-menu :options="menuOptions" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const menuOptions = reactive([
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
  },
])
</script>
<style scoped lang="scss">
.AdminMenu {
  height: 100%;
  position: relative;
}
</style>
