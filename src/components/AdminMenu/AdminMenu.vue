<template>
  <n-menu :options="menuOptions" class="side-menu" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const menuOptions = reactive([
  {
    label: '地球组件',
    key: 'earth',
  },
  {
    label: '基础功能',
    key: 'baseFunction',
    children: [
      {
        label: '基础组件',
        key: 'baseComponent',
      },
    ],
  },
  {
    label: '工作台',
    key: 'wordbench2',
  },
  {
    label: '工作台',
    key: 'wordbench3',
  },
  {
    label: '工作台',
    key: 'wordbench4',
  },
  {
    label: '工作台',
    key: 'wordbench5',
  },
])
</script>
<style lang="scss">
.side-menu:not(.n-menu--collapsed) {
  .n-menu-item-content {
    &::before {
      left: 5px;
      right: 5px;
    }
    &.n-menu-item-content--selected,
    &:hover {
      &::before {
        border-left: 4px solid var(--primary-theme);
      }
    }
    .n-menu-item-content-header {
      &:hover {
        color: var(--primary-theme);
      }
    }
  }
}
</style>
