<template>
  <el-menu
    class="elmenu"
    active-text-color="rgb(2, 221, 182)"
    background-color="#fff"
    default-active="/workbench"
    text-color="#065b48"
    router>
    <template v-for="item in adminMenu" :key="item.key">
      <el-sub-menu :index="item.key" v-if="item.children">
        <template #title>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item :index="i.key" v-for="i in item.children" :key="i.key">
          {{ i.label }}
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item :index="item.key" v-else>{{ item.label }}</el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { adminMenu } from '@/config/menu'
</script>
<style lang="scss" scoped>
.elmenu {
  height: 100%;
  width: 100%;
}
</style>
