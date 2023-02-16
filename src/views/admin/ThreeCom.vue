<template>
  <div class="three-com">
    <TitleCom :message="'地球组件'" />
    <EarthComponent />
  </div>
</template>

<script lang="ts" setup>
import TitleCom from '@/components/titleCom/TitleCom.vue'
import EarthComponent from '@/components/EarthComponent/EarthComponent.vue'
</script>
<style scoped lang="scss">
.three-com {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
