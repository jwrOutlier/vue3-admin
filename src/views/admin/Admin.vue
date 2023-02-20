<template>
  <div class="admin">
    <div class="admin-sidebar">
      <AdminMenu />
    </div>
    <div class="admin-right">
      <AdminHeader />
      <div class="admin-container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AdminMenu from '@/components/AdminMenu/AdminMenu.vue'
import AdminHeader from './AdminHeader.vue'
</script>
<style scoped lang="scss">
.admin {
  height: 100vh;
  display: flex;
  .admin-sidebar {
    width: 220px;
    min-width: 220px;
    height: 100%;
  }
  .admin-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .admin-container {
      flex: 1;
      padding: 15px;
      box-sizing: border-box;
    }
  }
}
</style>
