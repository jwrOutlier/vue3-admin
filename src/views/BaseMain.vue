<template>
  <div class="base-main">
    <div class="main-container-t">
      <BaseMenu />

      <div class="contnet">
        <div class="content-top">{{ route.meta.title }}</div>
        <div class="content-bottom">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>

    </div>

    <div class="main-b"></div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import BaseMenu from './BaseMenu.vue';

const route = useRoute();
</script>
<style scoped lang="scss">
.base-main {
  width: 100%;
  height: 100vh;
  background-color: var(--primary-theme);
  display: flex;
  flex-direction: column;
  .main-container-t {
    height: calc(100vh - 90px);
    display: flex;
    .contnet {
      flex: 1;
      color: #fff;
      display: flex;
      flex-direction: column;
      .content-top {
        padding: 20px;
        box-sizing: border-box;
        font-size: 40px;
        font-weight: bold;
        background-color: var(--primary-theme-2);
      }
      .content-bottom {
        padding: 20px;
        box-sizing: border-box;
        height: calc(100% - 92px);
        overflow-y: auto;
      }
    }
  }
  .main-b {
    height: 90px;
    background-color: var(--primary-theme-2);
    box-shadow: 0 0 2px #000;
  }
}
</style>
