<template>
  <div class="list-title">
    <span>{{ title }}</span>
    <span>
      更多
      <el-icon><ArrowRightBold /></el-icon>
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<style scoped lang="scss">
.list-title {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  box-sizing: border-box;
  span {
    color: var(--color-menu-text);
    &:first-child {
      font-size: 16px;
    }
    &:last-child {
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
}
</style>
