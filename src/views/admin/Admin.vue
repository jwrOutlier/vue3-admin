<template>
  <div class="admin">
    <div class="admin-sidebar">
      <AdminMenu />
    </div>
    <div class="admin-right">
      <div class="admin-container"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AdminMenu from '@/components/AdminMenu/AdminMenu.vue'
</script>
<style scoped lang="scss">
.admin {
  height: 100vh;
  .admin-sidebar {
    width: 220px;
    min-width: 220px;
    height: 100%;
  }
}
</style>
