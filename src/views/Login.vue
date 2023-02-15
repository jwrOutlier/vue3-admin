<template>
  <div class="Login">
    <div class="login-center">
      <div class="login-center-l">
        <img src="../assets/images/login_banner.webp" alt="" />
      </div>

      <div class="login-center-r">
        <h1>Vue3-admin</h1>
        <n-input
          class="user bgColor"
          type="text"
          size="large"
          placeholder="请输入用户名"
          v-model="state.username" />
        <n-input
          class="password bgColor"
          size="large"
          placeholder="请输入密码"
          type="password"
          show-password-on="click"
          v-model="state.password" />
        <n-button
          color="#065b48"
          class="login-btn"
          size="large"
          @click="handleLogin">
          登录</n-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'

const message = useMessage()
const router = useRouter()
const state = reactive({
  username: '',
  password: '',
})

const handleLogin = () => {
  if (state.username === 'admin' && state.password === '123') {
    router.push('/main')
  } else {
    message.warning('请输入正确的用户名和密码！')
  }
}
</script>
<style scoped lang="scss">
.Login {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/login_bg.webp');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-center {
    width: 700px;
    height: 400px;
    display: flex;
    background-color: rgb(0, 0, 0);
    border-radius: 5px;
    .login-center-l {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 90%;
        height: 70%;
      }
    }
    .login-center-r {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 30px;
      box-sizing: border-box;
      h1 {
        color: var(--primary-theme-text);
      }
      .user {
        margin: 30px 0;
      }
      .login-btn {
        width: 100%;
        margin-top: 30px;
      }

      .bgColor {
        background-color: rgb(0, 0, 0);
      }
    }
  }
}
</style>
