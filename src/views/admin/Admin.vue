<template>
  <div class="admin">
    <div class="menu-wrapper">
      <AdminMenu />
    </div>
    <div class="admin-container">
      <AdminConHeader />
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import AdminMenu from '@/components/AdminMenu/AdminMenu.vue'
import AdminConHeader from './AdminConHeader.vue'
</script>
<style scoped lang="scss">
.admin {
  height: 100vh;
  display: flex;
  .menu-wrapper {
    width: 220px;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid var(--border-color);
  }
  .admin-container {
    flex: 1;
    .content {
      height: calc(100vh - 65px);
      overflow-y: auto;
      padding: 15px;
      box-sizing: border-box;
    }
  }
}
</style>
