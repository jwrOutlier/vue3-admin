<template>
  <div class="base-menu">
    <ul class="menu-list">
      <li class="menu-i" v-for="(item, idx) in yourList" :key="idx">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
defineProps({
  yourList: {
    type: Array as PropType<{ name: string; icon: string }[]>,
    default: () => [
      {
        name: 'xxx',
        icon: 'xxx',
      },
    ],
	},
});
</script>
<style scoped lang="scss">
.base-menu {
  height: 100%;
  width: 256px;
  background-color: var(--primary-theme-2);
  color: var(--color-menu-text);
  padding: 30px 10px;
  box-sizing: border-box;
	.menu-list{
		.menu-i{
			&:hover{
				color: #fff;
				cursor: pointer;
			}
		}
	}
}
</style>
