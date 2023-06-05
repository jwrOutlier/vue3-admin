<template>
  <div class="base-main">
    <div class="main-container-t">
      <BaseMenu />
      <div class="contnet">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>

    <div class="main-b"></div>
  </div>
</template>

<script lang="ts" setup>
import BaseMenu from './BaseMenu.vue';
</script>
<style scoped lang="scss">
.base-main {
  width: 100%;
  height: 100vh;
  background-color: var(--primary-theme);
  display: flex;
  flex-direction: column;
  .main-container-t {
    height:calc(100vh - 90px);
  }
  .main-b {
    height:90px;
    background-color:var(--primary-theme-2);
  }
}
</style>
