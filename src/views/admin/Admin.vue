<template>
  <div class="admin">
    <div class="menu-wrapper">
      <AdminMenu />
    </div>
    <div class="admin-container">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import AdminMenu from '@/components/AdminMenu/AdminMenu.vue'
</script>
<style scoped lang="scss">
.admin {
  height: 100%;
  .menu-wrapper {
    height: 100%;
  }
}
</style>
