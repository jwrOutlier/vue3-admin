<template>
  <div class="APP">
    <!-- <EarthComponent /> -->
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import EarthComponent from './components/EarthComponent/EarthComponent.vue'
</script>
<style scoped lang="scss">
.APP {
  background-color: aliceblue;
}
</style>
<style lang="scss">
.APP {
  min-height: 100vh;
}
</style>
