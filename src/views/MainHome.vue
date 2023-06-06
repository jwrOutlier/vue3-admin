<template>
  <div class="main-home">
    <section v-for="item in 5" :key="item">
      <ListTitle title="推荐" />
      <ul class="list">
        <li class="list-item" v-for="i in 10" :key="i">
          <img src="@/assets/images/login_bg.webp" alt="" />
          <div class="r">
            <p>xxxx</p>
            <p>xxxx2</p>
            <p>xxxx3</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
import ListTitle from '@/components/ListTitle.vue';
</script>
<style scoped lang="scss">
.main-home {
  position: relative;
  height: 100%;
  section {
    margin-bottom: 10px;
    .list {
      display: grid;
      grid-template-columns:1fr 1fr;
      gap: 10px 15px;
      .list-item {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, 0.025);
        background-color: var(--primary-theme-2);
        img {
          width: 50px;
          height: 50px;
          margin-right: 20px;
        }
        .r {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
