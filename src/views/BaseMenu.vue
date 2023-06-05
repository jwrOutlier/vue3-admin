<template>
  <div class="base-menu">
    <ul class="menu-list">
      <li
        class="menu-i"
        v-for="(item, idx) in menuList"
        :key="idx"
        @click="handleChangeTab(item.to, idx)"
        :class="currentTab === idx ? 'active' : ''">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface IMenuList {
  name: string;
  icon: string;
  to: string;
}
const menuList = ref<IMenuList[]>([
  {
    name: '首页',
    icon: 'xxx',
    to: '/home',
  },
  // {
  //   name: '专辑',
  //   icon: 'xxx',
  //   to: '/',
  // },
  // {
  //   name: '歌手',
  //   icon: 'xxx',
  //   to: '/',
  // },
  // {
  //   name: '收藏歌单',
  //   icon: 'xxx',
  //   to: '/',
  // },
  // {
  //   name: '最近播放',
  //   icon: 'xxx',
  //   to: '/',
  // },
]);

const router = useRouter();
const currentTab = ref(0);
const handleChangeTab = (path: string, cTabIdx: number) => {
  currentTab.value = cTabIdx;
  router.push(path);
};
</script>

<style scoped lang="scss">
.base-menu {
  height: 100%;
  width: 225px;
  background-color: var(--primary-theme-2);
  color: var(--color-menu-text);
  padding: 30px 10px;
  box-sizing: border-box;
  .menu-list {
    .menu-i {
      font-size: 13px;
      padding: 15px 10px;
      box-sizing: border-box;
      &:hover {
        color: #fff;
        cursor: pointer;
      }
    }

    .active {
      color: #fff;
    }
  }
}
</style>
