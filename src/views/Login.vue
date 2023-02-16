<template>
  <div class="Login">
    <div class="login-center">
      <div class="login-center-l">
        <img src="../assets/images/login_banner.webp" alt="" />
      </div>

      <div class="login-center-r">
        <div class="title">
          <img src="../assets/images/vue-mastery-logo.png" alt="" />
          <h1>Vue3-admin</h1>
        </div>
        <el-input
          class="user"
          placeholder="请输入用户名"
          v-model="state.username"></el-input>
        <el-input
          class="password"
          placeholder="请输入密码"
          type="password"
          v-model="state.password"
          show-password></el-input>
        <el-button
          type="primary"
          class="login-btn"
          size="large"
          @click="handleLogin">
          登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const state = reactive({
  username: '',
  password: '',
})

const router = useRouter()

const handleLogin = () => {
  ElMessage({
    type: 'success',
    message: '登录成功',
  })
  router.push('/admin')
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
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
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
      .title {
        display: flex;
        align-items: center;
        img {
          width: 75px;
          margin-right: 10px;
        }
        h1 {
          color: var(--primary-theme-text);
        }
      }
      .user {
        margin: 30px 0;
      }
      .login-btn {
        width: 100%;
        margin-top: 30px;
        background-color: var(--primary-theme);
        border: none;
      }
      :deep(.el-input__wrapper) {
        background-color: transparent;
      }
    }
  }
}
</style>
