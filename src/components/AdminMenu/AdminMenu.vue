<template>
  <n-menu
    :options="menuOptions"
    class="side-menu"
    :value="currentActive"
    @update:value="handleUpdateValue" />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { adminMenu } from '@/config/menu'
let menuOptions = reactive([...adminMenu])
const currentActive = ref('three')

// 切换菜单
const handleUpdateValue = (key:string) => {
  currentActive.value = key
}
</script>
<style lang="scss" scoped></style>
